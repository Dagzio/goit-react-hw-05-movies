import { fetchCastOrReviews } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchCastOrReviews(movieId, 'reviews').then(response =>
      setReviews(response.data.results)
    );
  }, [movieId]);
  console.log(reviews);

  return (
    <section>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <b>Author: {review.author}</b>
                <p>{review.content}</p>
              </li>
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
