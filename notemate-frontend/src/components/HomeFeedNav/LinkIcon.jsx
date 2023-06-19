import { Link } from "react-router-dom";

const LinkIcon = ({ label, to, icon }) => {
  return (
    <Link className="feed__nav-link" to={to}>
      <span className="feed__nav-link--icon">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};
export default LinkIcon;
