import { UserContext } from "../../Helpers/Context";
import { useContext, useEffect, useState } from "react";
import HomeFeedNav from "../../components/HomeFeedNav/HomeFeedNav";
import UserNote from "../../components/UserNote/UserNote";
import { Link } from "react-router-dom";
import "./UserNotes.css";
// http://localhost:8081/vike/notes

const UserNotes = () => {
  const { username, setUsername } = useContext(UserContext);
  const [userNotes, setUserNotes] = useState([]);
  useEffect(() => {
    const fetchUserNotes = async () => {
      const response = await fetch(`http://localhost:8081/${username}/notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      setUserNotes(responseData);
    };
    fetchUserNotes();
  }, []);
  return (
    <>
      <HomeFeedNav />
      <h2 className="u-center">Notes you have taken {username}</h2>
      <div className="user-notes__container">
        {userNotes.length === 0 ? (
          <div className="prompt-to-take-notes">
            <h2>You haven't taken any notes yet</h2>
            <Link to="/studio">New Note</Link>
          </div>
        ) : (
          userNotes.map((notes, i) => (
            <UserNote
              title={notes.title}
              synopsis={notes.synopsis}
              dateCreated={notes.dateCreated}
              body={notes.body}
            />
          ))
        )}
      </div>
    </>
  );
};
export default UserNotes;
