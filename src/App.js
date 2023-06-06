import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AllPopularCar from "./pages/allPopularCar";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="allPopularCar" element={<AllPopularCar />} />
          <Route path="category" element={<CategoryPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
