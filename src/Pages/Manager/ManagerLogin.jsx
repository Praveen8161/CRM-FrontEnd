import { useNavigate } from "react-router-dom";
import Login from "../../Components/Login";
import { API } from "../../helpers/API";
import { useState } from "react";

const ManagerLogin = () => {
  const URLLogin = `${API}/manager/login`;
  const URLResend = `${API}/manager/resendemail`;

  const name = "manager";
  const [mes, setMes] = useState("");
  const [err, setErr] = useState("");
  const [resend, setResend] = useState("");

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/manager/signup");
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
        if (val.acknowledged) {
          setErr("");
          setMes(val.message);
          localStorage.setItem("CRMSes", val.sessionToken);
          navigate("/manager/dashboard", { replace: true });
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
    <div className="flex items-center justify-center h-screen custom_bg">
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

export default ManagerLogin;
