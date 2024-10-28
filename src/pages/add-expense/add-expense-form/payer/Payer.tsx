import style from "./payer.module.css";
import DataDisplayCard from "../../data-display-card/DataDisplayCard";
import { mappedValue } from "../AddExpenseForm";

interface MyComponentProps {
  payer: string;
  setPayer: React.Dispatch<React.SetStateAction<string>>;
  users: mappedValue[];
}

const Payer: React.FC<MyComponentProps> = ({ payer, setPayer, users }) => {
  return (
    <div className={style.payer_container}>
      <div className={style.payer_heading}>
        Payer:
        {payer && (
          <DataDisplayCard css={{ backgroundColor: "green" }}>
            {payer}
          </DataDisplayCard>
        )}
      </div>
      <div className={style.payers_div}>
        {users.map((val) => {
          return (
            <div
              key={val._id}
              className={style.payer_user_div}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                let value = e.target as HTMLElement;
                setPayer(value.innerText);
              }}
            >
              {val.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Payer;
