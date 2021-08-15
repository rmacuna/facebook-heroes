import { ChangeEvent, useState, memo } from "react";

import FCInput from "../../common/input/FCInput";

export default memo(function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <form role="form" className="pb-6">
        <div className="w-full pb-3">
          <FCInput
            type="email"
            placeholder="Email address"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <FCInput
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
});
