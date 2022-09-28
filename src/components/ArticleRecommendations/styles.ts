import styled from "styled-components";
import { Media } from "../../ui";

const StyledArticleRecommendations = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 40px 32px;

  ${Media.Medium} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 16px;
  }

  ${Media.Small} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledArticleRecommendations };