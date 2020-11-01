import React from "react";
import Card from "./Card";
import NavBsn from "./NavBsn";
import FeatureInfo from "./FeatureInfo";
import "./HomeS.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HomeBsn() {
  return (
    <div>
      <Router>
        <NavBsn subsection="Business"/>
      </Router>

      <div className="feture__info__section">
        <FeatureInfo title="Business Related Work" />
      </div>

      <div className="home__Section">
        <Card
          src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="Upcoming Projects"
          description="Details of Shortlisted Projects"
        />
        <Card
          src="https://images.unsplash.com/photo-1539800644988-3424dd648c2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="Meetings"
          description="Find your Scheduled meetings"
        />
        <Card
          src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&h=600"
          title="Required Branch Manager"
          description="Details · Branch Name · Salary"
        />
      </div>

      <div className="feture__info__section">
        <FeatureInfo title="Make Your Business Easy" />
      </div>

      <div className="home__Section">
        <Card
          src="https://images.unsplash.com/photo-1565514417878-a66a6b0f2c7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=150"
          title="Khata Book"
          description="Payments · Mode Of Payment · More Details "
        />
        <Card
          src="https://images.unsplash.com/photo-1585224907690-cbaf12e38471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=150"
          title="Virtual Meetings"
          description="Finish your meetings from your home · Easy Setup · Schedule Meetings "
        />
      </div>

      <div className="client__info">
        <FeatureInfo title="Our Clients" />
      </div>

      <div className="client__section">
        <img className='logo__g' src="https://t4.ftcdn.net/jpg/03/08/54/37/240_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg" />
        <img className='logo__a' src="data:image/png;base64,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" />
        <img className='logo__m' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAclBMVEX////xURuAzCgAre/7vAkAqO7wQwD7twD6uKHQ7abwRgB5yRT70cn/0cb1++N1yADF6Kf/7uet8Pz+87DI5vrB7P//+db+4KHE9f7/+sb0+uHwNgD/+vgAo+36tJv7/fLp99RuxgDm+v7//u77swD//ePWuxWSAAABDUlEQVR4nO3Zy1LCQBCG0faSRAWJUcRLgGjE939FsdzPLKasKeWcdW/+b9sRAAAAAAAAAAAAAAAAAAAA8H8N+6uk/RAxXWe81V5RZjneJI23Ea/vi6T+rvaKMsv2LKk9Nlj150kLDTTQQAMNNNBAAw000EADDTTQQAMNNNBAAw000EADDTTQQAMNTrfB2Cb9/N77tD/eYDtkbI9Hq4yp9gooN99nzBEfDxmb2ivKrHdN0u4xYnPokg5PtVeUWTcXSc13g+4yqdNAAw000EADDTTQQAMNNNBAAw000EADDTTQQAMNNNBAAw000OB0G/i9x/ycMUdMLxmftVcAAAAAAAAAAAAAAAAAAADA7/kCywdYWjGc/HcAAAAASUVORK5CYII=" />
      </div>
    </div>
  );
}

export default HomeBsn;
