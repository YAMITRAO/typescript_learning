import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddExpense from "./pages/add-expense/AddExpense";
import Dashboard from "./pages/dashboard/Dashboard";
import Admin from "./pages/admin/admin";

import "./App.css";
import UserView from "./pages/user-view/userView";

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
      path: "/dashboard/:id",
      element: <UserView />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
