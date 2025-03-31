import { Button, Input } from "antd";
import React, { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enterPassword, setEnterPassword] = useState("");

  const handleClickBtn = () => {
    console.log("Check <<<", { fullName, email, password, enterPassword });
  };

  return (
    <div className="user-from" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div>
          <span>Full name</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password </span>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Re-enter the password</span>
          <Input.Password
            value={enterPassword}
            onChange={(event) => {
              setEnterPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <Button onClick={handleClickBtn} type="primary">
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
