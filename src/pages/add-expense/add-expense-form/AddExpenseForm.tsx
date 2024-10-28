import { useEffect, useState } from "react";
import style from "./add-expense-form.module.css";
import Payee from "./payee/Payee";
import Payer from "./payer/Payer";
import Purpose from "./purpose/Purpose";
import SpentAmount from "./spent_amount/SpentAmount";
import axiosInstance from "../../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export interface mappedValue {
  _id: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  transactions: [
    {
      amount: number;
    }
  ];
}

const AddExpenseForm = () => {
  const [spentAmount, setSpentAmount] = useState("");
  const [payer, setPayer] = useState("");
  const [payee, setPayee] = useState<string[]>([]);
  const [purpose, setPurpose] = useState("");

  let navigate = useNavigate();

  const [userApiData, setUserApiData] = useState<mappedValue[]>([]);

  // const navigate = useNavigate();

  // console.log(purpose);

  // const postData = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Data is :- ", spentAmount, payer, payee, purpose);

  //   interface ExpenseData_int {
  //     date: Date;
  //     amount: number;
  //     purpose: string;
  //     payerName: string;
  //     isPayer: boolean;
  //   }
  //   interface ExpenseDataPayer_int extends ExpenseData_int {
  //     payees: string[];
  //   }
  //   interface ExpenseDataPayee_int extends ExpenseData_int {
  //     payeeName: string;
  //   }

  //   let payer_Data: ExpenseDataPayer_int = {
  //     date: new Date(),
  //     amount: Number(spentAmount),
  //     payerName: payer,
  //     payees: payee,
  //     isPayer: true,
  //     purpose: purpose,
  //   };

  //   let amount = Number(spentAmount) / (payee.length as number);

  //   let payeePostArr_promise = payee.map((val) => {
  //     let payee_data: ExpenseDataPayee_int = {
  //       date: new Date(),
  //       payeeName: val,
  //       payerName: payer,
  //       isPayer: false,
  //       amount: -amount,
  //       purpose: purpose,
  //     };
  //     return axiosInstance.post(`${val}`, { ...payee_data });
  //   });
  //   let payerPost_promise = axiosInstance.post(`${payer}`, {
  //     ...payer_Data,
  //   });

  //   try {
  //     let response = await Promise.all([
  //       ...payeePostArr_promise,
  //       payerPost_promise,
  //     ]);
  //     console.log(response);
  //     setPayee([]);
  //     setPayer("");
  //     setPurpose("");
  //     setSpentAmount("");
  //     navigate("/dashboard");
  //   } catch (e) {
  //     console.log("Error is:-", e);
  //   }
  // };

  const testData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Triggered.....");
    interface postData {
      date: Date;
      payer_name: string;
      payee_names: string[];
      amount: string;
      purpose: string;
    }

    let dataToPost: postData = {
      date: new Date(),
      payer_name: payer,
      payee_names: payee,
      amount: spentAmount,
      purpose: purpose,
    };
    if (!payer) {
      alert("Please enter the payer name");
      return;
    }
    await axiosInstance.put("/", {
      id: "671a1f7f1c636f0e82e43404",
      name: "test",
      email: "test@gmail.com",
      data: { ...dataToPost },
    });
    navigate("/dashboard");
  };

  useEffect(() => {
    axiosInstance("/")
      .then((res) => {
        console.log("res data", res.data);
        setUserApiData(res.data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <div className={style.add_expense_form_container}>
      <div className={style.add_expense_form_heading}>Expense Form</div>
      <form
        className={style.add_expense_form}
        onSubmit={(e) => {
          // postData(e);
          testData(e);
        }}
      >
        <SpentAmount
          spentAmount={spentAmount}
          setSpentAmount={setSpentAmount}
        />
        <Payer payer={payer} setPayer={setPayer} users={userApiData} />
        <Payee payee={payee} setPayee={setPayee} users={userApiData} />
        <Purpose purpose={purpose} setPurpose={setPurpose} />
        <button className={style.expense_submit_button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
