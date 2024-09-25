import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='max-w-[1340px] mx-auto grid-cols-1 py-8 grid lg:grid-cols-3 text-gray-300 px-4 2xl:p-0'>
      <article>
        <Link className="flex title-font font-medium text-white md:mb-0" href="/">
          <h2 className="text-3xl">NonsafeSystem</h2>
        </Link>
        <p className='py-4'>
          Need to report a vulnerability or exploit in the government or private sector? Want to learn how to develop securely?
          We can fix that!
        </p>
      </article>
      <ul className='lg:col-span-2 flex gap-2 lg:gap-20 xl:gap-32 flex-col lg:flex-row lg:justify-end'>
        <Link to=''>
          <li>
            <h6 className='font-medium text-gray-400'>Contact</h6>
            <p>nonsafesystem@protonmail.com</p>
          </li>
        </Link>
        <Link to=''>
          <li>
            <h6 className='font-medium text-gray-400'>Where we from?</h6>
          </li>
        </Link>
        <Link to=''>
          <li>
            <h6 className='font-medium text-gray-400'>Terms</h6>
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;