import { Link, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import Button, { buttonVariance } from "./ui/Button";


import { useState } from "react";

const Hero = ({ product }) => {
  const [activeItem, setActiveItem] = useState(product.images[0]);
const navigate = useNavigate()
  return (
    <section className='sp-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <div className="">
        <h2 className="text-6xl font-bold uppercase w-20">
          Altura Your <b className="text-gradient">Perfect Pair</b> Today!
        </h2>
        <p className="w-3/4">Altura shoes boast a fresh and distinctive style, setting them apart as uniquely crafted footwear.</p>

        <div className="bg-dark/5 py-7 px-3 gap-10 flex justify-between items-center">
          <Link to='/men' className={cn(buttonVariance({variant:"ocen",size:"full"}))}>Buy Now</Link>
          <Button  variant='red' size='full' onClick={()=>navigate('/women')}>Explore</Button>
        </div>
        </div>
        <div>
          <div className=' bg-dim_dark space-y-5 pb-5'>
            <div className='relative '>
              <h2 className='absolute w-10 text-8xl text-dark/50 font-semibold z-[10]'>
                {product.title}
              </h2>

              <div className='w-full h-[20rem]'>
                <img
                  src={activeItem}
                  alt={product.title}
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
            <div className='flex items-center gap-5 justify-center '>
              {product.images.map((image, i) => (
                <div key={i} className="p-5 bg-blue rounded-xl">
                  <figure  className='w-20 h-20 '>
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
