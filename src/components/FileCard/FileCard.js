import './FileCard.css'

export const FileCard = ({ file }) => (
  <>
    <img className="card__image" src="images/file.svg"/>
    <p>{`${file.name.length > 10 ? file.name.slice(0, 10)+'...' : file.name}`}</p>
  </>
);
