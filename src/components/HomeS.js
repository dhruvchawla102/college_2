import React from "react";
import Card from "./Card";
import Nav from "./Nav";
import FeatureInfo from "./FeatureInfo";
import "./HomeS.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Router>
        <Nav subsection='School'/>
      </Router>

      <div className="feture__info__section">
        <FeatureInfo title="Educational Details and Materials" />
      </div>

      <div className="home__Section">
        <Card
          src="https://images.unsplash.com/photo-1539800644988-3424dd648c2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="Time Table"
          description="There are some changes in the time table of next week so please make a note of that."
        />
        <Card
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="Study Material"
          description="Short Notes · Reference Books · Lab Manual Pdf"
        />
        <Card
          src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="Examination Details"
          description="Admit Card released · Internal Viva Schedule "
        />
      </div>

      <div className="feture__info__section">
        <FeatureInfo title="Extra Curricular Activities " />
      </div>

      <div className="home__Section">
        <Card
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=60"
          title="Annual Day Participants"
          description="Practice Sessions · Timings · More Details "
        />
        <Card
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=60"
          title="BasketBall Tournament"
          description="Participanting Schools · Team Details · Schedule "
        />
        <Card
          src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=60"
          title="Science Fair"
          description="Themes · Prizes · Dates · Deadline "
        />
      </div>
    </div>
  );
}

export default Home;
