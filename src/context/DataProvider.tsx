import { useReducer } from "react";
import DataContext, { InitialState_Context } from "./DataContext";

interface MyComponentProps {
  children: React.ReactNode;
}

interface Action {
  type: String;
  data: [] | {};
}

const DataProvider: React.FC<MyComponentProps> = ({ children }) => {
  // let initialValue: InitialState_Context = {
  //   totalPayer: [],
  // };

  let initialValue: InitialState_Context = {
    totalPayer: [],
  };

  function reducerFun(
    state: InitialState_Context,
    action: Action
  ): InitialState_Context {
    console.log("action is :=", action);
    switch (action.type) {
      case "UPDATE_TOTAL_PAYER":
        if (Array.isArray(action.data)) {
          return { ...state, totalPayer: action.data };
        }
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducerFun, initialValue);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
