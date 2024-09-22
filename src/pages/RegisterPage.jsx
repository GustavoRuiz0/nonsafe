import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import React, {useEffect} from "react";
import RegisterForm from "../components/RegisterForm.jsx";


const RegisterPage = () => {
  useEffect(() => {
    document.title = 'Join Us!';
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <RegisterForm/>
      <Footer />
    </div>
  );
}

export default RegisterPage;
