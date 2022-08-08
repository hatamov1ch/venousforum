import { Fragment } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Speakers from "../components/Speaker";
import KeyTopics from "../components/KeyTopics";

//Fake backend
import speakers from "../database/speakers";
import topics from "../database/topics";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Welcome />
      <Speakers speakers={speakers} />
      <KeyTopics topics={topics} />
    </Fragment>
  );
};

export default HomePage;