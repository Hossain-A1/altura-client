import Hero from "../components/Hero";
import Story from "../components/Story";
import Testimonial from "../components/Testimonial";
import UserReview from "../components/UserReview";
import useFetch from "../hooks/useFetch";
import KidsPage from "./kids";
import MenPage from "./men";
import WomenPage from "./women";

const HomePage = () => {
  // Fetch products data
  const { data: products } = useFetch("/api/products");

  // Render Hero component with the first product
  const renderHero = () => {
    if (!products || products.length === 0) return null;
    const product = products[0];
    return <Hero key={product._id} product={product} />;
  };

  return (
    <main className='space-y-20'>
      {renderHero()}
      <MenPage />
      <WomenPage />
      <KidsPage />
      <Testimonial />
      <UserReview />
      <Story />
    </main>
  );
};

export default HomePage;
