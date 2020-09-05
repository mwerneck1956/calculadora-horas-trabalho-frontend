import React from "react";
import { Navbar, NavItem, Icon, Button } from "react-materialize";
import MenuIcon from "@material-ui/icons/Menu";
export default function Header(params) {
  return (
    <Navbar
      className="white"
      alignLinks="right"
      brand={
        <a className="brand-logo " href="#">
          Logo
        </a>
      }
      id="mobile-nav"
      menuIcon={<MenuIcon fontSize="large" />}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Button className="" node="a">
        Sair
      </Button>
    </Navbar>
  );
}
