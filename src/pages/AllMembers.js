
import MemberList from "../components/members/MemberList";

const DUMMY_QUESTS = [
  {
    id: "s1",
    name: "Vladimir",
    age: "64",
    profesion: "front-end developer",
    photo: "https://static.dw.com/image/55979245_303.jpg",
  },
  {
    id: "s2",
    name: "Donald",
    age: "61",
    profesion: "front-end developer",
    photo: "https://static.dw.com/image/49626233_303.jpg",
  },
  {
    id: "s3",
    name: "Barak",
    age: "64",
    profesion: "front-end developer",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
  },
];

const AllMembers = (props) => {
  return (
    <section>
      <h1>All the members</h1>
      <MemberList guests={DUMMY_QUESTS} />
    </section>
  );
};

export default AllMembers;
