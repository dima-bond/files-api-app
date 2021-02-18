import { useState } from 'react';
import { FileCard } from '../FileCard/FileCard';
import classNames from 'classnames';
import './FilesList.css';

export const FilesList = ({ files }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleHover = (fileId) => {
    setSelectedCard(fileId)
  };

  const handleMouseLeave = () => {
    setSelectedCard(null);
  };

  return (
    <ul className="files-container">
      {files.map(f => (
        <li key={f.file} className="card" onMouseOver={() => handleHover(f.file)} onMouseLeave={handleMouseLeave}>
          <FileCard 
            file={f}
          />
          <span className={classNames('card__details', {'card__details--active': selectedCard === f.file})}>
            <p>Name: {f.name}</p>
            <hr/>
            <p>Size: {f.size_now}</p>
            <hr/>
            <p>Edited: {f.mtime}</p>
            <hr/>
            <p>Created: {f.ctime}</p>
          </span>
        </li>
      ))}
    </ul>
  );
}
