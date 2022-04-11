import GlobalStyles from "./components/styled/Global";
import { Container } from "./components/styled/Container.styled";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />

      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
