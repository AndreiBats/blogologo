import React from "react";

import {
  Description,
  MainDate,
  MainImage,
  StyledArticlesItem,
  Title,
} from "./styles";

interface IProps {
  publishedAt: string;
  title: string;
  imageUrl: any;
}

export const ArticlesItem = ({ title, publishedAt, imageUrl }: IProps) => {
  return (
    <StyledArticlesItem>
      <MainImage>
        <img src={imageUrl} alt="" />
      </MainImage>
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
      </Description>
    </StyledArticlesItem>
  );
};
