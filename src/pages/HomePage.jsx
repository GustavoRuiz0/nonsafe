import Hero from "../components/Hero"
import Main from "../components/Main.jsx";
import Writers from "../components/Writers.jsx";
import Footer from "../components/Footer.jsx";
const HomePage = () => {
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