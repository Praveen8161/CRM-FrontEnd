import { useNavigate } from "react-router-dom";
import Signup from "../../Components/Signup";

const ManagerSignup = () => {
  const name = "Manager";
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/manager");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <Signup name={name} handleNavigate={handleNavigate} />
    </div>
  );
};

export default ManagerSignup;
