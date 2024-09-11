import { createContext } from "react";

export interface DataContext_Int {
  totalPayer: string[];
}

let initialState: DataContext_Int = {
  totalPayer: [],
};

const DataContext = createContext(initialState);

export default DataContext;
