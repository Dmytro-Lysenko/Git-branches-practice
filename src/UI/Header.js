import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>All members</li>
        <li>Favorite members</li>
        <li>Add new member</li>
      </ul>
    </div>
  );
};

export default Header;
