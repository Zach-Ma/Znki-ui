import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
//import { Test } from './Deck.styles';
import DeckCard from "../../components/Card";
import http from "../../shared/services/api";

const Deck = (props) => {
  const [state, setState] = useState({
    deckItems: [],
  });

  useEffect(() => {
    http.get("/api/deck").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Container style={{ paddingTop: "1rem" }}>
      <Grid container>
        <DeckCard></DeckCard>
      </Grid>
    </Container>
  );
};

Deck.propTypes = {
  // bla: PropTypes.string,
};

Deck.defaultProps = {
  // bla: 'test',
};

export default Deck;
