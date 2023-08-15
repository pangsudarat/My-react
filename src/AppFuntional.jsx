import "./App.css"
import React , { useState, useEffect} from "react"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

const Box = (props) => {
    return (<div className={css`
    width: 75px;
    height: 75px;
    background-color: ${props.color};
    `}
    >
        {props.number}
    </div>
    );
}

const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    background-color: blue;
    justify-content: center;
    align-items: center;
`

const HomePageFunctional = () => {
const [age, setAge]= useState(15);

  return(
  <Router>
    <ul>
        <li>
            <Link to="/">box999</Link>
        </li>
        <li>
            <Link to="/box1">box1</Link>
        </li>
        <li>
            <Link to="/box2">box2</Link>
        </li>
        <li>
            <Link to="/box3">box3</Link>
        </li>
    </ul>
  <Container>
    <Switch>

          <Route exact={true}path="/">
            <Box color="gray" number="999"/>
          </Route>

          <Route path="/box1">
            <Box color="red" number="1"/>
          </Route>

          <Route path="/box2">
            <Box color="green" number="2"/>
          </Route>

          <Route path="/box3">
            <Box color="blue" number="3"/>
          </Route>

        </Switch>
  </Container>
  </Router>
  )
      
};

export default HomePageFunctional 








