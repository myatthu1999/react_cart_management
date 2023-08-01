import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { getData } from "../api";
import Spinner from "../Components/Spinner/Spinner";
import { useStateContext } from "../context/StateContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [products, setProducts] = useState([]);
  const { dispatch } = useStateContext();

  const getProductDetail = async () => {
    setSingleProduct(await getData(`/products/${id}`));
  };

  const getProductsByCat = async () => {
    const data = await getData(`/products/category/${singleProduct.category}`);
    const filterData = data?.filter((item) => item.id !== singleProduct.id);
    setProducts(filterData);
  };

  useEffect(() => {
    getProductDetail();
    getProductsByCat();
  }, [products,singleProduct]);

  return (
    <>
      {singleProduct && products.length > 0 ? (
        <div>
          <div className=" flex items-center gap-10 my-10">
            <img src={singleProduct?.image} className=" h-96" alt="" />
            <div className=" flex flex-col gap-5 ">
              <p className="shadow-lg rounded-full w-40 text-center bg-primary text-white">
                {singleProduct?.category}
              </p>
              <h3 className=" text-2xl font-semibold text-black">
                {singleProduct?.title}
              </h3>
              <div>
                <p className=" text-black text-lg mb-2">Description</p>
                <p className=" text-secondary tracking-wider leading-6 ">
                  {singleProduct?.description}
                </p>
              </div>
              <p className=" flex items-center gap-2">
                <AiFillStar className=" text-danger text-xl" />{" "}
                <small className=" text-secondary font-bold">
                  ({singleProduct?.rating?.rate})
                </small>
              </p>
              <p className=" text-black font-semibold text-xl">
                ${singleProduct?.price}
              </p>
              <div>
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payLoad: singleProduct })
                  }
                  className=" bg-primary text-white py-2 w-40 rounded shadow-lg transform transition hover:scale-90"
                >
                  Add to cart
                </button>
                <Link to="/success">
                  <button className="border border-black ml-3 text-black py-2 w-40 rounded shadow-lg transform transition hover:scale-90">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" my-20">
            <h1 className=" text-2xl font-bold">You may also like</h1>
            <div className=" flex flex-wrap gap-7 my-10">
              {products?.map((item) => (
                <div key={item.id}>
                  <img
                    src={item?.image}
                    className=" h-52 border-2 p-5 shadow-lg rounded"
                    alt=""
                  />
                  <p className=" text-secondary font-semibold mt-1">
                    {item?.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProductDetails;
