import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEpisodes, episodeType } from '../../data/episodeData';

const EpisodesPage = () => {
  const [visibleEpisodes, setVisibleEpisodes] = useState<episodeType[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const episodes = getEpisodes();
    if (episodes !== undefined) {
      setVisibleEpisodes(episodes);
    }
  }, []);

  return (
    <div>
      <h1 className="heading">
        Charatchers:
      </h1>
      <div className="content">
        {visibleEpisodes && visibleEpisodes.map(({ id, name }) => (
          <div key={id} className="preview">
            <span>
              {id}
              .
            </span>
            <span>
              {name}
            </span>
            <button onClick={() => navigate(`/episodes/${id}`)} className="button button--arrow">--&gt;</button>
          </div>
        ))}
      </div>
      <div />
    </div>
  );
};

export default EpisodesPage;
