import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import UserReviw from "../components/UserReview";
import useFetch from "../hooks/useFetch";
import KidsPage from "./kids";
import MenPage from "./men";
import WomenPage from "./women";

const HomePage = () => {
  const { data: producs } = useFetch("/api/products");

  return (
    <main className='space-y-20'>
      {producs &&
        producs
          .slice(0, 1)
          .map((product) => <Hero key={product._id} product={product} />)}
      <MenPage />
      <WomenPage />
      <KidsPage />
      <Testimonial />
      <UserReviw/>
    </main>
  );
};

export default HomePage;
