import {
  AiOutlineSave,
  AiOutlineLike,
  AiOutlineFilePdf,
  AiOutlineDownload,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "./NotesPreview.css";
import NotesPDF from "./NotesPDF";

const NotesPreview = ({
  id,
  firstName,
  lastName,
  title,
  synposis,
  bodyPreview,
  username,
  datePosted,
}) => {
  return (
    <>
      <div className="notes-preview">
        <div className="notes-preview__avartar">
          {firstName &&
            lastName &&
            `${firstName.charAt(0)}${lastName.charAt(0)}`}
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
          <p
            className="notes-preview__body-preview"
            dangerouslySetInnerHTML={{ __html: bodyPreview }}
          />
          <div className="notes-controls">
            <Link to={`/read/${id}`} className="notes-controls__control">
              <AiOutlineLike />
              <p>read</p>
            </Link>

            <button className="notes-controls__control">
              <AiOutlineLike />
              <p>clap</p>
            </button>

            <button
              className="notes-controls__control"
              title="download notes as pdf"
            >
              <PDFDownloadLink
                document={
                  <NotesPDF
                    title={title}
                    synposis={synposis}
                    bodyPreview={bodyPreview}
                  />
                }
                fileName={title}
              >
                <AiOutlineFilePdf />
                <AiOutlineDownload />
                {({ loading }) =>
                  loading ? <p>Loading document...</p> : <p>Download as pdf</p>
                }
              </PDFDownloadLink>
              {/* <p>Download as pdf</p> */}
            </button>

            <button className="notes-controls__control">
              <AiOutlineSave />
              <p>save to favorites</p>
            </button>
          </div>
        </div>
      </div>
      {/* <NotesPDF title={title} synposis={synposis} bodyPreview={bodyPreview} /> */}
    </>
  );
};
export default NotesPreview;
