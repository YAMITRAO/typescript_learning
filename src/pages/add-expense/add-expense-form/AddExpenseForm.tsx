
import style from "./add-expense-form.module.css"
import Payee from "./payee/Payee"
import Payer from "./payer/Payer"
import SpentAmount from "./spent_amount/SpentAmount"

const AddExpenseForm = () => {

  return (
    <div className={style.add_expense_form_container}>
      <div className={style.add_expense_form_heading}>
        Expense Form
      </div>
      <form className={style.add_expense_form}>
        <SpentAmount/>
        <Payer/>
        <Payee />
      </form>
    </div>
  )
}

export default AddExpenseForm