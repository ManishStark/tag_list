import "./assets/css/styles.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="mt-0"></div>
      <Login />
      {/* <div className="mt-5"></div> */}
      {/* <SignUp /> */}
      {/* <TodoForm /> */}
    </div>
  );
};

export default App;
