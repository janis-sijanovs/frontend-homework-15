import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacter, characterType } from '../../data/characterData';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<characterType>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined && getCharacter(+id)) {
      const character = getCharacter(+id);
      setCurrentCharacter(character);
    } else {
      navigate('/characters');
    }
  }, []);

  return (
    <div>
      <div className="list__container">
        <div className="list__attributes">
          <h1 className="heading">
            {currentCharacter?.id}
            .&nbsp;
            {currentCharacter?.name}
          </h1>
          <p className="list__option">
            Status: &nbsp;
            {currentCharacter?.status}
          </p>
          <p className="list__option">
            Species: &nbsp;
            {currentCharacter?.species}
          </p>
          <p className="list__option">
            Type: &nbsp;
            {currentCharacter?.type ? currentCharacter?.type : 'Unknown'}
          </p>
          <p className="list__option">
            Gender: &nbsp;
            {currentCharacter?.gender}
          </p>
          <p className="list__option">
            Origin: &nbsp;
            {currentCharacter?.origin.name}
          </p>
          <p className="list__option">
            Location: &nbsp;
            {currentCharacter?.location.name}
          </p>
        </div>
        <img className="list__image" src={currentCharacter?.image} alt="" />
      </div>
    </div>
  );
};

export default CharacterPage;
