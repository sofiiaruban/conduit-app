import { FC } from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "./favorite-button/favorite-button.component";

interface ArticleProps{}

export const Article: FC<ArticleProps>= () => {
  
  return (
    <article>
         <div className="border-t border-black/10 py-6" >
        Article
    </div>
    <div className="mb-4 font-light"></div>
    <Link to="/@nokwin">
       <img 
       src="https://api.realworld.io/images/demo-avatar.png" 
       alt="nokwin avatar"
       className="inline-block h-8 w-8 rounded-full"
        ></img>
    </Link>
    <div className="mr-6 ml-0.3 inline-block leading-4">
    <FavoriteButton/>

    </div>
    </article>
   
   
  );
}