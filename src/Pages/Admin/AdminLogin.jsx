import { useNavigate } from "react-router-dom";
import Login from "../../Components/Login";
import { API } from "../../helpers/API";
import { useState } from "react";

const AdminLogin = () => {
  const URLLogin = `${API}/admin/login`;
  const URLResend = `${API}/admin/resendemail`;

  const name = "admin";
  const [mes, setMes] = useState("");
  const [err, setErr] = useState("");
  const [resend, setResend] = useState("");

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/admin/signup");
  }

  function handleLogin(userData) {
    fetch(URLLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((val) => val.json())
      .then((val) => {
        console.log(val);
        if (val.acknowledged) {
          setErr("");
          setMes(val.message);
          navigate("/admin/dashboard", { replace: true });
        } else {
          if (val.active) {
            setResend(true);
          }
          setMes("");
          setErr(val.error);
        }
      })
      .catch((err) => {
        console.log(err);
        setMes("");
        setErr("Error Logging In");
      });
  }

  function handleResend(userData) {
    setMes("resending Verification email ...");
    fetch(URLResend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          setErr("");
          setMes(val.message);
        } else {
          setMes("");
          setErr(val.error);
        }
      })
      .catch((err) => {
        console.log(err);
        setMes("");
        setErr("Error Sending Mail");
      });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <Login
        name={name}
        handleNavigate={handleNavigate}
        handleLogin={handleLogin}
        handleResend={handleResend}
        setMes={setMes}
        setErr={setErr}
        mes={mes}
        setResend={setResend}
        resend={resend}
        err={err}
      />
    </div>
  );
};

export default AdminLogin;
