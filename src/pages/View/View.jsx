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
  بحبك يا أحلام حب كبير، إنتِ معايا في كل لحظة وكل ثانية، وقلبي دايمًا سعيد بيكِ،
  ضحكتك بتنور حياتي، ومهما حصل مستحيل أنسى اللحظات الحلوة اللي عشناها سوا،
  كل حاجة معاكي بتبقى أجمل، وأنا حاسة إن حياتي اكتملت بيكِ،
  يا روحي إنتِ فرحتي وسعادتي.
  
بحبك يا أحلام، قلبي بيغني ليك في كل لحظة، وكل ثانية بحس بالسعادة لما تكوني جنبي.  
ضحكتك بتنور أيامي، ومهما حصل مش هقدر أنسى اللحظات الحلوة اللي عشناها سوا.  
كل حاجة معاك بتبقى أجمل، وأنا حاسة إن حياتي اكتملت معاك، يا روحي، إنت فرحتي وسعادتي.
بحببببببك اويييييي
</p>
        <h2>تعالي نشوف الذكريات</h2>
        <button onClick={() => navigate("/Rhla")}>
          ❤️ ابدأ الرحلة
        </button>
      </div>


    </div>
  );
}
