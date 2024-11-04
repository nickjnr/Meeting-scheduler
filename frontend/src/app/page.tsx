import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import MainView from "./components/MainView";
import { fetchMeetings } from "@/lib/fetchMeetings";

export default async function Home() {
  const meetings = await fetchMeetings();


  return (
    <div className="grid min-h-screen w-full">
          
      {/* <Sidebar /> */}
      <MainView meetings={meetings} />
      {/* <div className="p-5">
        <MobileNav />
      </div> */}

     
    </div>
  );
}
