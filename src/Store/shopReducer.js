export const initialObj = {
  total: 0,
  done: 0,
  products: [
    {
      id: 1,
      todo: "i want to do !",
      isDone: false,
    },
  ],
};

export const TodoReducer = (state, action) => {
  let { type, payLoad } = action;

  if (type === "add") {
    return {
      ...state,
      products: [
        ...state.products,
        {
          id: Math.floor(Math.random() * 1000),
          todo: payLoad.inputVal,
          isDone: false,
        },
      ],
    };
  }

  if (type === "del") {
    return {
      ...state,
      products: state.products.filter((el) => el.id !== payLoad.item),
    };
  }

  if (type === "done") {
    return {
      ...state,
      products: state.products.filter((el) => {
        if (el.id === payLoad.item) {
          el.isDone = !el.isDone;
        }
        return el;
      }),
    };
  }
};
