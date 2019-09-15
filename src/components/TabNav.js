import React, {useState} from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

    return(
        <Menu>
            <Menu.Item>
                <Icon name="home" /> 
                <NavLink to="/" activeClassName="home"> Home Page </NavLink>
            </Menu.Item>
            <Menu.Item>
                <Icon name="users" />
                <NavLink to="/character" activeClassName="characters">Characters</NavLink>
            </Menu.Item>
            <Menu.Item>
                <Icon name="map outline" />
                <NavLink to="/location" activeClassName="locations">Locations</NavLink>
            </Menu.Item>
            <Menu.Item>
                <Icon name="video" />
                <NavLink to="/episode" activeClassName="episodes">Episodes</NavLink>
            </Menu.Item>
        </Menu>
    )

};
