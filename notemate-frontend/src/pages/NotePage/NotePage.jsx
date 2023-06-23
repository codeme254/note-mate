import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NotePage.css";
import HomeFeedNav from "../../components/HomeFeedNav/HomeFeedNav";
import { BsCalendar3 } from "react-icons/bs";
// import {PiHandsClapping} from 'react-icons/bi';
import { GiPartyPopper } from "react-icons/gi";

const NotePage = () => {
  const { notes_id } = useParams();
  const [notesData, setNotesData] = useState(null);
  // http://localhost:8081/notes/4fd9e500-83ec-4171-96ac-e34f9ae7dbf3
  // body claps dateCreated lastUpdated notes_id  synopsis  title  username
  useEffect(() => {
    if (!notes_id) return;
    const getNotes = async () => {
      const response = await fetch(`http://localhost:8081/notes/${notes_id}`);
      const responseData = await response.json();
      console.log(responseData);
      setNotesData(responseData);
    };
    getNotes();
  }, [notes_id]);
  return (
    <>
      <HomeFeedNav />
      {notesData ? (
        <section className="notepage">
          <h2 className="notepage__title">
            You are reading: <span>{notesData.title}</span>
          </h2>
          <h4 className="notepage__author">By {notesData.username}</h4>
          <div className="notepage__author--about">
            <p className="notepage__author--about-box">
              {" "}
              <BsCalendar3 />{" "}
              <span>
                Created on:{" "}
                {new Date(`${notesData.dateCreated}`).toLocaleString()}
              </span>
            </p>{" "}
            |{" "}
            <p className="notepage__author--about-box">
              {" "}
              <BsCalendar3 />{" "}
              <span>
                Last Updated:{" "}
                {new Date(`${notesData.lastUpdated}`).toLocaleString()}
              </span>
            </p>{" "}
            |{" "}
            <p className="notepage__author--about-box">
              {" "}
              <GiPartyPopper /> <span>{notesData.claps} Claps</span>
            </p>
          </div>
          <h5 className="notepage__synopsis">{notesData.synopsis}</h5>
          <p
            className="notepage__body"
            dangerouslySetInnerHTML={{ __html: notesData.body }}
          />
        </section>
      ) : (
        <h1>NIL</h1>
      )}
    </>
  );
};

export default NotePage;
