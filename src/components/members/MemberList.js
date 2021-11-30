import MemberItem from "./MemberItem";

const MemberList = (props) => {
  return (
    <section>
      {props.guests.map((guest) => (
        <MemberItem
          onDel={props.onDel}
          key={guest.id}
          id={guest.id}
          name={guest.name}
          age={guest.age}
          photo={guest.photo}
          profession={guest.profession}
        />
      ))}
    </section>
  );
};

export default MemberList;
