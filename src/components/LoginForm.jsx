import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth/AuthProvider";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const sendLogin = async (newJob) => {
    try {
      const response = await fetch(`https://nonsafeapi-production.up.railway.app/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const data = await sendLogin(loginData);
      if(data && data.token){
        login(data.token)
        navigate('/');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className="bg-black text-white flex min-h-[75vh] flex-col items-center pt-16 sm:justify-center sm:pt-0">
        <span className="title-font font-medium text-white text-5xl mb-2">NonsafeSystem</span>
        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="mx-5 border dark:border-b-green-500 dark:border-t-white/50 border-b-purple-500 sm:border-t-purple-500 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-purple-500 rounded-lg border-purple-500 border-l-purple-500 border-r-purple-500 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex justify-center items-center flex-col p-6">
              <h3 className="text-xl flex items-center justify-center font-semibold leading-6 tracking-tighter">Login</h3>
              <p className="mt-1.5 text-xl font-medium text-green-500">
                You are the resistence.
              </p>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={submitForm}>
                <div>
                  <div>
                    <div
                      className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <input type='text'
                             id='user_email_login_form'
                             name='user_email_login_form'
                             placeholder="Email"
                             min={4}
                             max={60}
                             required
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             autoComplete="off"
                             className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"/>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div
                      className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label
                          className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                      </div>
                      <div className="flex items-center">
                        <input type="password"
                               id='password_login_form'
                               name="password_login_form"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               required
                               className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a className="text-sm font-medium text-foreground" href="/forgot-password">Forgot
                    password?</a>
                </div>
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <a
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-green-500 h-10 px-4 py-2 duration-200"
                    href="/register">Register</a>
                  <button
                    className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-purple-500 transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                    type="submit">Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm;
