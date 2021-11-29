import { useContext } from "react";
import FavoriteMemmbersContext from "../../store/favorites-context";

import Card from "../Layout/Card";
import classes from "./MemberItem.module.css";

const MemberItem = (props) => {
  const memberCtx = useContext(FavoriteMemmbersContext);

  const memberIsFavorite = memberCtx.memberIsFavorite(props.id);

  const toogleFavMemberStatusHandler = () => {
    if (memberIsFavorite) {
      memberCtx.removeMember(props.id);
    } else {
      memberCtx.addMember({
        id: props.id,
        age: props.age,
        photo: props.photo,
        profession: props.profession,
      });
    }
  };

  return (
    <Card>
      <div className={classes.container}>
        <h2>{props.name}</h2>
        <h1>{props.age}</h1>
        <div className={classes.image}>
          <img src={props.photo} alt={props.name} />
        </div>
        <h1>{props.profession}</h1>
        <div>
          <button onClick={toogleFavMemberStatusHandler}>
            {memberIsFavorite ? "remove from favorites" : "to favorites"}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default MemberItem;
