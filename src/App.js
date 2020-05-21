import React from "react";
import Cookie from "./components/Cookie";
import Hover from "./components/Hover";
import Menu from "./Menu";
import Nav from "./components/Nav";
import black from "./black.png";
import blue from "./blue.png";
import green from "./green.png";
import purp from "./purp.png";
import "./App.css";
import { Card, CardGrid, Container, Header } from "./Elements";
import { PageWrapper } from "./state";
import Theme from "./components/Theme";

function App() {
  return (
    <PageWrapper>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Nav />
      <Cookie />
      <Theme />
      <Container>
        <h2>Super Cool</h2>
        <CardGrid>
          <Hover />
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} alt="Pretty pic" />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} alt="Pretty pic" />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} alt="Pretty pic" />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} alt="Pretty pic" />
          </Card>
        </CardGrid>
      </Container>
    </PageWrapper>
  );
}

export default App;
