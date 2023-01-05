import { FC } from "react";
import {HeartOutline} from '@swiftcarrot/react-ionicons';
interface FavoriteButton{}

export const FavoriteButton: FC<FavoriteButton>= () => {
  
  return (
    <div className="">
      <HeartOutline/>
    </div>
   
  );
}