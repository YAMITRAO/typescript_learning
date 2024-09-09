
import style from "./spent-amount.module.css"
import DataDisplayCard from "../../data-display-card/DataDisplayCard"

interface MyComponentProps{
  spentAmount:string,
  setSpentAmount: React.Dispatch<React.SetStateAction<string>>
}

const SpentAmount: React.FC<MyComponentProps> = ({spentAmount, setSpentAmount}) => {
 
  

  let suggestion_data:number[] = [10,15,20,25,30,35, 40] 
  return (
    <div className={style.expesne_amount_input_div}>
      <label className={style.spend_amount_label}>Spend Amount: 
        {spentAmount && <DataDisplayCard css={{backgroundColor: "#e85d04"}}>{spentAmount}</DataDisplayCard>}
        
        </label>
      <input type="text" placeholder="Enter spent amount" value={spentAmount} onChange={(e)=> setSpentAmount(e.target.value)}/>
  
      <div className={style.expense_amount_suggestions} >
        {suggestion_data.map((val, index)=>{
          return  <div key={index*Math.random()*20} className={style.expense_suggestion} onClick={ (e: React.MouseEvent<HTMLElement>)=> {
            // console.log("clicked")
            let value = e.target as HTMLElement;
            // console.log(value.innerText)
            setSpentAmount(value.innerText)
          }}>{val}</div>
        })} 
      </div>
  </div>
  )
}

export default SpentAmount