import { ArticlesBlogs } from "../../components/ArticlesBlogs/ArticlesBlogs";
import { ArticlesList } from "../../components/ArticlesList/ArticlesList";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <ArticlesBlogs />
      <CustomSelect />
      <ArticlesList />
    </StyledHomePage>
  );
};