import { useNavigate } from "react-router-dom";

import NewMemberForm from "../components/members/NewMemberForm";

const NewMember = () => {
  let navigate = useNavigate();
  const addNewMemberHandler = (memberData) => {
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/members.json",
      {
        method: "POST",
        body: JSON.stringify(memberData),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <section>
      <h1>New members</h1>
      <NewMemberForm addNewMember={addNewMemberHandler} />
    </section>
  );
};

export default NewMember;
