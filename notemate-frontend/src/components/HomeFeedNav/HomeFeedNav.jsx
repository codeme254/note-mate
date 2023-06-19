import LinkIcon from "./LinkIcon";
import "./HomeFeedNav.css";
import { GiRead } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaPeopleCarry } from "react-icons/Fa";

const HomeFeedNav = () => {
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
          <div className="home-feed__user--initials">DO</div>
          <p className="home-feed__user--name">zaphdev</p>
        </div>
        <LinkIcon to="" label="logout" icon={<GiRead />} />
      </div>
    </header>
  );
};
export default HomeFeedNav;
