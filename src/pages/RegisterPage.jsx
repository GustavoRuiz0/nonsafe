import {useEffect} from "react";
import RegisterForm from "../components/RegisterForm.jsx";

const RegisterPage = () => {
  useEffect(() => {
    document.title = 'Join Us!';
  }, []);

  return (
    <main className="flex flex-1 flex-col justify-center">
      <RegisterForm/>
    </main>
  );
}

export default RegisterPage;
