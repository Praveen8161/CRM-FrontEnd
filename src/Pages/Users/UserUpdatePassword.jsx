import { useState } from "react";
import UpdatePassword from "../../Components/UpdatePassword";
import { API } from "../../helpers/API";
import { useParams } from "react-router-dom";

const UserUpdatePassword = () => {
  const { id, token } = useParams();

  const URL = `${API}/user/update/${id}/${token}`;

  const [err, setErr] = useState("");
  const [mes, setMes] = useState("");

  function handleUpdate(userData) {
    if (!userData.newPassword) {
      setErr("Fields are required");
      return;
    }

    if (userData.newPassword !== userData.confirmNewPassword) {
      setErr("Password doesn't match");
      return;
    }

    fetch(URL, {
      method: "PATCH",
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
        setErr("Error updating password");
      });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <UpdatePassword
        mes={mes}
        err={err}
        setErr={setErr}
        setMes={setMes}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default UserUpdatePassword;
