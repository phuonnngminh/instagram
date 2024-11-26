
import MoreOptions from "../../assets/MoreOptions.svg";
import Profile from "../../assets/Profile.jpg";

import { PostItem } from "./PostItem";
import { StoryItem } from "./StoryItem";
import Suggestions from "../Suggestions";

export default function Feed() {
  return (
    <div className="flex flex-col grow ">
      <div className="flex flex-row">
        <div className="mt-4 w-full">
          <div className="mb-6">
            <StoryItem />
          </div>
          <div className="flex flex-col box-border items-center justify-start">
            <PostItem />
          </div>
        </div>
      </div>
    </div>
  );
}


