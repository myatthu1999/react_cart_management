import Card from "../Components/Card";
import { useStateContext } from "../context/StateContext";
import Spinner from "../Components/Spinner/Spinner";
const Products = () => {
  const {
    state: { products, cart },
  } = useStateContext();
  return (
    <div className=" flex flex-wrap gap-8 justify-center my-10">
      {products.length > 0 ? (
        products?.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Products;
