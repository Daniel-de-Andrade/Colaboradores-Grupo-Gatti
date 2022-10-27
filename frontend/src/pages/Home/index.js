import React from "react";

import NavbarMain from "../../components/NavbarMain";
import { Content } from "../../styles";
import ListContributors from "../../components/dashboard/contributors/List";

function Home() {
  return (
    <>
      <NavbarMain />
      <Content>
        <ListContributors />
      </Content>
    </>
  );
}

export default Home;
