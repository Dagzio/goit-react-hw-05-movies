import { useEffect, useState } from 'react';
import { fetchCastOrReviews } from 'Api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [dataCast, setDataCast] = useState([]);

  useEffect(() => {
    fetchCastOrReviews(movieId, 'credits').then(response =>
      setDataCast(response.data.cast)
    );
  }, [movieId]);
  console.log(dataCast);

  return (
    <section>
      <ul>
        {dataCast &&
          dataCast.map(cast => {
            return (
              <li key={cast.id}>
                {cast.profile_path && (
                  <>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                      width="140"
                      heigth="240"
                      alt="{cast.name}"
                    />
                    <p>{cast.name}</p>
                    <p>Character: {cast.character}</p>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Cast;
