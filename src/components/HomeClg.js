import React from "react";
import Card from "./Card";
import NavClg from "./NavClg";
import { Button }  from '@material-ui/core'
import FeatureInfo from "./FeatureInfo";
import "./HomeS.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HomeClg() {
  return (
    <div>
      {/* <Router>
        <NavClg subsection='College'/>
      </Router> */}

      <div className="feture__info__section">
        <FeatureInfo title="College Related Details and Materials" />
      </div>

      <div className="home__Section">
        <Card
          src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="College Info"
          description="Schedule · Subject wise marks Break Down"
        />
        <Card
          src="https://images.unsplash.com/photo-1475154404624-07909433bbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="Extra Study Material"
          description="Short Notes · Reference Books · Lab Manual Pdf"
        />
        <Card
          src="https://images.unsplash.com/photo-1539800644988-3424dd648c2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="Time Table"
          description="There are some changes in the time table of next week so please make a note of that."
        />
      </div>

      <div className="feture__info__section">
        <FeatureInfo title="Upcoming Events" />
      </div>

      <div className="home__Section">
        <Card
          src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600"
          title="Fest 2020"
          description="Sponsors · Day wise Schedule · Timings · More Details "
        />
        <Card
          src="https://images.unsplash.com/photo-1547839918-5ed99eac4175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600"
          title="Sports Day"
          description="Registration Details · Activities · Schedule "
        />
      </div>

      <div className="feture__info__section">
        <FeatureInfo title="Build Your Community" />
      </div>

      <div className="home__Section">
        <Card
          src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600"
          title="Programming"
          description="Registration Details · Activities · Schedule "
        />
        <Card
          src="https://images.unsplash.com/photo-1596567181771-c28887ca0134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600"
          title="Artists"
          description="Registration Details · Activities · Schedule "
        />
        <Card
          src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600"
          title="Dramatic"
          description="Registration Details · Activities · Schedule "
        />
      </div>
      <div className='chat__button'>
        <Button variant='outlined' size='large' color='primary' href='https://discord-clone-2a247.web.app'  >
          Join Chatroom   
        </Button>
      </div>
    </div>
  );
}

export default HomeClg;
