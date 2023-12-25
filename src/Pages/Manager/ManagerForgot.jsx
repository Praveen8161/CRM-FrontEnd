import { useNavigate } from "react-router-dom";
import ForgotPassword from "../../Components/ForgotPassword";

const ManagerForgot = () => {
  const name = "Manager";
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/manager");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <ForgotPassword name={name} handleNavigate={handleNavigate} />
    </div>
  );
};

export default ManagerForgot;
