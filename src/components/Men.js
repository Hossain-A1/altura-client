import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { buttonVariance } from "./ui/Button";
import { CurrencyFormatter } from "./ui/CurrencyFormatter";

const Men = ({ shoe }) => {
  console.log(shoe);
  return (
    <div>
      <div className='shadow-md rounded-xl overflow-hidden'>
        <figure className='lg:h-[16rem]  w-full h-full overflow-hidden relative'>
          <img
            src={shoe.images[0]}
            alt='men-shoe'
            property=''
            className='h-full w-full object-fill '
          />
          <strong className='absolute top-1 left-2 text-xl'>
            {shoe.title}
          </strong>
        </figure>
        <div className='flex items-center justify-between gap-5 pl-2'>
          <span>
            <CurrencyFormatter amount={shoe.price} />
          </span>
          <Link
            to={`/men/${shoe._id}`}
            className={cn(buttonVariance({ variant: "red" }))}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Men;
