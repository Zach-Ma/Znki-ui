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
    http.get("/deck", { take: 20, skip: 0 }).then((res) => {
      if (res?.data?.message === "success") {
        setState({ deckItems: res.data.data });
      }
    });
  }, []);

  return (
    <Container style={{ paddingTop: "1rem" }}>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        {state.deckItems &&
          state.deckItems.map((item, index) => (
            <DeckCard key={index} {...item}></DeckCard>
          ))}
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
