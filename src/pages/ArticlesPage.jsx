import {useEffect} from "react";
import Footer from "../components/Footer.jsx";


const ArticlesPage = () => {

  useEffect(() => {
    document.title = 'Articles';
  }, []);



  return (
    <>
      <div className="bg-black min-h-screen flex flex-col">
        <div className="bg-black text-white flex min-h-[75vh] flex-col items-center pt-16 sm:justify-center sm:pt-0">
          <span className="title-font font-medium text-white text-5xl mb-2">We are preparing the Articles.</span>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ArticlesPage;