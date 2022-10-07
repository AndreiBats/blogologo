import { format } from "date-fns";

import { IArticle } from "types";
import { Button, Description, MainDate, MainImage, StyledArticlesItem, Title } from "./styles";
import { addToFavorites } from "app/features/favoritesSlice";
import { useToggle } from "hooks/index";
import { getUserInfo } from "app/selectors/userSelectors";
import { useAppDispatch, useAppSelector } from "app/hooks";

interface IProps {
  article: IArticle;
}

export const ArticlesItem = ({ article }: IProps) => {
  const { imageUrl, title, publishedAt } = article;
  const dispatch = useAppDispatch();
  const [isRead, toggleIsRead] = useToggle(false);
  const { isAuth } = useAppSelector(getUserInfo);

  const handleAddToLibrary = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavorites(article));
    toggleIsRead();
  };

  return (
    <StyledArticlesItem whileHover={{ scale: 1.1 }}>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>

        {isAuth ? (
          <Button onClick={handleAddToLibrary}>{isRead ? "Added to library" : "Read Later"}</Button>
        ) : (
          <Button> Sign In To Add To Favorites</Button>
        )}
      </Description>
    </StyledArticlesItem>
  );
};
