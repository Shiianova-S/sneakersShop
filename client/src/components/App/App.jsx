import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";
// import RegForm from "../RegForm/RegForm";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import Home from "../Home/Home";
import ProductCurrentCard from "../../components/ProductCurrentCard/ProductCurrentCard";
import Profile from "../Profile/Profile";
import TestSveta from "../TestSveta/TestSveta";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import AddingReviews from "../AddingReviews/AddingReviews";
import Slider from "../Slider/Slider";
import EditCardForm from "../EditCardForm/EditCardForm";
import Wholesale from "../Wholesale/Wholesale";
import Admin from "../Admin/Admin";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import { initProductsListAC } from "../../redux/actionCreators/productsAC";
import { authAC } from "../../redux/actionCreators/usersAC";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const { cartProducts } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch("products", {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "sucsess") {
          dispatch(initProductsListAC(data.products));
        } else if (data.message === "noproducts") {
          console.log("noproducts");
        } else console.log(data.error);
      })
      .catch((error) => error.message);
  }, [dispatch]);

  // const {favoriteProducts} = useSelector(state => state.favoritesReducer);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  // useEffect(() => {
  //   // console.log(favoriteProducts);
  //   localStorage.setItem('favorite', JSON.stringify(favoriteProducts));
  // }, [favoriteProducts]);

  useEffect(() => {
    fetch("/auth", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => dispatch(authAC(data)))
      .catch((err) => console.log(err.message));
  }, [dispatch]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />

        <Slider />
     
        <ToastContainer />
        <div style={{ marginTop: "4%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/products/:id" element={<ProductCurrentCard />} />
            <Route path="/products/edit/:id" element={<EditCardForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/info" element={<Info />} />
            <Route path="/addreviews" element={<AddingReviews />} />
            <Route path="/test" element={<TestSveta />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
