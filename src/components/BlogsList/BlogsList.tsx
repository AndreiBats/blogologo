import { useEffect } from "react";
import { BlogsItem } from "../index";
import { fetchBlogs } from "../../app/feautures/blogSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getBlogs } from "../../app/selectors/blogSelectors";

import { Spinner } from "../Spinner/Spinner";
import { StyledBlogsList } from "./styles";

export const BlogsList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, blogs } = useAppSelector(getBlogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <StyledBlogsList>
      {blogs.map((blog) => {
        return <BlogsItem blog={blog} key={blog.id} />;
      })}
    </StyledBlogsList>
  );
};
