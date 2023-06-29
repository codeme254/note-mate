import "./FavoritePreview.css";
const FavoritePreview = ({
  title,
  synopsis,
  body,
  dateCreated,
  lastUpdated,
  username,
}) => {
  return (
    <div className="favorite">
      <h2 className="favorite__title">{title}</h2>
      <h4 className="favorite__synopsis">{synopsis}</h4>
      <p
        className="favorite__preview--body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <p className="favorite__meta">
        Written by {username} on <span>{dateCreated}</span>
      </p>
      <p className="favorite__meta">
        Last Updated: <span>{lastUpdated}</span>
      </p>
    </div>
  );
};
export default FavoritePreview;
