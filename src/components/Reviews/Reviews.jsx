import { fetchCastOrReviews } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from './Reviews.styled';
import { AiOutlineComment } from 'react-icons/ai';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchCastOrReviews(movieId, 'reviews').then(response =>
      setReviews(response.data.results)
    );
  }, [movieId]);

  return (
    <section>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <ReviewsItem key={review.id}>
                <b>
                  Author: {review.author} <AiOutlineComment color="darkblue" />
                </b>
                <p>{review.content}</p>
              </ReviewsItem>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </section>
  );
};

export default Reviews;
