import { Fragment } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Speakers from "../components/Speaker";

//Fake backend
import speakers from "../database/speakers";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Welcome />
      <Speakers speakers={speakers} />
    </Fragment>
  );
};

export default HomePage;