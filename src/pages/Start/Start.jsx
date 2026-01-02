import { useNavigate } from "react-router-dom";
import "./Start.css";
import { useState, useRef } from "react";
import kitty from "../img/hello-kitty-png-icon-16787.png";
import Lottie from "lottie-react";
import animationData from "../img/Kiss.json";
import animationData2 from "../img/Peekaboo cat.json";
import animationData3 from "../img/Lips_1.json";


export default function Create() {
  const navigate = useNavigate();
  const [password, setPass] = useState("");
  const input = useRef(null);

  const handleClick = () => {
    if (password === "احبك") {
      navigate("View");
    } else {
      input.current.classList.add("wrong");
      setTimeout(() => {
        input.current.classList.remove("wrong");
      }, 500);
    }
  };

  return (
    <div className="body">
      <div className="start" data-aos="zoom-in">
        <img src={kitty} alt="kitty" className="kitty" width={100} />


        <h3>Enter Password</h3>
        <p>اكتبي الباسورد يا حياتي</p>

        <input
          ref={input}
          className="text"
          placeholder="اكتبي يا روحي"
          onChange={(e) => setPass(e.target.value)}
        />

        <button onClick={handleClick}>
          يلااا دوسيييييي
        </button>

        <Lottie
          className="loveu"
          animationData={animationData2}
          loop={true}
          style={{ width: 200 }}
        />

        <Lottie
          className="pos"
          animationData={animationData}
          loop={true}
          style={{ width: 40 }}
        />
        <Lottie
          className="pos1"
          animationData={animationData3}
          loop={true}
          style={{ width: 120 }}
        />
      </div>
    </div>
  );
}
