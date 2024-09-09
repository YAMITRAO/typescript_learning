
import style from "./payer.module.css"
import DataDisplayCard from "../../data-display-card/DataDisplayCard"

interface MyComponentProps {
  payer:string
  setPayer: React.Dispatch<React.SetStateAction<string>>;
  users: string[],
}

const Payer:React.FC<MyComponentProps> = ({payer,setPayer, users}) => {
  let payerApiData:string[] = users;


  return (
    <div className={style.payer_container}>
       <div className={style.payer_heading}>
          Payer:
          {payer &&<DataDisplayCard css={{backgroundColor: "green"}}>{payer}</DataDisplayCard>}
        </div>
      <div className={style.payers_div}>

        {payerApiData.map((val, index)=> {
          return  <div key={index*Math.random()*20} className={style.payer_user_div}
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