import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import React, {useEffect} from "react";
import LoginForm from "../components/LoginForm.jsx";



const LoginPage = () => {
  useEffect(() => {
    document.title = 'Login to NonsafeSystem';
  }, []);


  return (
    <div className="bg-black min-h-screen flex flex-col">
      <LoginForm/>
      <Footer />
    </div>
  );
}

export default LoginPage;
