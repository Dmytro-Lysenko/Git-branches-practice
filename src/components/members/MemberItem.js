import Card from "../Layout/Card";
import classes from "./MemberItem.module.css";

const MemberItem = (props) => {
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
          <button>To favorites</button>
        </div>
      </div>
    </Card>
  );
};

export default MemberItem;
