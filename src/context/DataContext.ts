import { createContext } from "react";

export interface InitialState_Context {
  totalPayer: {}[];
}

const state: InitialState_Context = {
  totalPayer: [],
};

const dispatch: Function = () => {};

const DataContext = createContext({ state, dispatch });

export default DataContext;
