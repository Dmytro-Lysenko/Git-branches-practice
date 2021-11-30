import { useRef } from "react";
import Card from "../Layout/Card";
import classes from "./NewMemberForm.module.css";

const NewMemberForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const photoInputRef = useRef();
  const professionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredPhoto = photoInputRef.current.value;
    const enteredProfession = professionInputRef.current.value;

    const newMemberData = {
      name: enteredName,
      age: enteredAge,
      photo: enteredPhoto,
      profession: enteredProfession,
    };

    props.addNewMember(newMemberData);
  };

  return (
    <Card className={classes.test}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name of Member</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="age">Age of Member</label>
          <input type="number" id="age" ref={ageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="photo">Photo of Member</label>
          <input type="url" id="photo" ref={photoInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="professi0n">Profession of Member</label>
          <input type="text" id="profession" ref={professionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add member</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMemberForm;
