import { useState } from "react"
import style from "./payer.module.css"
import DataDisplayCard from "../../data-display-card/DataDisplayCard"

const Payer:React.FC = () => {
  let payerApiData:string[] = ["User1", "User2", "User3", 'User4', "User5", ]

  const [payer, setPayer] = useState("")
  return (
    <div className={style.payer_container}>
       <div className={style.payer_heading}>
          Payer:
          {payer &&<DataDisplayCard css={{backgroundColor: "green"}}>{payer}</DataDisplayCard>}
        </div>
      <div className={style.payers_div}>

        {payerApiData.map((val)=> {
          return  <div className={style.payer_user_div}
          onClick={(e: React.MouseEvent<HTMLElement>)=> {
            let value = e.target as HTMLElement
            setPayer(value.innerText)
          }}>{val}</div>
        } )}
            {/* <div className={style.payer_user_div}
            onClick={(e: React.MouseEvent<HTMLElement>)=> {
              let value = e.target as HTMLElement
              setPayer(value.innerText)
            }}>USer1</div> */}
      </div>
    </div>
  )
}

export default Payer