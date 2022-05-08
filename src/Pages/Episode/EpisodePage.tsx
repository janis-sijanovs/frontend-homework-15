import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEpisode, episodeType } from '../../data/episodeData';

const EpisodePage = () => {
  const [currentEpisode, setCurrentEpisode] = useState<episodeType>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined && getEpisode(+id)) {
      const episode = getEpisode(+id);
      setCurrentEpisode(episode);
    } else {
      navigate('/episodes');
    }
  }, []);

  return (
    <div className="list__container">
      <div className="list__attributes">
        <h1 className="heading">
          {currentEpisode?.episode}
          : &nbsp;
          {currentEpisode?.name}
        </h1>
        <p className="list__option">
          Release Date:
          {' '}
          {currentEpisode?.airDate}
        </p>
      </div>
    </div>
  );
};

export default EpisodePage;
