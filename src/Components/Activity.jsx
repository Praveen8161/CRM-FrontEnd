/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { API } from "../helpers/API";

/* eslint-disable react/prop-types */
const Activity = ({ role }) => {
  const [acti, setActi] = useState([]);

  const URL = `${API}/${role}/check`;
  useEffect(() => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionToken: localStorage.getItem("CRMSes") }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          setActi([...val.user.activity]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col flex-wrap items-center justify-start w-full h-full gap-3 py-5 sm:gap-6">
      {acti.length < 1 ? (
        <div className="px-2 py-1 rounded-md bg-slate-100">
          No Activity found
        </div>
      ) : (
        acti.map((val, idx) => (
          <div key={idx} className="px-2 py-1 rounded-md bg-slate-100">
            {
              new Date(Number(val))
                .toISOString()
                .replace("T", " ")
                .split(".")[0]
            }
          </div>
        ))
      )}
    </div>
  );
};

export default Activity;
