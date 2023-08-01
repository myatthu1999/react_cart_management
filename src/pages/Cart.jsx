import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useStateContext } from "../context/StateContext";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const checkOutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/success");
  };

  const incPrice = (price) => {
    setTotal(total + price);
  };

  const decPrice = (price) => {
    setTotal(total - price);
  };

  useEffect(() => {
    setTotal(cart?.reduce((pv, cv) => pv + cv.price, 0));
  }, []);
  return (
    <>
      {cart.length > 0 ? (
        <div className=" grid grid-cols-4">
          <div className="col-span-3 flex flex-col gap-5">
            {cart?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                incPrice={incPrice}
                decPrice={decPrice}
              />
            ))}
          </div>
          <div className=" col-span-1 flex flex-col ">
            <div className=" p-10 border border-black rounded shadow-lg">
              <h1 className=" text-3xl font-semibold">
                Total Price - ${total.toFixed(2)}
              </h1>
              <button
                onClick={checkOutHandler}
                className=" px-5 py-2 border border-black rounded shadow-lg uppercase mt-5"
              >
                Checkout
              </button>
            </div>
            <button
              onClick={() => dispatch({ type: "CART_EMPTY" })}
              className=" px-5 py-2 border border-danger text-white bg-danger  rounded shadow-lg uppercase mt-5"
            >
              Cart Empty
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center">
          <div className=" bg-gray-50 p-20 rounded shadow-lg mt-20 border border-black animate__animated animate__fadeInDown">
            <h1 className="text-black text-4xl tracking-wide font-semibold my-5">
              Your Cart is Empty
            </h1>
            <button
              onClick={() => navigate("/")}
              className="transform transition hover:scale-105 px-5 py-2 uppercase shadow-lg border border-black rounded"
            >
              Go Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
