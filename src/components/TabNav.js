import React, {useState} from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

    const [tab, setTab] = useState("home");

    return(
        <Menu defaultActiveKey="home" activeKey={tab} onSelect={tab => setTab(tab)}>
            <Tab eventTab="home" title="Home Page">
              <Icon name="home" /> 
              <NavLink to="/" activeClassName="home"> Home Page </NavLink>
            </Tab>
            <Tab eventTab="character" title="Characters" >
              <Icon name="users" />
              <NavLink to="/character" activeClassName="characters">Characters</NavLink>
            </Tab>
            <Tab eventTab="location" title="Locations" >
              <Icon name="map outline" />
              <NavLink to="/location" activeClassName="locations">Locations</NavLink>
            </Tab>
            <Tab eventTab="episode" title="Episodes" >
              <Icon name="video" />
              <NavLink to="/episode" activeClassName="episodes">Episodes</NavLink>
            </Tab>
        </Menu>
    )

};
