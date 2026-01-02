import { useNavigate } from "react-router-dom";
import "./Rhla.css";

// استيراد الصور
import img1 from "./Screenshot_20260102_133349_Gallery.jpg";
import img2 from "./Screenshot_20260102_133902_WhatsApp.jpg";
import img3 from "./Screenshot_20260102_133722_Gallery.jpg"
import img4 from "./Screenshot_20260102_133740_Gallery.jpg"
import img5 from "./Screenshot_20260102_133941_Gallery.jpg"
import img6 from "./Screenshot_20260102_133943_Gallery.jpg"
import animationData2 from "../img/Hearts feedback.json";  // اختر صورة مناسبة من عندك
import Lottie from "lottie-react";

export default function Rhla() {
  const navigate = useNavigate();

  const arr = [
    { text: "دي كانت بداية اعترفنا 👁️❤️", img: img1 },
    { text: "اللحظة اللي ضحكنا فيها سوا 😄", img: img2 },
    { text: "قضينا أجمل الأيام مع بعض 💕", img: img3 },
    { text: "ده كلامك الجميل💕", img: img4 },
    { text: "دي كل صورك (😭)💕", img: img5, imgg: img6 },
  ];

  return (
    <div className="body1">
      <div className="rhla" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        {arr.map((e, index) => (
          <div key={index} className="memory-item"  data-aos="fade-down-right">
            <h1>{e.text}</h1>
            <div className="images-wrapper" >
              {e.img && <img src={e.img} alt="memory" className="memory-img" />}
              {e.imgg && <img src={e.imgg} alt="memory second" className="memory-img" />}
            </div>
          </div>
        ))}


        <h2>تعالي يا احلامي </h2>
        <button onClick={() => navigate("/Rhlaa")}>
          ❤️ كملي
        </button>
<Lottie
  className="hearts-animation"
  animationData={animationData2}
  loop={true}
/>

      </div>

    </div>
  );
}
