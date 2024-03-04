import { useCartContext } from "../hooks/useCartContext";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { CurrencyFormatter } from "./ui/CurrencyFormatter";
const Cart = ({ cart }) => {
  const { dispatch } = useCartContext();

  return (
    <div className=''>
      <div className='flex lg:justify-between items-center border-t py-2'>
        <div className='lg:flex max-lg:flex-col gap-3 items-center'>
          <figure className='h-20 w-20 overflow-hidden'>
            <img
              src={cart.images[0]}
              alt={cart.title}
              className='h-full w-full object-fill'
            />
          </figure>

          <div>
            <i>{cart.title}</i>
            <div className='flex gap-5'>
              <div className='color-shoe'>
                <select name='color' id='color'>
                <option >color</option>
                  {cart.colors.map((color, index) => (
                    <option
                      key={index}
                      value={color}
                      style={{ backgroundColor: color }}
                    ></option>
                  ))}
                </select>
              </div>
              <div className='size-shoe'>
                <select name='size' id='size'>
                  <option >size</option>
                  {cart.size.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <u className='text-xs'>Add to Favourite</u>
          </div>
        </div>
        <div className='quantity flex flex-col justify-end items-end gap-1'>
          <button
            onClick={() => dispatch({ type: "REMOVE_CART", payload: cart })}
          >
            <IoMdRemoveCircleOutline className='text-xl text-red' />
          </button>
          <div className='flex   border-2 border-blue items-center justify-center'>
            <button
              className='px-2 bg-blue hover:bg-gradient eq text-light'
              onClick={() =>
                dispatch({ type: "DECREMENT_CART", payload: cart._id })
              }
            >
              -
            </button>
            <strong className='px-2 text-black'>{cart.count}</strong>
            <button
              className='px-2 bg-blue hover:bg-gradient eq text-light'
              onClick={() =>
                dispatch({ type: "INCREMENT_CART", payload: cart._id })
              }
            >
              +
            </button>
          </div>
          <h2>
            <CurrencyFormatter amount={cart.price * cart.count} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
