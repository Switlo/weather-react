import "./App.css";
import Header from "./Header";
import CentralCard from "./CentralCard";
import NextDays from "./NextDays";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container" id="container">
        <Header />
        <CentralCard />
        <NextDays />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}