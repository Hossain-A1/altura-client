import { SlideData } from "../data/SlideData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Autoplay, Pagination } from "swiper/modules";

SwiperCore.use([Pagination]);

const UserReviw = () => {
  return (
    <main>
      <section className='space-y-5'>
        <h2 className='text-xl text-center font-semibold'>Our user reviews.</h2>
        <div className='flex-1 flex items-center  justify-center flex-wrap gap-10 bg-gradient-to-bl from-gradient to-blue/70 py-10 px-5'>
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            slidePrevClass='max-lg:1'
            spaceBetween={30}
            loop={true}
            speed={700}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
          >
            {SlideData.map((data) => (
              <SwiperSlide
                key={data.date}
                className='py-10 px-5 space-y-5 rounded-2xl shadow-xl bg-light'
              >
                <div className='h-[14rem] w-full'>
                  <div className='lg:h-[11rem] h-[12rem] w-full space-y-2 '>
                    <div className='flex gap-3 text-2xl'>
                      <strong className='text-orange'>{data.icon}</strong>
                      <strong className='text-orange'>{data.icon}</strong>
                      <strong className='text-orange'>{data.icon}</strong>
                      <strong className='text-orange'>{data.icon}</strong>
                      <strong className='text-orange'>{data.icon}</strong>
                    </div>
                    <div className='space-y-2'>
                      <h3 className='font-bold'>{data.title}</h3>
                      <h4>{data.comment}</h4>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <div className='overflow-hidden lg:h-16 lg:w-16 h-12 w-12  rounded-full '>
                      <img
                        src={data.photo}
                        alt={data.name}
                        height='200'
                        width='200'
                        className='h-full w-full object-cover'
                        priority
                      />
                    </div>
                    <div className='flex flex-col justify-center'>
                      <strong>{data.name}</strong>
                      <small>{data.date}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default UserReviw;
