import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='max-w-[1240px] md:ml-52 py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <a className="flex title-font font-medium text-white md:mb-0" href="/">
          <span className="text-3xl">NonsafeSystem</span>
        </a>
        <p className='py-4'>
          Need to report a vulnerability or exploit in the government or private sector? Want to learn how to develop securely?
          We can fix that!
        </p>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        </div>
        <div>
          <Link to=''>
            <h6 className='font-medium text-gray-400'>Contact</h6>
            <ul>
              <li>nonsafesystem@protonmail.com</li>
            </ul>
          </Link>
        </div>
        <div>
          <Link to=''>
            <h6 className='font-medium text-gray-400'>Where we from?</h6>
          </Link>
        </div>
        <div>
          <ul>
            <Link to=''>
              <li className='py-2 text-sm'>Terms</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;