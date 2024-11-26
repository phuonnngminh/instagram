import Feed from "../components/Feed";
import Suggestions from "../components/Suggestions";
import LeftPanel from "../components/LeftPanel";

export default function Dashboard() {
  return (
    <div className="flex flex row w-full h-screen">
      <LeftPanel />
      <div className="flex px-16 justify-center overflow-y-auto h-full w-full">
        <Feed />
        <Suggestions />
      </div>
    </div>
  )
}