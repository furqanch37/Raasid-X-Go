import Footer from "./footer/footer";
import styles from "./page.module.css";
import Navbar from "./Navbar/Navbar";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className={styles.page}>
    
      <HomePage/>
    </div>
  );
}
