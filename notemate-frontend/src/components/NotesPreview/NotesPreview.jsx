import { AiOutlineSave, AiOutlineLike, AiOutlineFilePdf } from "react-icons/ai";
import "./NotesPreview.css";
const NotesPreview = ({
  firstName,
  lastName,
  title,
  synposis,
  bodyPreview,
  username,
  datePosted,
  initials,
}) => {
  return (
    <div className="notes-preview">
      <div className="notes-preview__avartar">
        {firstName && lastName && `${firstName.charAt(0)}${lastName.charAt(0)}`}
      </div>
      <div className="notes-preview__main">
        <h5 className="notes-preview__name">
          {firstName} {lastName}
        </h5>
        <p className="notes-preview__author">
          By: {username} on {datePosted}
        </p>
        <h3 className="notes-preview__title">{title}</h3>
        <p className="notes-preview__synopsis">{synposis}</p>
        <p className="notes-preview__body-preview">{bodyPreview}</p>
        <div className="notes-controls">
          <button className="notes-controls__control">
            <AiOutlineLike />
            <p>clap</p>
          </button>
          <button className="notes-controls__control">
            <AiOutlineFilePdf />
            <p>Download as pdf</p>
          </button>
          <button className="notes-controls__control">
            <AiOutlineSave />
            <p>save to favorites</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotesPreview;
