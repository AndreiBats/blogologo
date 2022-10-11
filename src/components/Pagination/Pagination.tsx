import { useEffect, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { StyledPagination, ButtonPrev, ButtonNext, Pages, Page, Page1 } from "./styles";
import { fetchArticlesByPage, fetchBlogsByPage } from "app/features";

interface IProps {
  value: string;
}

export const Pagination = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({
    _sort: "",
    _start: 0,
    _limit: 12,
  });

  useEffect(() => {
    dispatch(fetchArticlesByPage(requestParams));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchBlogsByPage(requestParams));
  }, [dispatch, requestParams]);

  const handlePrev = () => {
    setRequestParams({
      _start: requestParams._start === 0 ? 0 : requestParams._start - +requestParams._limit,
      _sort: value,
      _limit: requestParams._limit,
    });
  };

  const handleNext = () => {
    setRequestParams({
      _start: requestParams._start + +requestParams._limit,
      _sort: value,
      _limit: requestParams._limit,
    });
  };

  const handleFirstPage = () => {
    setRequestParams({
      _start: requestParams._start,
      _sort: value,
      _limit: requestParams._limit,
    });
  };

  const handleSecondPage = () => {
    setRequestParams({
      _start: requestParams._start + +requestParams._limit,
      _sort: value,
      _limit: requestParams._limit,
    });
  };

  const handleThirdPage = () => {
    setRequestParams({
      _start: requestParams._start + +requestParams._limit * 2,
      _sort: value,
      _limit: requestParams._limit,
    });
  };

  return (
    <StyledPagination>
      {requestParams._start === 0 ? (
        <ButtonPrev disabled>Prev</ButtonPrev>
      ) : (
        <ButtonPrev onClick={handlePrev}>Prev</ButtonPrev>
      )}

      <Pages>
        <Page1 onClick={handleFirstPage}>{requestParams._start / +requestParams._limit + 1}</Page1>
        <Page onClick={handleSecondPage}>{requestParams._start / +requestParams._limit + 2}</Page>
        <Page onClick={handleThirdPage}>{requestParams._start / +requestParams._limit + 3}</Page>
      </Pages>
      <ButtonNext onClick={handleNext}>Next</ButtonNext>
    </StyledPagination>
  );
};
