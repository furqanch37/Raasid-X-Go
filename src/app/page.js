import DailyStaples from "./DailyStaples/DailyStaples";
import Footer from "./footer/footer";
import styles from "./page.module.css";
import TopCategories from "./TopCategories/TopCategories";
import WeeklySales from "./WeeklySales/WeeklySales";

export default function Home() {
  return (
    <div className={styles.page}>
      <TopCategories/>
      <DailyStaples />
      <WeeklySales/>
     <Footer/>
    </div>
  );
}
