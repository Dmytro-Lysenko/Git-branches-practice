import { useContext } from "react";
import FavoriteMemmbersContext from "../store/favorites-context";
import MemberList from "../components/members/MemberList";
import classes from "./Favorites.module.css";

const FavoriteMembers = (props) => {
  const membersCtx = useContext(FavoriteMemmbersContext);
  let content;

  if (membersCtx.totalFavoriteMembers === 0) {
    content = <p className={classes.message}>You got no favorites members. Try to add some!</p>;
  } else {
    content = <MemberList guests={membersCtx.favoriteMembers} />;
  }
  return (
    <section className={classes.main}>
      <h1 className={classes.title}>Favorites</h1>
      {content}
    </section>
  );
};

export default FavoriteMembers;
