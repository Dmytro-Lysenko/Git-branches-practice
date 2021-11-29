import MemberItem from "./MemberItem";

const MemberList = (props) => {
  return (
    <section>
      <h2>All guests list</h2>
      {props.guests.map((guest) => (
        <MemberItem
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
