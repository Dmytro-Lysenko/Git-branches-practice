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
        <div className={classes.image}>
          <img src={props.photo} alt={props.name} />
        </div>
        <h2>Name: {props.name}</h2>
        <h1 className={classes.age}> Age: {props.age}</h1>
        <h1>Position: {props.profession}</h1>
        <div className={classes.actions}>
          <button onClick={toogleFavMemberStatusHandler}>
            {memberIsFavorite ? "remove from favorites" : "to favorites"}
          </button>
          <button onClick={() => props.onDel(props.id)}>Remove</button>
        </div>
      </div>
    </Card>
  );
};

export default MemberItem;
