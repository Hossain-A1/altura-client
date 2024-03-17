import { Link, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import Button, { buttonVariance } from "./ui/Button";

const Testimonial = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className='bg-orange/20 grid lg:grid-cols-2 grid-cols-1 gap-5 p-5'>
        <div className='space-y-3'>
          <h2 className=' text-2xl font-bold '>
            Over <b className='text-red'>90,000</b> people love to buy shoes
            using <b className='text-gradient'>Altura</b>
          </h2>
          <p className='w-3/4'>
            Altura shoes boast a fresh and distinctive style, setting them apart
            as uniquely crafted footwear.
          </p>

          <div className='bg-dark/5 py-7 px-3 lg:gap-10 max-md:flex-col gap-5 flex justify-between items-center'>
            <Link
              to='/register'
              className={cn(
                buttonVariance({ variant: "ocen", size: "full" }),
                "whitespace-nowrap"
              )}
            >
              Get stared now
            </Link>
            <Button variant='outline' size='full' onClick={() => navigate("/")}>
              Browse products
            </Button>
          </div>
        </div>
        <div className='bg-orange rounded-tl-full '>
          <figure className='lg:h-[20rem] lg:w-[21rem] h-full w-full overflow-hidden '>
            <img
              src='https://t4.ftcdn.net/jpg/00/70/50/85/240_F_70508564_w7BP2n5DhXasajnF3ZfmIf5URhG7IWl5.jpg'
              height='720'
              width='1280'
              alt='testimolial'
              className='h-full w-full rounded-tl-full'
            />
          </figure>
        </div>
      </div>

      <div className='px-10 pt-10  flex flex-col items-center justify-center gap-5'>
        <div className='flex justify-center items-center'>
          <h3 className='lg:w-4/5'>
            {`" Wow! Just got my hands (and feet) on a pair of Altura shoes and I
            couldn't be more thrilled! From the moment I slipped them on, I
            could feel the quality and comfort. Plus, the style is on point!
            Can't wait to hit the trails and put these babies to the test!
            Thanks, Altura, for creating such amazing footwear!"`}
          </h3>
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <figure className='h-20 w-20 overflow-hidden'>
            <img
              src='https://randomuser.me/api/portraits/men/13.jpg'
              height='200'
              width='200'
              alt='manager logo'
              className='h-full w-full object-cover rounded-full'
            />
          </figure>
          <b className='text-xl'>jio tump</b>
          <h3>Advokate at city high coode</h3>
        </div>
        <div className='grid lg:grid-cols-4 items-center  gap-5 grid-cols-2 pt-10'>
          <div className='flex flex-col items-center gap-[0.20rem]'>
            <h2 className='text-4xl font-extrabold'>90k+</h2>
            <p>Customer</p>
          </div>
          <div className='flex flex-col items-center gap-[0.20rem]'>
            <h2 className='text-4xl font-extrabold'>113K+</h2>
            <p>Till Sold</p>
          </div>
          <div className='flex flex-col items-center gap-[0.20rem]'>
            <h2 className='text-4xl font-extrabold'>3X</h2>
            <p>Increase Productivity</p>
          </div>
          <div className='flex flex-col items-center gap-[0.20rem]'>
            <h2 className='text-4xl font-extrabold'>56+</h2>
            <p>brand</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
