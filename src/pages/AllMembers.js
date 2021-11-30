import { useState, useEffect, useContext } from "react";
import AllMembersContext from "../store/allmembers-context";

import MemberList from "../components/members/MemberList";

const AllMembers = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMembers, setLoeadedMembers] = useState([]);
  const allMemberCtx = useContext(AllMembersContext);

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
  console.log(loadedMembers);
  const deleteMemberHandler = (memberId) => {
    // Managing data by lifting state up with functions and useState
    // const updatedLoadedMembers = loadedMembers.filter(
    //   (member) => member.id !== memberId
    // );
    // setLoeadedMembers(updatedLoadedMembers);

    //Managing data by using allMembers context
    allMemberCtx.allMembers = loadedMembers.filter(
      (member) => member.id !== memberId
    );
    setLoeadedMembers(allMemberCtx.allMembers);
  };

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
      <MemberList onDel={deleteMemberHandler} guests={loadedMembers} />
    </section>
  );
};

export default AllMembers;
