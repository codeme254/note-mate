import HomeFeedNav from "../../components/HomeFeedNav/HomeFeedNav";
import { UserContext } from "../../Helpers/Context";
import { useContext, useEffect, useState } from "react";
import FavoritePreview from "../../components/FavoritePreview/FavoritePreview";
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { username, _ } = useContext(UserContext);

  useEffect(() => {
    const fetchUserNotes = async () => {
      const favorites = await fetch(
        `http://localhost:8081/favorites/${username}/all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userFavorites = await favorites.json();
      setFavorites(userFavorites);
    };
    fetchUserNotes();
  }, [username]);
  return (
    <>
      <HomeFeedNav />
      {Array.isArray(favorites) && favorites.length > 0 ? (
        <div>
          <h2 className="u-center">
            Hey, {username} , here are your favorites
          </h2>
          {favorites.map((favorite) => (
            <FavoritePreview
              key={favorite.id}
              username={favorite.username}
              title={favorite.title}
              synopsis={favorite.synopsis}
              body={favorite.body}
              dateCreated={favorite.dateCreated}
              lastUpdated={favorite.lastUpdated}
            />
          ))}
        </div>
      ) : (
        <h2>
          Hey, {username} , you seem to have no favorites at this moment, visit
          the explore page and create your collection today
        </h2>
      )}
    </>
  );
};
export default Favorites;
