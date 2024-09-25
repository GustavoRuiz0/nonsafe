import { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const sendRegister = async (newUser) => {
    const res = await fetch(`https://nonsafeapi-production.up.railway.app/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) {
      throw new Error('Login request failed');
    }

    return await res.json();
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    const registerData = {
      user: {
        username,
        email,
        password,
      },
      note,
    };

    try {
      const data = await sendRegister(registerData);
      setMessage(data.message || 'Registro efetuado, entraremos em contato pelo nonsafesystem@protonmail.com');
      setIsSubmitted(true);
    } catch (error) {
      setMessage('Ocorreu um erro durante o registro. Tente novamente.');
      setIsSubmitted(true);
    } finally {
      alert(message);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-black text-white flex min-h-[75vh] flex-col items-center pt-16">
        <h2 className="text-2xl">Registro recebido!</h2>
        <p className="mt-4 text-xl">
          Entraremos em contato pelo email <strong>nonsafesystem@protonmail.com</strong>
        </p>
      </div>
    );
  }

  return (
    <div id="registration-form" className="bg-black text-white flex flex-col items-center sm:justify-center sm:pt-0">
      <span className="title-font font-medium text-white text-5xl mb-2">NonsafeSystem</span>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="mx-5 border dark:border-b-green-500 dark:border-t-white/50 border-b-purple-500 sm:border-t-purple-500 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-purple-500 rounded-lg border-purple-500 border-l-purple-500 border-r-purple-500 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex justify-center items-center flex-col p-6">
            <h3 className="text-xl flex items-center justify-center font-semibold leading-6 tracking-tighter">
              Register
            </h3>
            <p className="mt-1.5 text-xl font-medium text-green-500">Join us to close the Universal Backdoor.</p>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={submitForm}>
              <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  minLength={4}
                  maxLength={60}
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full border-0 bg-transparent p-0 text-sm"
                />
              </div>

              <div className="mt-4 group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full border-0 bg-transparent p-0 text-sm"
                />
              </div>

              <div className="mt-4 group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full border-0 bg-transparent p-0 text-sm"
                />
              </div>

              <div className="mt-4 group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5">
                <input
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full border-0 bg-transparent p-0 text-sm"
                />
              </div>

              <div className="mt-4 group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5">
                <textarea
                  id="note"
                  placeholder="Why do you want to join NonsafeSystem?"
                  required
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows="4"
                  className="block w-full border-0 bg-transparent p-0 text-sm resize-none"
                />
              </div>

              <div className="mt-4 flex items-center justify-end gap-x-2">
                <button
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-purple-500 transition duration-300 inline-flex items-center justify-center rounded-md text-sm bg-white text-black h-10 px-4 py-2"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
