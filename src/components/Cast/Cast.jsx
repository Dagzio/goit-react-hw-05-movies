import { useEffect, useState } from 'react';
import { fetchCastOrReviews } from 'Api';
import { useParams } from 'react-router-dom';
import { CastImage, CastListItem, CastText } from './Cast.styled';
import { SlPeople } from 'react-icons/sl';
import { VscStarFull } from 'react-icons/vsc';

const Cast = () => {
  const { movieId } = useParams();
  const [dataCast, setDataCast] = useState([]);

  useEffect(() => {
    fetchCastOrReviews(movieId, 'credits').then(response =>
      setDataCast(response.data.cast)
    );
  }, [movieId]);

  return (
    <section>
      <ul>
        {dataCast &&
          dataCast.map(cast => {
            return (
              <CastListItem key={cast.id}>
                {cast.profile_path && (
                  <>
                    <CastImage
                      src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                      width="140"
                      heigth="240"
                      alt="{cast.name}"
                    />
                    <CastText>
                      <VscStarFull />
                      {cast.name}
                      <VscStarFull />
                    </CastText>

                    <CastText>
                      <SlPeople /> Character: {cast.character}
                    </CastText>
                  </>
                )}
              </CastListItem>
            );
          })}
      </ul>
    </section>
  );
};

export default Cast;
