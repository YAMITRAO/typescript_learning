import style from "./payee.module.css";
import DataDisplayCard from "../../data-display-card/DataDisplayCard";
import { mappedValue } from "../AddExpenseForm";

interface MyComponentProps {
  users: mappedValue[];
  payee: string[];
  setPayee: React.Dispatch<React.SetStateAction<string[]>>;
}

const Payee: React.FC<MyComponentProps> = ({ payee, setPayee, users }) => {
  let payee_data = users;
  return (
    <div className={style.payee_container}>
      <div className={style.payee_heading}>
        Payees:
        {/* <DataDisplayCard css={{backgroundColor:"#6c584c"}}>{payee.join(",")}</DataDisplayCard> */}
        {payee.map((val, index) => (
          <DataDisplayCard
            key={index * Math.random() * 20}
            css={{ backgroundColor: `#6c584c` }}
          >
            {val}
          </DataDisplayCard>
        ))}
      </div>

      <div className={style.payees_div}>
        {payee_data.map((val) => {
          return (
            <div
              id="payee_user"
              key={val._id}
              className={style.payee_user}
              onClick={(e) => {
                let user = (e.target as HTMLElement).innerText;
                let test = e.target as HTMLElement;
                console.log("target", test.classList);
                setPayee((prev_payee) => {
                  let isPayeeExist = false;
                  prev_payee.map((val) => {
                    if (val === user) isPayeeExist = true;
                  });
                  if (isPayeeExist) {
                    test.classList.remove("activeSelect");
                    let newArr = [...prev_payee];
                    let updateArr = newArr.filter((val) => val !== user);
                    return [...updateArr];
                  }
                  test.classList.add("activeSelect");
                  return [...prev_payee, user];
                });
                // setPayee()
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

export default Payee;
