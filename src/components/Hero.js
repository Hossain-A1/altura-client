import { Link, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import Button, { buttonVariance } from "./ui/Button";

import { useState } from "react";

const Hero = ({ product }) => {
  const [activeItem, setActiveItem] = useState(product.images[0]);
  const navigate = useNavigate();
  return (
    <section className='max-md:mt-10 min-h-screen h-full '>
      <div className='grid grid-cols-1 items-center lg:grid-cols-2 h-full w-full '>
        <div className='w-full h-full flex justify-center items-center '>
          <div className='flex flex-col justify-center gap-5 h-full w-full '>
            <h2 className='lg:text-7xl text-2xl font-bold uppercase w-40'>
              Altura Your <b className='text-gradient'>Perfect Pair</b> Today!
            </h2>
            <p className='w-3/4'>
              Altura shoes boast a fresh and distinctive style, setting them
              apart as uniquely crafted footwear.
            </p>

            <div className='bg-dark/5 py-7 xl:mt-5 px-3 lg:gap-10 gap-5 flex justify-between items-center'>
              <Link
                to='/men'
                className={cn(
                  buttonVariance({ variant: "ocen", size: "full" }),
                  "whitespace-nowrap"
                )}
              >
                Buy Now
              </Link>
              <Button
                variant='red'
                size='full'
                onClick={() => navigate("/women")}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center  flex-col h-full w-full '>
          <div className=' bg-dim_dark space-y-5 pb-5 h-full w-full'>
            <div className='relative overflow-hidden h-full  lg:h-[28rem] xl:h-[35rem] w-full'>
              <h2 className='absolute w-10 lg:text-8xl text-4xl text-dark/50 font-semibold z-[10]'>
                {product.title}
              </h2>

              <div className='w-full    h-full overflow-hidden'>
                <img
                  src={activeItem}
                  alt={product.title}
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
            <div className='flex items-center gap-5 justify-center '>
              {product.images.map((image, i) => (
                <div key={i} className='md:p-5 bg-blue rounded-xl'>
                  <figure className='md:w-20 md:h-20 '>
                    <img
                      onClick={() => setActiveItem(image)}
                      src={image}
                      height={400}
                      width={400}
                      alt={product.title}
                      className='h-full  w-full object-fill cursor-pointer rounded-xl'
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
