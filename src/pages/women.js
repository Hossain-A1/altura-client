import { Link } from "react-router-dom";
import Women from "../components/Women";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loding";
import useFetch from "../hooks/useFetch";
import { cn } from "../lib/utils";
import { buttonVariance } from "../components/ui/Button";

const WomenPage = ({native}) => {
  const { data: shoes, isLoading, error } = useFetch('/api/products');
  return (
    <div className="space-y-5 ">
      {error && <Error error={error} />}

      {isLoading && <Loading isLoading={isLoading} />}

      {shoes && (
        <div className=' grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-5 '>
          {!native && shoes
            ? shoes
            .filter((item) => item.category === "women").slice(0, 3)
                .map((shoe) => <Women key={shoe._id} shoe={shoe} native />)
            : shoes &&
              shoes
                .filter((item) => item.category === "women")
                .sort((a, b) => a.price - b.price)
                .map((shoe) => <Women key={shoe._id} shoe={shoe} />)}
        </div>
      )}
       <div className=" flex justify-center items-center">
          {
            !native &&(
              <Link to='/women' className={cn(buttonVariance({variant:"gradient"}))}>See more</Link>
            )
          }
        </div>
    </div>
  );
};

export default WomenPage;
