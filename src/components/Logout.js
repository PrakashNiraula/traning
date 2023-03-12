import { useNavigate } from "react-router-dom";
import LogoutPNG from "../assets/logout.png";

const Logout = () => {
  const navigate = useNavigate();
  const LogoutToApp = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="absolute flex flex-col items-center w-10 h-10 right-16 bottom-16 ">
      <img
        src={LogoutPNG}
        alt="Logout"
        onClick={LogoutToApp}
        className="w-full h-full object-contain hover:scale-125 duration-150 ease-in cursor-pointer"
      />
      <span className="font-semibold">Logout</span>
    </div>
  );
};

export default Logout;
