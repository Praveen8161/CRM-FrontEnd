import { useNavigate } from "react-router-dom";
import ForgotPassword from "../../Components/ForgotPassword";

const AdminForgot = () => {
  const name = "Admin";
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/admin");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <ForgotPassword name={name} handleNavigate={handleNavigate} />
    </div>
  );
};

export default AdminForgot;
