import { createContext, useContext, useReducer } from "react";
import { initialObj, TodoReducer } from "./shopReducer";

const TodoContext = createContext(initialObj);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialObj);
  console.log(state);

  const AddToList = (val) => {
    dispatch({
      type: "add",
      payLoad: {
        inputVal: val,
      },
    });
  };

  const DeleteFromList = (id) => {
    dispatch({
      type: "del",
      payLoad: {
        item: id,
      },
    });
  };
  const doneit = (id) => {
    dispatch({
      type: "done",
      payLoad: {
        item: id,
      },
    });
  };

  let value = {
    total: state.products.length,
    done: state.products.filter((el) => el.isDone === true).length,
    products: state.products,
    DeleteFromList,
    AddToList,
    doneit,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useTodo;
