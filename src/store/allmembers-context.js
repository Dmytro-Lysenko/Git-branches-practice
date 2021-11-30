import { createContext, useState } from "react";

const AllMembersContext = createContext({
  allMembers: [],
  totalMembers: 0,
  addMember: (Member) => {},
  removeMember: (memberId) => {},
});

export const AllMemberContextProvider = (props) => {
  const [allMems, setAllMems] = useState([]);

  const addMemHandler = (allMembers) => {
    setAllMems((prevAllMembers) => {
      return prevAllMembers.concat(allMembers);
    });
  };

  const remMemHandler = (memberId) => {
    if (allMems.length > 0) {
      setAllMems((prevAllMembers) => {
        return prevAllMembers.filter((member) => member.id !== memberId);
      });
    } else {
      console.log("no items in memberslist");
    }
  };

  const context = {
    allMembers: allMems,
    totalMembers: allMems.length,
    addMember: addMemHandler,
    removeMember: remMemHandler,
  };

  return (
    <AllMembersContext.Provider value={context}>
      {props.children}
    </AllMembersContext.Provider>
  );
};

export default AllMembersContext;
