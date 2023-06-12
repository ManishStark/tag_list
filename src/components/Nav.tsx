import logo from "../assets/images/logo.svg";
const Nav = () => {
  return (
    <header className="container-fluid">
      <nav className="container d-flex flex-wrap p-3 justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={logo} alt="" height={"50px"} width={"50px"} />
          <h2 className="ms-3 fw-bold">Todo List</h2>
        </div>
        <div className="">
          <button className="btn btn-primary ">Login</button>
          <button className="btn btn-info text-white ms-3">SignUp</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
