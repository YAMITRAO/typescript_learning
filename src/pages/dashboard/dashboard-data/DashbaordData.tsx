import { useContext } from "react"
import style from "./dashboard-data.module.css"
import DashboardCard from "./dashboard_card/DashboardCard"
import DataContext from "../../../context/DataContext"

const DashboardData = () => {
  let state = useContext(DataContext);


  return (
    <div className={style.dashboard_data_container}>
      {state.totalPayer.map((val)=> <DashboardCard amount={300} userName={val} css={ {boxShadow:`0px 0px 10px #ff9f1c`}} />)}
      {/* <DashboardCard amount={300} userName={"test user"} css={ {boxShadow:`0px 0px 10px #ff9f1c`}} /> */}
    </div>
  )
}

export default DashboardData