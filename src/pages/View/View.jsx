import "./View.css";
import { useNavigate } from "react-router-dom";
import kittyImg from "../img/hello-kitty-png-icon-16777.png";  // اختر صورة مناسبة من عندك
import kittyImg2 from "../img/hello-kitty-png-icon-16790.png";  // اختر صورة مناسبة من عندك
import animationData2 from "../img/love.json";  // اختر صورة مناسبة من عندك
import Lottie from "lottie-react";

export default function View() {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="romantice" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
      <Lottie
        className="loveu"
        animationData={animationData2}
        loop={false}
        style={{ width: 160 , position: "absolute" , left : 0}}
      />
        <img src={kittyImg} alt="kitty" className="kitty-img" />
        <img src={kittyImg2} alt="kitty" className="kitty-img2" />
        <h1>نور عيني</h1>
        <p>
          احبك يا احلام حب كبيره، انت معايا في كل لحظة، كل ثانية بيكون قلبي سعيد بيك،
          ضحكتك بتنور حياتي، ومهما حصل مش ممكن انسى اللحظات الحلوة اللي عشناها مع بعض،
          كل حاجة معاك بتبقى أجمل وانا حاسة ان حياتي اكتملت معاك، يا روحي انت فرحتي وسعادتي.
        </p>
        <h2>تعالي نشوف الذكريات</h2>
        <button onClick={() => navigate("/Rhla")}>
          ❤️ ابدأ الرحلة
        </button>
      </div>


    </div>
  );
}
