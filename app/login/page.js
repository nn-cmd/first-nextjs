"use client";

import { useFormState } from "react-dom";
import { login } from "./action";

export default function Page() {
  const initState = {
    message: "",
  };
  const [state, formAction] = useFormState(login, initState);
  return (
    <form action={formAction}>
      <div>
        <h1>Email</h1>
        <input type="text" name="email" />
      </div>

      <div>
        <h1>Password</h1>
        <input type="password" name="password" />
      </div>
      <div>Message: {state.message}</div>
      <button>Login</button>
    </form>
  );
}
