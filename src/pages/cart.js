import { useState } from "react";
import Cart from "../components/Cart";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loding";
import { useCartContext } from "../hooks/useCartContext";
import { CurrencyFormatter } from "../components/ui/CurrencyFormatter";
import { TbTruckDelivery } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { cn } from "../lib/utils";
import Button, { buttonVariance } from "../components/ui/Button";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems ,dispatch} = useCartContext();
  const total = () => {
    const calcTotal = cartItems.reduce(
      (acc, item) => (acc += item.price * item.count),
      0
    );
    const fixedTotal = +calcTotal.toFixed(2);
    const subtotal = <CurrencyFormatter amount={fixedTotal} />;

    return subtotal;
  };

  return (
    <div className="space-y-10">
      {error && <Error error={error} />}

      {isLoading && <Loading isLoading={isLoading} />}

      {cartItems && (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
          <div className=''>
            {
             cartItems && cartItems.map((cart) => <Cart key={cart._id} cart={cart} />)}
          </div>

          <div className="">
            <div className='border p-5 '>
              <h2 className='font-medium text-sm '>Order Summary</h2>
              <div className=''>
                {cartItems.map((item) => (
                  <div key={item._id} className="space-y-5">
                    <div className='flex justify-between space-y-1'>
                      <h3 className='text-sm text-gray'>
                        {item.title.substring(0, 25)}..
                      </h3>
                      <h3 className='text-sm text-gray'>
                        {<CurrencyFormatter amount={item.price * item.count} />}
                      </h3>
                    </div>
                
                  </div>
                  
                ))}
                    <div className=' border-t space-y-3 py-3 '>
                <div className='flex justify-between'>
                  <h3 className='text-sm text-gray'>Delivery charge</h3>
                  <h3 className='text-sm text-gray'>
                 
                 <h3>Free</h3>
                  </h3>
                </div>

                <div className='flex flex-col gap-1'>
                  <div className='flex items-center gap-1'>
                    <span>
                      {" "}
                      <TbTruckDelivery className='text-sm text-gray ' />
                    </span>
                    <h2 className='text-sm text-dark '> Altura Express</h2>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='text-sm text-gray '>
                      {" "}
                      <CiLocationOn className='text-sm text-gray ' />
                    </span>
                    <h4 className='flex gap-1 text-sm text-gray'>
                      Deliver to <u className='text-dark'>Dammam Saudi Arab</u>
                    </h4>
                  </div>
                </div>
              </div>

              <div className='flex justify-between items-center  border-t'>
                <h2>Order Total</h2>
                <strong className='text-xl'>
                  = { total()} 
            
                </strong>
              </div>

              <div className='space-y-1'>
                <input
                  type='text'
                  className='py-2 px-2 bg-orange/30 text-center border border-gray rounded w-full'
                  placeholder='Add  coupon code here'
                  required
                />
                <button
                  className={cn(
                    buttonVariance({ variant: "ocen", size: "full" })
                  )}
                >
                  Checkout
                </button>
              </div>
              </div>

             
            </div>
          </div>
        </div>
      )}

      <div className="space-y-5">
        <div className='w-full bg-slate-200 '>
          <span className='uppercase text-center block'>
            Grand Total:{total()}
            <strong className='font-bold text-xl'>{""}</strong>{" "}
          </span>
          <p className='text-center '>
            The displayed product prices on our site already account for added
            taxes.
          </p>
        </div>

        <div className='flex justify-between '>
          <Button variant='red' onClick={()=>dispatch({type:"CLEAR_CART"})}>Clear All cart</Button>
          <Link
            to='/'
            className={cn(buttonVariance({ variant: "ocen" }))}
          >
            Back to Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
