// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import AddExpense from "./pages/add-expense/AddExpense";
import Dashboard from "./pages/dashboard/Dashboard";
// import { useContext } from 'react'
// import DataContext from './context/DataContext'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AddExpense />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/navbar",
      element: <NavBar />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
