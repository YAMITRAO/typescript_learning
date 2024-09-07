import React, { useState } from 'react'
import style from "./payee.module.css"
import DataDisplayCard from '../../data-display-card/DataDisplayCard'

const Payee:React.FC = () => {

  const [payee, setPayee]  = useState("")
  return (
    <div className={style.payee_container}>
      <div className={style.payee_heading}>
        Payees: <DataDisplayCard css={{backgroundColor:"#6c584c"}}>Hello</DataDisplayCard>
      </div>

      <div className={style.payees_div}>
        <div>Hello</div>
      </div>

    </div>
  )
}

export default Payee