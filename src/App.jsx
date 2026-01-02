import './App.css';
import Start from "./pages/Start/Start";
import View from "./pages/View/View";
import Rhla from "./pages/Rhla/Rhla";
import Rhlaa from "./pages/Rhlaa/Rhlaa";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة
      once: true,     // تعمل الحركة مرة واحدة بس
    });
    AOS.refresh(); // تحديث AOS لو العناصر بتتغير
  }, []);

  // تعريف الـ router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Start />} />
        <Route path="/View" element={<View />} />
        <Route path="/Rhla" element={<Rhla />} />
        <Route path="/Rhlaa" element={<Rhlaa />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}
