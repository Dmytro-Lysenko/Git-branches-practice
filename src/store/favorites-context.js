import { createContext, useState } from "react";

const FavoriteMemmbersContext = createContext({
  favoriteMembers: [],
  totalFavoriteMembers: 0,
  addMember: (favoriteMember) => {},
  removeMember: (memberId) => {},
  memberIsFavorite: (memberId) => {},
});

export const FavoriteMemberContextProvider = (props) => {
  const [userFavoritesMembers, setUserFavoritesMembers] = useState([]);

  const addFavoriteMemberHandler = (favoriteMember) => {
    setUserFavoritesMembers((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMember);
    });
  };

  const removeFavoriteMemberHandler = (memberId) => {
    setUserFavoritesMembers((prevUserFavorites) => {
      return prevUserFavorites.filter((member) => member.id !== memberId);
    });
  };

  const MemberIsFavoriteHandler = (memberId) => {
    return userFavoritesMembers.some((member) => member.id === memberId);
  };

  const context = {
    favoriteMembers: userFavoritesMembers,
    totalFavoriteMembers: userFavoritesMembers.length,
    addMember: addFavoriteMemberHandler,
    removeMember: removeFavoriteMemberHandler,
    memberIsFavorite: MemberIsFavoriteHandler,
  };

  return (
    <FavoriteMemmbersContext.Provider value={context}>
      {props.children}
    </FavoriteMemmbersContext.Provider>
  );
};

export default FavoriteMemmbersContext;
