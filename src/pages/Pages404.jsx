import Img from "../assets/3997553.jpg";
import { useNavigate } from "react-router-dom";

export default function Pages404() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img className="w-[750px] h-auto" src={Img} />
      <button
        className="btn btn-ghost btn-wide relative bottom-[8.5em] hover:bg-transparent cursor-pointer"
        onClick={goHome}
      ></button>
    </div>
  );
}
