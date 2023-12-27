import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Pages/Users/UserLogin";
import ManagerLogin from "./Pages/Manager/ManagerLogin";
import AdminLogin from "./Pages/Admin/AdminLogin";
import UserSignup from "./Pages/Users/UserSignup";
import ManagerSignup from "./Pages/Manager/ManagerSignup";
import AdminSignup from "./Pages/Admin/AdminSignup";
import UserForgot from "./Pages/Users/UserForgot";
import ManagerForgot from "./Pages/Manager/ManagerForgot";
import AdminForgot from "./Pages/Admin/AdminForgot";
import UserUpdatePassword from "./Pages/Users/UserUpdatePassword";
import ManagerUpdatePassword from "./Pages/Manager/ManagerUpdatePassword";
import AdminUpdatePassword from "./Pages/Admin/AdminUpdatePassword";
import UserDashboard from "./Pages/Users/UserDashboard";
import UserProfile from "./Pages/Users/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route exact path="/signup" element={<UserSignup />} />
        <Route exact path="/forgot" element={<UserForgot />} />
        <Route
          exact
          path="/user/update/:id/:token"
          element={<UserUpdatePassword />}
        />
        <Route exact path="/user/dashboard" element={<UserDashboard />} />
        <Route exact path="/user/profile" element={<UserProfile />} />

        <Route exact path="/manager" element={<ManagerLogin />} />
        <Route exact path="/manager/signup" element={<ManagerSignup />} />
        <Route exact path="/manager/forgot" element={<ManagerForgot />} />
        <Route
          exact
          path="/manager/update/:id/:token"
          element={<ManagerUpdatePassword />}
        />

        <Route exact path="/admin" element={<AdminLogin />} />
        <Route exact path="/admin/signup" element={<AdminSignup />} />
        <Route exact path="/admin/forgot" element={<AdminForgot />} />
        <Route
          exact
          path="/admin/update/:id/:token"
          element={<AdminUpdatePassword />}
        />
      </Routes>
    </>
  );
}

export default App;
