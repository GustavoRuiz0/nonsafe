import {useEffect} from "react";
import LoginForm from "../components/LoginForm.jsx";

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Login to NonsafeSystem';
  }, []);

  return (
    <main className="flex flex-1 flex-col justify-center">
      <LoginForm/>
    </main>
  );
}

export default LoginPage;
