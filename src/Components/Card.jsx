import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const Card = ({ product }) => {
  const {dispatch} = useStateContext()
  return (
    <div className=" w-80 p-5 border-2 rounded-lg transform transition hover:scale-105 hover:shadow-xl">
      <img src={product?.image} className=" h-[200px] mx-auto my-3" alt="" />
      <h3 className=" text-black tracking-wider font-bold">
        {product?.title?.substr(0, 25)}...
      </h3>
      <div className=" flex items-center gap-1 my-3">
        <AiFillStar className=" text-danger" />
        <small className="text-primary font-semibold">
          ({product?.rating?.rate})
        </small>
      </div>
      <p className=" text-black font-bold text-xl mb-3">${product?.price}</p>
      <div>
        <button onClick={() => dispatch({type : "ADD_TO_CART",payLoad : product})} className=" bg-primary text-white px-5 py-2 shadow-lg rounded transform transition hover:scale-90">
          Add To Cart
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className=" border border-black ml-2 px-5 py-2 shadow-lg rounded transform transition hover:scale-90">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
