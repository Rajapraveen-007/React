import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.ZbUoM4lxWmGrkkoj3l4BAwHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
      </div>
      <div className="nav-container">
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search : </button>
      </div>
      <div className="rescontainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/4a1d133e-bcd6-4165-af86-b628fe800d1e_9052.JPG"
        alt="😒"
        className="cardone"
      />
      <h3>Meghana foods </h3>
      <h4>Veg briyani , Gobi briyani , Dosa </h4>
      <h4>4.8</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot is a new API in React 18

root.render(<AppLayout />); // render is a new API in React 18
