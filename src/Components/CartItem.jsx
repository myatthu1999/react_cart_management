import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const CartItem = ({ item, incPrice, decPrice }) => {
  const { dispatch } = useStateContext();
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((pre) => pre + 1);
    incPrice(item.price);
  };
  const decQty = () => {
    if (qty > 1) {
      setQty((pre) => pre - 1);
      decPrice(item.price);
    }
  };
  const removeItemFromCart = () => {
    decPrice(item?.price * qty)
    dispatch({ type: "REMOVE_FROM_CART", payLoad: item });

  }
  return (
    <div className="flex items-center gap-5">
      <img src={item?.image} className="h-32 border-2 p-4" alt="" />
      <div>
        <h3 className=" text-xl font-semibold">{item?.title}</h3>
        <p className="text-xl my-2">${item?.price * qty}</p>
        <div className=" flex gap-3 items-center ">
          <div className="flex justify-between items-center border border-primary rounded-lg w-20 px-2 py-1">
            <p className="text-lg cursor-pointer text-primary" onClick={decQty}>
              -
            </p>
            <p className="text-lg text-primary">{qty}</p>
            <p className="text-lg text-primary cursor-pointer" onClick={incQty}>
              +
            </p>
          </div>
          <button
            onClick={removeItemFromCart}
            className=" border border-danger bg-danger p-2 rounded-lg"
          >
            <AiFillDelete className=" text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
