import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-dim_dark text-black ">
      <div className='bg-gradient/10 w-full py-3 hover:bg-blue/40 eq flex items-center justify-center text-inherit'>
        <button onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
      </div>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-5  text-inherit p-5'>
        <div className='flex flex-col items-center p-10'>
          <div>
            <span className='text-6xl text-gradient  font-semibold'>#</span>
            <h2>
            <b className='text-gradient'>Altura</b> <br />
              Providing reliable shoes since 2002
            </h2>
          </div>
        </div>

        <div className='flex max-lg:flex-col max-lg:justify-center justify-around gap-10 col-span-2'>
          <ul className='flex flex-col gap-3 items-center  '>
            <h2 className='text-md text-dark/60 font-semibold underline underline-offset-4 uppercase'>
              Quick Links
            </h2>
            <li className=''>
              <Link to='/' className='l text-sm'>
                Home
              </Link>
            </li>

            <li className=''>
              <Link to='/men' className=' text-sm'>
                Men
              </Link>
            </li>
            <li className=''>
              <Link to='/women' className=' text-sm'>
                Women
              </Link>
            </li>
            <li className=''>
              <Link to='/kids' className=' text-sm'>
                Kids
              </Link>
            </li>
          </ul>

          <ul className='flex flex-col gap-3 items-center  '>
            <h2 className='text-md text-dark/60 font-semibold underline underline-offset-4 uppercase'>
              company
            </h2>
            <li className=''>
              <Link to='/story' className=' text-sm'>
                Our Story
              </Link>
            </li>
            <li className=''>
              <Link to='/register' className=' text-sm'>
                Register
              </Link>
            </li>
            <li className=''>
              <Link to='/login' className=' text-sm'>
                Login
              </Link>
            </li>
            
            <li className=''>
              <Link to='/profile' className=' text-sm'>
                Profile
              </Link>
            </li>
          </ul>
          <div className='flex flex-col items-center gap-5'>
            <h2 className='text-md text-dark/60 font-semibold underline underline-offset-4 uppercase'>
  
              LEGAL
            </h2>
            <Link href='#' className='text-sm'>
              Terms of use
            </Link>
            <Link href='#' className='text-sm'>
              Privacy policy
            </Link>
            <Link href='#' className='text-sm'>
              Cookie policy
            </Link>
          </div>

          <div className='social flex flex-col items-center gap-5'>
            <h2 className='text-md text-dark/60 font-semibold underline underline-offset-4 uppercase'>
              Social
            </h2>

            <div className='flex gap-5 justify-center text-gradient'>
              {" "}
              <span>
                <FaFacebookF className='text-4xl ' />
              </span>
              <span>
                <FaYoutube className='text-4xl ' />
              </span>
              <span>
                <FaTwitter className='text-4xl' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
