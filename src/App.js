import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Places from "./components/Places/Places";
import Services from "./components/Services/Services";
const App = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Places/>
      <Services/>
      <Footer/>
    </>
  );
};

export default App;
