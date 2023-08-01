import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getData } from "../api";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productLists, setProductLists] = useState([]);
  const [search, setSearch] = useState("");

  const initialState = {
    products: [],
    cart: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payLoad };
      case "ADD_TO_CART":
        const item = action.payLoad;
        const isExisted = state.cart.find((c) => c.id === item.id);
        if (isExisted) {
          return {
            ...state,
            cart: state.cart.map((c) =>
              c.id === item.id ? { ...item } : { ...c }
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...item , qty : 1}],
          };
        }     
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payLoad.id),
        };
      case "CART_EMPTY":
      return {
        ...state,
        cart: (state.cart = []),
      };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    const data = await getData("/products");
    setProductLists(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payLoad: productLists });
    const filterProductLists = productLists.filter((pd) =>
      pd.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payLoad: filterProductLists });
  }, [productLists, search]);

  const data = { state, search, setSearch, dispatch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
