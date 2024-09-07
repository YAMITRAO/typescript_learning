// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/nav-bar/NavBar'
import AddExpense from './pages/add-expense/AddExpense'


function App() {
   const router = createBrowserRouter([
    {
      path: "/",
      element: <AddExpense/>
    },
    {
      path:"/dashboard",
      element: <NavBar/>
    },
    {
      path:"/navbar",
      element: <NavBar/>
    }
   ])

  return (
    <>
     <RouterProvider router={router}>
     </RouterProvider>
     
    </>
  )
}

export default App
