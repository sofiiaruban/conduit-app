import { FC } from "react";
interface FavoriteButtonProps{}

export const FavoriteButton: FC<FavoriteButtonProps> = () => {
  
  return (
    <button className="text-conduit-green text-sm border-conduit-green text-center align-middle cursor-pointer border py-1 px-2 rounded-buttonSm hover:text-white hover:bg-conduit-green focus:bg-conduit-darkGreen focus:text-white focus:border-black">
      <i className="ion-heart"></i>
      <span className="ml-1 font-normal">70</span>
    </button>
   
  );
}