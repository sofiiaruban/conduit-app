import { FC } from "react";
interface TagListProps{}

export const TagList: FC<TagListProps> = () => {
  
  return (
    <ul className="flex">
     <li className="mr-1 mb-0.2 px-tag rounded-tag font-light text-date border border-conduit-gray-300 text-conduit-gray-600">one</li>
     <li className="mr-1 mb-0.2 px-tag rounded-tag font-light text-date  border border-conduit-gray-300 text-conduit-gray-600">two</li>
    </ul>
  );
}