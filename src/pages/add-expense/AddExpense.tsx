import NavBar from "../../components/nav-bar/NavBar"
import AddExpenseForm from "./add-expense-form/AddExpenseForm"
import style from "./add-expense.module.css"

const AddExpense:React.FC = () => {
  return (
    <>
    <NavBar/>
    <div className={style.form_comp_container}><AddExpenseForm /></div>
    </>
  )
}

export default AddExpense