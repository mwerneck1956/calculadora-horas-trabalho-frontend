import React, { Fragment } from "react";
import { Navbar, NavItem, Icon, Button } from "react-materialize";

//Css
import "./Header.css";

//Material ui
import { Grid } from "@material-ui/core";

//Material ui Icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Header(params) {
  return (
    <Grid style={{marginTop :"3%"}} justify="center" container>
      <Grid item md={8} lg={8} xs={12} xl={8}>
        <Navbar
          className="transparent header"
          alignLinks="right"
          brand={
            <Fragment>
              <a id="bemVindo" className="brand-logo logo  black-text" href="#">
                <i className="large material-icons">account_circle</i>{" "}
                <spam className="logo">Bem Vindo Matheus</spam>
              </a>
            </Fragment>
          }
          id="mobile-nav"
          //menuIcon={<MenuIcon fontSize="large" />}
          options={{
            //draggable: true,
            // edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <Button className="button" node="a">
            Sair
          </Button>
        </Navbar>
      </Grid>
    </Grid>
  );
}
