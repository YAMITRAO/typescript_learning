import style from "./purpose.module.css"

interface MyComponentProps{
  purpose: string,
  setPurpose: React.Dispatch<React.SetStateAction<string>>
}
const Purpose:React.FC< MyComponentProps> = ({purpose, setPurpose}) => {
  
  return (
    <div className={style.puspose_container}>
      <div className={style.purpose_heading}>Purpose</div>
      <div className={style.purpose_input_div}>
        <input type="text"
        value={purpose}
        onChange={ (e)=> {
          // console.log(e.target.value)
          
          setPurpose(e.target.value)}}
        required placeholder="Spend purpose"/>
      </div>
    </div>
  )
}

export default Purpose