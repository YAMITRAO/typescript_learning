import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const Admin: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Api data is;-", userName, userEmail);
    axiosInstance
      .post("/", {
        name: userName,
        email: userEmail,
      })
      .then((res) => {
        console.log("Response is :-", res);
      })
      .catch((e) => console.log("Error", e));
  }
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label>Username:</label>
        <br />
        <input
          type="text"
          placeholder="enter name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <br /> <br />
        <label>Email:</label> <br />
        <input
          type="email"
          value={userEmail}
          placeholder="enter email"
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />{" "}
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Admin;
