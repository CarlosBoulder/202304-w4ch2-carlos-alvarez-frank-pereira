import { CharacterStructure } from "../types";

interface CharacterProps {
  character: CharacterStructure;
}

const CharacterCard = ({
  character: { name, picture, height, mass, creationDate },
}: CharacterProps): JSX.Element => {
  return (
    <section>
      <div>
        <h2>Character</h2>
        <div className="character__avatar-container">
          <img className="character__avatar" src={`${picture}`} alt="" />
        </div>
        <div className="character__data-container">
          <h2 className="character__name">Name: {name}</h2>
          <ul className="character__data-list">
            <li className="character__data">
              <span className="character__data-label">Height: {height}</span>
            </li>
            <li className="character__data">
              <span className="character__data-label">Mass: {mass}</span>
            </li>
            <li className="character__data">
              <span className="character__data-label">
                Creation date: {creationDate}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CharacterCard;
