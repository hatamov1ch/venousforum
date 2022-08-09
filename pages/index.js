import { Fragment } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Speakers from "../components/Speakers";
import Goals from "../components/Goals";

//Fake backend
import speakers from "../database/speakers";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Welcome />
      <Speakers speakers={speakers} />
      <Goals />
    </Fragment>
  );
};

export default HomePage;
