import Hero from "../components/Hero"
import Main from "../components/Main.jsx";
import Writers from "../components/Writers.jsx";
import Footer from "../components/Footer.jsx";
import {useEffect} from "react";


const HomePage = () => {

  useEffect(() => {
    document.title = 'NonsafeSystem';
  }, []);

  return (
    <>
      <div className={"bg-black"}>
          <Hero/>
          <Main/>
          <Writers/>
          <Footer/>
      </div>
    </>
  );
}

export default HomePage