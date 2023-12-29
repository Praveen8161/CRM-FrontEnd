import NavBar from "../../Components/NavBar";
import Service from "../../Components/Service";
import { API } from "../../helpers/API";

const AdminService = () => {
  const role = "admin";
  const URLSerDel = `${API}/${role}/service/deleteservice`;

  async function handleSerDel(id) {
    try {
      const data = await fetch(URLSerDel, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionToken: localStorage.getItem("CRMSes"),
          serviceId: id,
        }),
      });
      const val = await data.json();
      if (val.acknowledged) {
        alert(val.message);
        return val.acknowledged;
      } else {
        alert(val.error);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="flex flex-col w-full min-h-screen gap-8 pb-5 bg-sky-300">
        <>
          <Service role={role} handleSerDel={handleSerDel} />
        </>
      </div>
    </div>
  );
};

export default AdminService;
