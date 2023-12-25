import { useNavigate } from "react-router-dom";
import Signup from "../../Components/Signup";

const UserSignup = () => {
  const name = "User";
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <Signup name={name} handleNavigate={handleNavigate} />
    </div>
  );
};

export default UserSignup;
