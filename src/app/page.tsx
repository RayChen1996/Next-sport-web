import Image from "next/image";
import Banner from "./components/page/Home/Banner";
import PhotoCategoryGrid from "./components/page/Home/PhotoCategoryGrid";
import NewsActive from "./components/page/Home/NewsActive";
import TodaySchedule from "./components/page/Home/TodaySchedule";

export default function Home() {
  return (
    <main>
      <Banner />
      <PhotoCategoryGrid />
      <TodaySchedule />
      <NewsActive />
    </main>
  );
}
