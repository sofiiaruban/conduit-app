import { FC } from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../favorite-button/favorite-button.component";
import { TagList } from "../tag-list/tag-list.component";

interface ArticleProps{}

export const Article: FC<ArticleProps> = () => {
  
  return (
    <article>
      <div className="border-t border-black/10 py-6" >
        <div className="mb-4 font-light flex">
          <Link to="/@nokwin">
                  <img 
                  src="https://api.realworld.io/images/demo-avatar.png" 
                  alt="nokwin avatar"
                  className="inline-block h-8 w-8 rounded-full"
                  ></img>
          </Link>
          <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col justify-between">
          <Link to="/@nokwin" className="font-medium">Sofiia Ruban</Link>
          <span className="text-conduit-grey text-date">December 9, 2022</span>
          </div>
          <FavoriteButton/>
        </div> 
        <Link to="/article/qwert" className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-conduit-gray-1000">Some title</h1>
          <p className="text-conduit-gray-700 font-light mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
        </Link>
        <div className="flex justify-between">
        <span className="text-conduit-gray-700  font-light text-date">Read more...</span> 
        <TagList/>  
        </div>
           
    </div>
    </article>
   
   
  );
}