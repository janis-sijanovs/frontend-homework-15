import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacters, characterType } from '../../data/characterData';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<characterType[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const characters = getCharacters();
    if (characters !== undefined) {
      setVisibleCharacters(characters);
    }
  }, []);

  return (
    <div>
      <h1 className="heading">
        Charatchers:
      </h1>
      <div className="content">
        {visibleCharacters && visibleCharacters.map(({ id, name, image }) => (
          <div key={id} className="preview">
            <span>
              <img src={image} alt="" className="preview__img" />
            </span>
            <span>
              {id}
              .
            </span>
            <span>
              {name}
            </span>
            <button onClick={() => navigate(`/characters/${id}`)} className="button button--arrow">--&gt;</button>
          </div>
        ))}
      </div>
      <div />
    </div>
  );
};

export default CharactersPage;
