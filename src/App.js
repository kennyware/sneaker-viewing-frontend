import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/styled/Global";
import { Container } from "./components/styled/Container.styled";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDisplay from "./components/ProductDisplay";
import Login from "./components/Login";

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
          <Route path="/products/:id" element={<ProductDisplay />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
