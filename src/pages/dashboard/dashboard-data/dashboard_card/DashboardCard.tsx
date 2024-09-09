import style from "./dashboard-card.module.css";
import user_avatar from "../../../../assets/images/avatar/profile.png"
import { Link } from "react-router-dom";
interface MyComponentPrope{
   children?: React.ReactNode
  css?:React.CSSProperties,
  userName:string,
  amount:number,
}

const DashboardCard:React.FC<MyComponentPrope> = ({userName, amount, css}) => {
  return (
    <Link to={`${userName}`}>
    <div className={style.dashboard_card_container} style={css}>
      <img width="80px" height="80px" src={user_avatar}  alt="user_profile" />

      <div className={style.dashboard_user_name}>
        {userName}
      </div>
      <div className={style.dashbaord_user_amount}>
        <span>Amount:- </span>
        <span>{amount}</span>
      </div>
    </div>
    </Link>
  )
}

export default DashboardCard