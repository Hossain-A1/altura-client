import Testimonial from "./Testimonial";
import UserReviw from "./UserReview";

const Story = ({ native }) => {
  return (
    <div className='w-full h-full'>
      <div>
        <figure className='h-40 w-full overflow-hidden  relative'>
          <img
            src='https://t3.ftcdn.net/jpg/00/65/13/34/360_F_65133460_Mu3zXEwCREmEh1BlMHZMYEBFGADX6KrJ.jpg'
            alt='about us'
            className='h-full w-full '
          />

          <h2 className='text-xl text-black font-semibold absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 '>
            About Us
          </h2>
        </figure>

        <div className='py-5'>
          <div className='flex flex-col gap-1 items-center'>
            <h2 className='text-2xl font-semibold'>Who are we?</h2>
            <small className='lg:w-3/5 w-full text-center'>
              {
                "Welcome to Altura, where shoe shopping meets satisfaction! Dive into a treasure trove of individual shoes, offering exceptional value without compromising on quality. With a diverse range spanning 12+ brands and all categories, find your perfect fit for less, every time."
              }
            </small>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <figure className='lg:w-[30rem] lg:h-[20rem] '>
              <img
                height={720}
                width={1280}
                className='h-full w-full object-cover'
                src='https://t4.ftcdn.net/jpg/04/97/16/83/240_F_497168354_cGMpRSRPJteybsbA5dNmesN70IoidVA3.jpg'
                alt='team'
              />
            </figure>
            <h2 className='font-medium lg:w-3/5 w-full text-center text-xl'>
              Our objective is to ensure that our service is accessible and
              affordable for all those who require it.
            </h2>
          </div>
        </div>
      </div>
      {native && (
        <div className="space-y-5">
          <Testimonial />
          <UserReviw />
        </div>
      )}
    </div>
  );
};

export default Story;
