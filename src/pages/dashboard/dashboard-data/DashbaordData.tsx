import { useContext, useEffect, useState } from "react"
import style from "./dashboard-data.module.css"
import DashboardCard from "./dashboard_card/DashboardCard"
import DataContext from "../../../context/DataContext"
import axiosInstance from "../../../api/axiosInstance"

const DashboardData = () => {
  // let userData:object[] = [];
  const [userData, setUserData] = useState([])
  let state = useContext(DataContext);

  console.log(userData);

  const allUserData_API = async() => {

    let getApi_promises =  state.totalPayer.map((val)=> {
      return axiosInstance.get(`${val}`)
  })
  try{
    let promises_response = await Promise.all(getApi_promises);
    // setUserData(promises_response)
    console.log("Get response data is :- ",promises_response);
    
  }catch(e){
    console.log("Error", e)
  }
   }

  useEffect(()=> {
   allUserData_API();
  }, [])


  return (
    <div className={style.dashboard_data_container}>
      {userData.map((val, index)=> <DashboardCard key={index*Math.random()*10} amount={300} userName={"test user"} css={ {boxShadow:`0px 0px 10px #ff9f1c`}} />)}
      {/* <DashboardCard amount={300} userName={"test user"} css={ {boxShadow:`0px 0px 10px #ff9f1c`}} /> */}
    </div>
  )
}

export default DashboardData