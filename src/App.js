import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Category from "./pages/Category/Category";
import Footer from "./components/Footer";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
      </Route>
    </Routes>
  </BrowserRouter>
  <Footer />
  </>
}

export default App;
