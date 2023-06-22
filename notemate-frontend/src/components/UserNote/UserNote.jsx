import "./UserNote.css";
import { BsPencilSquare } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
const UserNote = ({ title, synopsis, body, dateCreated }) => {
  return (
    <div className="user-note">
      <h2 className="user-note__title">{title}</h2>
      <p className="user-note__synopsis">{synopsis}</p>
      <p className="user-note__date-created">
        You created this on : <span>{dateCreated}</span>
      </p>
      <p
        className="user-note__body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div className="user-note__controls">
        <button>
          <BiLinkExternal />
          <span>read notes</span>
        </button>
        <button>
          <BsPencilSquare />
          <span>update notes</span>
        </button>
        <button className="u-delete">
          <MdOutlineDeleteOutline />
          <span>Delete notes</span>
        </button>
      </div>
    </div>
  );
};
export default UserNote;
