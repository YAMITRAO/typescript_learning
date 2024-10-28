import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import NavBar from "../../components/nav-bar/NavBar";
import style from "./user-view.module.css";
import { mappedValue } from "../add-expense/add-expense-form/AddExpenseForm";
import moment from "moment";

interface myCompoProbs {}
interface userData {
  amount: number;
  createdAt: Date;
  payees: string[];
  payerName: string;
  purpose: string;
  updatedAt: Date;
  _id: string;
}

const UserView: React.FC<myCompoProbs> = () => {
  const location = useLocation();
  let userId = location.pathname.split("/")[2];

  const [userData, setUserData] = useState<userData[]>();

  useEffect(() => {
    axiosInstance
      .get(`/get-single-user?userid=${userId}`)
      .then((res) => {
        console.log("res data", res.data.data.transactions);
        setUserData(res.data.data.transactions);
      })
      .catch((err) => console.log("Error", err));
  }, []);
  return (
    <>
      <NavBar />
      <div className={style.user_history_container}>
        <table className={style.dataTable}>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Date</th>
              <th>Payer</th>
              <th>Amount</th>
              <th>Payee</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((val, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{moment(val.createdAt).format("ll")}</td>
                  <td>{val.payerName}</td>
                  <td
                    style={{
                      color: val.amount >= 0 ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {val.amount.toFixed(2)}
                  </td>
                  <td className={style.payeeTd}>
                    {val.payees.map((val) => (
                      <span>{val},</span>
                    ))}
                  </td>
                  <td>{val.purpose}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserView;
