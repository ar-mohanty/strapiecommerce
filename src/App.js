import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Store from "./pages/Store/Store";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import OrderSuccessful from "./pages/OrderConfirm/orderSuccessful";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/orderSuccess",
        element: <OrderSuccessful />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
