import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import { UserContext } from "../../Helpers/Context";
import { useContext } from "react";
import "react-quill/dist/quill.snow.css";
import { useState, useRef, useEffect } from "react";
import HomeFeedNav from "../../components/HomeFeedNav/HomeFeedNav";
import "./Studio.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const Studio = () => {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);
  const { username, setUserName } = useContext(UserContext);
  useEffect(() => {
    quillRef.current.focus();
  }, []);
  return (
    <>
      <HomeFeedNav />
      <div className="studio__container">
        <h2 className="studio__container--title">
          write your notes {username}
        </h2>
        <form action="">
          <div className="form-group">
            <label
              htmlFor="notes_title"
              className="form-group-lable u-dark-fix"
            >
              Enter notes title
            </label>
            <input
              type="text"
              name=""
              id="notes_title"
              className="form-text-input u-input-border-fix input-placeholder-fix"
              placeholder="e.g How to connect mssql with express step by step"
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis" className="form-group-lable u-dark-fix">
              Brief summary of your notes
            </label>
            <input
              type="text"
              name=""
              id="synopsis"
              className="form-text-input u-input-border-fix input-placeholder-fix"
              placeholder="a step by step guide on how to connect mssql with express"
            />
          </div>
          <div>
            <label htmlFor="synopsis" className="form-group-lable u-dark-fix">
              Write your notes
            </label>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              modules={modules}
              formats={formats}
              className="editor"
              ref={quillRef}
            >
              <div className="editing-area"></div>
            </ReactQuill>
          </div>
          <div className="buttons">
            <button className="btn btn--save">Save</button>
            <Link to="/explore-notes" className="btn-cancel">
              cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Studio;
