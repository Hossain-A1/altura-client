import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import { buttonVariance } from "../ui/Button";
import { CurrencyFormatter } from "../ui/CurrencyFormatter";
import { cn } from "../../lib/utils";
import Review from "../ui/Review";

const ProductDetails = ({ shoe }) => {
  const [activeItem, setActiveItem] = useState(shoe.images[0]);
  const [selectedSize, setSelectedSize] = useState(shoe.size[0]); // Initialize selectedSize with the first size
  const { dispatch } = useCartContext();

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='w-full h-3/4 space-y-5  '>
          <figure className='  w-full h-full overflow-hidden'>
            <img
              src={activeItem}
              alt={shoe.title}
              height={720}
              width={1280}
              className='h-full w-full object-fill overflow-hidden '
            />
          </figure>

          <div className='flex items-center gap-5 justify-center'>
            {shoe.images.map((image, i) => (
              <figure key={i} className='w-12 h-12 '>
                <img
                  onClick={() => setActiveItem(image)}
                  src={image}
                  height={400}
                  width={400}
                  alt={shoe.title}
                  className='h-full  w-full object-fill cursor-pointer'
                />
              </figure>
            ))}
          </div>
        </div>

        <div className='bg-light shadow-sm p-5 w-full h-full'>
          <div className='flex flex-col gap-1'>
            <strong className='flex items-center  gap-1'>
              <Review review={shoe} />
              <b className='text-lg'>({shoe.rating})</b>
            </strong>
            <strong className='text-black text-2xl'>{shoe.title}</strong>

            <div className='flex gap-5 items-center'>
              <div className='flex flex-col gap-1'>
                <del>
                  <CurrencyFormatter amount={(shoe.price * 4) / 2} />
                </del>

                <strong className='text-black/70 text-xl'>
                  <CurrencyFormatter amount={shoe.price} />
                </strong>
              </div>
              <h2 className='text-red bg-light/30 p-1 text-xl font-semibold  border-red border'>
                50% OFF
              </h2>
            </div>
            <hr className='w-full ' />

            <div className='space-y-1 py-5'>
              <b className='text-dark'>SIZE</b>
              <div className='flex whitespace-nowrap items-center gap-1'>
                {shoe.size.map((size, i) => (
                  <strong
                    key={i}
                    onClick={() => handleSizeClick(size)}
                    className={`size-style ${selectedSize === size ? 'hover:bg-blue text-white' : ''}`}
                  >
                    {size}
                  </strong>
                ))}
              </div>
            </div>
            <hr className='w-full ' />

            <div className='space-y-1 py-5'>
              <b className='text-dark'>COLORS</b>
              <div className=' flex whitespace-nowrap items-center gap-5 '>
                {shoe.colors.map((color, index) => (
                  <strong
                    key={index}
                    onClick={() => setActiveItem(shoe.images[index])}
                    style={{ backgroundColor: color }}
                    className='w-8 h-8 rounded-full cursor-pointer  '
                  ></strong>
                ))}
              </div>
            </div>

            <hr className='w-full ' />

            <div className='space-y-1'>
              <div className='flex gap-5 '>
                <b className='text-dark'>CATEGORY:</b>
                <b className=''>{shoe.category}</b>
              </div>
              <div className='flex gap-5 '>
                <b className='text-dark'>BRAND:</b>
                <b className=''>{shoe.brand}</b>
              </div>
              <div className='flex gap-5 '>
                <b className='text-dark'>IN STORE:</b>
                <b className=''>Pair ({shoe.store})</b>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <Link
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: shoe })}
              to='/cart'
              className={cn(
                buttonVariance({ variant: "gradient", size: "full" })
              )}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <div className='py-5'>
        <span>Shoe Description:</span>
        <p>{shoe.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
