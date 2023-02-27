import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Counter from './Componets/Counter';
// import Header from './Componets/Header';
// import ColorTheme from './Componets/ColorTheme';
// import Todoapp from './Componets/Todo-App/Todoapp';
// import Crud from './Componets/Crud/Crud';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componets/Pages/Home/Home';
import AddEmployee from './Componets/Router-form/AddEmployee';
import ViewEmployee from './Componets/Router-form/ViewEmployee';
import Products from './Componets/Pages/Products/Products';
import Product from '../src/Componets/Product/Product'
// import Product from '../src/Componets/Product/ProductDetail'
// const menuList = ["Blog","About","Contact",<i class="fa-solid fa-magnifying-glass"></i>]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Header list={menuList}/>
    <ColorTheme /> */}
    {/* <Todoapp /> */}
    {/* <Crud /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/" element={<Product/>}></Route>
        {/* <Route path="/productDetail" element={<ProductDetail />}></Route> */}
        <Route path="/AddEmployee" element={<AddEmployee/>}></Route>
        <Route path="/ViewEmployee" element={<ViewEmployee />}></Route>
        <Route path="/viewProducts" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))~
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
