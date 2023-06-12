import "./assets/css/styles.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="mt-5"></div>
      {/* <Login /> */}
      {/* <div className="mt-5"></div> */}
      <SignUp />
    </div>
  );
};

export default App;
