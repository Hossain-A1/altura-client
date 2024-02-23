import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/ui/Loding";
import Error from "../components/ui/Error";

import ProductDetails from "../components/productsUi/ProductDetails";

const WomenId = () => {
  const { id } = useParams();
  const { data: shoe, isLoading, error } = useFetch(`/api/products/${id}`);

  return (
    <div className='min-h-screen'>
      {error && <Error error={error} />}

      {isLoading && <Loading isLoading={isLoading} />}

      {shoe && <ProductDetails shoe={shoe} />}
    </div>
  );
};

export default WomenId;
