import { useNavigate } from "react-router-dom";
import ForgotPassword from "../../Components/ForgotPassword";
import { API } from "../../helpers/API";
import { useState } from "react";

const AdminForgot = () => {
  const URLForgot = `${API}/admin/forgot`;

  const [mes, setMes] = useState("");
  const [err, setErr] = useState("");

  const name = "Admin";
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/admin");
  }

  function handleForgot(emailId) {
    if (!emailId) {
      setMes("");
      setErr("Fields are required");
      return;
    }

    fetch(URLForgot, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailId }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          setMes(val.message);
        } else {
          setErr(val.error);
        }
      })
      .catch((err) => {
        console.log(err);
        setMes("");
        setErr("Error Sending Email");
      });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <ForgotPassword
        name={name}
        handleNavigate={handleNavigate}
        mes={mes}
        err={err}
        setErr={setErr}
        setMes={setMes}
        handleForgot={handleForgot}
      />
    </div>
  );
};

export default AdminForgot;
