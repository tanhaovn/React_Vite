import { Button, Input } from "antd";
import React, { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enterPassword, setEnterPassword] = useState("");

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
          <Input />
        </div>
        <div>
          <span>Password </span>
          <Input.Password />
        </div>
        <div>
          <span>Re-enter the password</span>
          <Input.Password />
        </div>
        <div>
          <Button type="primary">Create User</Button>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
