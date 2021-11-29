const MemberItem = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h1>{props.age}</h1>
      <div>
        <img src={props.photo} alt={props.name} />
      </div>
      <h1>{props.profession}</h1>
    </div>
  );
};

export default MemberItem;
