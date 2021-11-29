import { useState, useEffect } from "react";

import MemberList from "../components/members/MemberList";

const DUMMY_QUESTS = [
  {
    id: "s1",
    name: "Vladimir",
    age: "64",
    profession: "front-end developer",
    photo: "https://static.dw.com/image/55979245_303.jpg",
  },
  {
    id: "s2",
    name: "Donald",
    age: "61",
    profession: "front-end developer",
    photo: "https://static.dw.com/image/49626233_303.jpg",
  },
  {
    id: "s3",
    name: "Barak",
    age: "64",
    profession: "front-end developer",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
  },
];

const AllMembers = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMembers, setLoeadedMembers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/members.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const members = [];

        for (const mem in data) {
          const member = {
            id: mem,
            ...data[mem],
          };

          members.push(member);
        }

        setIsLoading(false);
        setLoeadedMembers(members);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All the members</h1>
      <MemberList guests={loadedMembers} />
    </section>
  );
};

export default AllMembers;
