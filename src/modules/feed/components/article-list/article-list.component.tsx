import { FC } from "react";
import { Container } from "../../../../common/components/container/container.component";
import { Article } from "../article/article.component";
interface ArticleListProps{}

export const ArticleList: FC<ArticleListProps> = () => {
  
  return (
    <Container>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
    </Container>
  );
}