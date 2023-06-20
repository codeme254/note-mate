import LinkIcon from "./LinkIcon";
import { UserContext } from "../../Helpers/Context";
import { useContext, useEffect, useState } from "react";
import "./HomeFeedNav.css";
import { GiRead } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaPeopleCarry } from "react-icons/Fa";

// http://localhost:8081/users/michaeljohnson

const HomeFeedNav = () => {
  const { username, setUsername } = useContext(UserContext);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const user = await fetch(`http://localhost:8081/users/${username}`);
      const userData = await user.json();
      setUserData(userData);
    };
    getUser();
  }, []);
  return (
    <header className="home-feed-nav">
      <h2 className="home-feed-nav__logo">NoteMate</h2>
      <nav className="home-feed-nav__nav">
        <div className="home-feed-nav__nav--links">
          <LinkIcon to="/explore-notes" label="explore" icon={<GiRead />} />
          <LinkIcon to="/studio" label="new note" icon={<BsPencilSquare />} />
          <LinkIcon to="" label="my notes" icon={<FiBookOpen />} />
          <LinkIcon to="" label="my account" icon={<RiAccountCircleFill />} />
          <LinkIcon
            to="/community"
            label="community"
            icon={<FaPeopleCarry />}
          />
        </div>
      </nav>

      <div className="home-feed-nav__user">
        <div className="home-feed__user">
          <div className="home-feed__user--initials">
            {userData && userData.firstName && userData.lastName
              ? `${userData.firstName.charAt(0)}${userData.lastName.charAt(0)}`
              : null}
          </div>
          <p className="home-feed__user--name">{username}</p>
        </div>
        <LinkIcon to="" label="logout" icon={<GiRead />} />
      </div>
    </header>
  );
};
export default HomeFeedNav;
