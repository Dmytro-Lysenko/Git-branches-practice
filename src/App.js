import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import AllMembers from "./pages/AllMembers";
import FavoriteMembers from "./pages/FavoriteMemmbers";
import NewMember from "./pages/NewMember";
import Header from "./components/UI/Header";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Fragment>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<AllMembers />} exact></Route>
          <Route path="/new-member" element={<NewMember />}></Route>
          <Route path="/favorites" element={<FavoriteMembers />}></Route>
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
