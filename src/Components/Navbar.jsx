import React from "react";
import { FaShopify, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = useStateContext();
  return (
    <nav className=" flex items-center justify-between bg-gray-50 shadow-md px-5 py-2 my-5 rounded">
      <Link to="/">
        <div className=" flex items-center gap-2 cursor-pointer">
          <FaShopify className=" text-4xl text-primary" />
          <h1 className=" uppercase text-xl tracking-wider font-semibold text-black">
            mms-shop
          </h1>
        </div>
      </Link>
      <div className=" flex items-center gap-3">
        <Link to={'/cart'}>
          <div className=" flex items-center gap-2 bg-black px-4 py-2 rounded text-white">
            <FaShoppingCart />
            <small>{cart.length}</small>
          </div>
        </Link>
        <div className="flex items-center gap-2 border-2 rounded px-3 py-2">
          <FaSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
