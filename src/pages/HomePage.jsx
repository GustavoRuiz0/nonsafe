import Hero from "../components/Hero"
import Main from "../components/Main.jsx";
import Writers from "../components/Writers.jsx";
import {useEffect} from "react";


const HomePage = () => {

  useEffect(() => {
    document.title = 'NonsafeSystem';
  }, []);

  return (
    <>
      <div className="bg-black flex-1">
          <Hero/>
          <Main/>
          <Writers/>
      </div>
    </>
  );
}

export default HomePage