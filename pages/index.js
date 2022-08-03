import { Fragment } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Welcome />
    </Fragment>
  );
};

export default HomePage;