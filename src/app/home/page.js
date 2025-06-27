import Banner from "./Banner/Banner";
import DailyStaples from "./DailyStaples/DailyStaples";
import DiscountBanner from "./DiscountBanner/DiscountBanner";
import GoToSuppliers from "./GoToSuppliers/GoToSuppliers";
import TopCategories from "./TopCategories/TopCategories";
import WeeklySales from "./WeeklySales/WeeklySales";


export default function HomePage() {
  return (
    <>
    <Banner/>
    <WeeklySales/>
    <GoToSuppliers/>
    <TopCategories/>
    <DiscountBanner/>
    <DailyStaples/>
    </>
  );
}
