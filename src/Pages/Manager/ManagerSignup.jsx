import { useNavigate } from "react-router-dom";
import Signup from "../../Components/Signup";
import { API } from "../../helpers/API";
import { useState } from "react";

const ManagerSignup = () => {
  const URLSignup = `${API}/manager/signup`;
  const name = "Manager";
  const [mes, setMes] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/manager");
  }

  function handleSignup(userData) {
    fetch(URLSignup, {
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
        } else {
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

  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <Signup
        name={name}
        handleNavigate={handleNavigate}
        handleSignup={handleSignup}
        setMes={setMes}
        setErr={setErr}
        err={err}
        mes={mes}
      />
    </div>
  );
};

export default ManagerSignup;
