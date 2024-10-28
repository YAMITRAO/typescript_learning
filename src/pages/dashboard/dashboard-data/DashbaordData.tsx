import { useContext, useEffect, useState } from "react";
import style from "./dashboard-data.module.css";
import DashboardCard from "./dashboard_card/DashboardCard";
import axiosInstance from "../../../api/axiosInstance";
import { mappedValue } from "../../add-expense/add-expense-form/AddExpenseForm";

const DashboardData = () => {
  // let userData:object[] = [];
  const [userApiData, setUserApiData] = useState<mappedValue[]>([]);

  useEffect(() => {
    axiosInstance("/")
      .then((res) => {
        console.log("res data", res.data);
        setUserApiData(res.data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <div className={style.dashboard_data_container}>
      {userApiData.map((val, index) => {
        console.log("val of map is:-", val.transactions);
        let amount = val.transactions.reduce((total, el) => {
          return total + el.amount;
        }, 0);
        console.log(amount);
        return (
          <DashboardCard
            key={index * Math.random() * 10}
            amount={Number(amount.toFixed(2))}
            userName={val.name}
            css={{ boxShadow: `0px 0px 10px #ff9f1c` }}
            id={val._id}
          />
        );
      })}
      {/* <DashboardCard amount={300} userName={"test user"} css={ {boxShadow:`0px 0px 10px #ff9f1c`}} /> */}
    </div>
  );
};

export default DashboardData;
