import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Review = ({ review }) => {
  const makeReviews = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {review?.rating >= index + 1 ? (
          <FaStar />
        ) : review?.rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className='flex justify-start items-center'>
      <h2 className='flex justify-start items-center text-sm text-orange'>
        {makeReviews}
      </h2>
    </div>
  );
};

export default Review;