import { Fragment } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Speakers from "../components/Speaker";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Welcome />
      <Speakers />
    </Fragment>
  );
};

export default HomePage;