import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { buttonVariance } from "./ui/Button";

import hero from "../assets/images/hero.png";
import hero_1 from "../assets/images/hero-1.png";

const Hero = () => {
  return (
    <section className='w-full h-[100vh]'>
      <div className='relative h-full z-40 w-full'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 h-full w-full '>
          <div className='flex flex-col   items-start justify-center '>
            <div className='space-y-5'>
              <h1>
                "Elevate Your Footwear Game with Our Exclusive Shoe Collection!"
              </h1>

              <p>
                Unveiling a World of Comfort, Elegance, and Innovation in Every
                Pair Explore Our Diverse Shoe Collection Today!
              </p>

              <Link
                to='/men'
                className={cn(buttonVariance({ variant: "dark" }))}
              >
                Go to Shop
              </Link>
            </div>
          </div>
          <div className=' flex flex-col items-end justify-center  bg-gradient-to-b from-green-900/90 to-yellow-500/90 '>
            <figure className='h-40 w-40 relative'>
              <img
                className=' object-cover absolute left-0 top-0'
                src={hero}
                alt='show'
              />
            </figure>
          </div>
        </div>

        <div className='absolute top-5 md:top-10 max-md:top-2/4  max-md:right-5  left-1/2 lg:-translate-x-40 z-50'>
          <figure className=''>
            <img src={hero_1} alt='' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
