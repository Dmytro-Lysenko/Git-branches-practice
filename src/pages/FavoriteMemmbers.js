import { useContext } from "react";
import FavoriteMemmbersContext from "../store/favorites-context";
import MemberList from "../components/members/MemberList";

const FavoriteMembers = (props) => {
  const membersCtx = useContext(FavoriteMemmbersContext);
  let content;

  if (membersCtx.totalFavoriteMembers === 0) {
    content = <p>You got no favorites members. Try to add some!</p>;
  } else {
    content = <MemberList guests={membersCtx.favoriteMembers} />;
  }
  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
};

export default FavoriteMembers;
