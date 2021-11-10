import { Redirect, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./features/Search/Search";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
