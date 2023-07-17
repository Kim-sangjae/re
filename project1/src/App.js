import { useRef } from "react";
import LoginForm from "./LoginForm2";

const App = () => {
  let form = useRef(null);
  LoginForm.method();

  return <LoginForm ref={form}/>
}

export default App;
