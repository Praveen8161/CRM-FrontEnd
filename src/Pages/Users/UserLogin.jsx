import { useNavigate } from "react-router-dom";
import Login from "../../Components/Login";

const UserLogin = () => {
  const name = "User";
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/signup");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <Login name={name} handleNavigate={handleNavigate} />
    </div>
  );
};

export default UserLogin;
