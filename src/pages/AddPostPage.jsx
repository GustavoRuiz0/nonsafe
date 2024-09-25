import Footer from "../components/Footer.jsx";
import {useEffect} from "react";


const AddPostPage = () => {
  useEffect(() => {
    document.title = 'New Post';
  }, []);


  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* <LoginForm/> */}
      <Footer />
    </div>
  );
}

export default AddPostPage;
