import { useState } from "react";
import "./assets/css/styles.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import TodoForm from "./components/TodoForm";
import AlertDialog from "./components/AlertDialog";

const App = () => {
  const [alert, setAlert] = useState({ message: "", code: 0 });
  const showAlert = (message: string, code: number) => {
    setAlert({ message, code });

    setTimeout(() => {
      setAlert({
        message: "",
        code: 0,
      });
    }, 3000);
  };
  return (
    <div className="container-fluid">
      <Nav />
      {alert.message != "" && (
        <AlertDialog message={alert.message} code={alert.code} />
      )}
      <div className="mt-0"></div>
      <Login showAlert={showAlert} />
      {/* <div className="mt-5"></div> */}
      <SignUp showAlert={showAlert} />
      {/* <TodoForm /> */}
    </div>
  );
};

export default App;
