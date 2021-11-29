import { useRef } from "react";
import Card from "../Layout/Card";

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
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name of Member</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="age">AGe of Member</label>
          <input type="number" id="age" ref={ageInputRef} />
        </div>
        <div>
          <label htmlFor="photo">Photo of Member</label>
          <input type="url" id="photo" ref={photoInputRef} />
        </div>
        <div>
          <label htmlFor="professi0n">Profession of Member</label>
          <input type="text" id="profession" ref={professionInputRef} />
        </div>
        <div>
          <button>Add member</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMemberForm;
