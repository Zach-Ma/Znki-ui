import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import http from "../../shared/services/api";
import { useLocation } from "react-router-dom";

const withStyles = makeStyles({
  dock: {
    borderRadius: "8px",
    padding: "10px 1rem",
    boxShadow: "-9px 9px 19px #dedbcc, 9px -9px 19px #fffffa",
    height: "4rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
});

const Dock = ({ deckInfo, style, ...props }) => {
  const classes = withStyles();
  return (
    <Box className={classes.dock} style={style}>
      <Typography>{deckInfo.name}</Typography>
    </Box>
  );
};

const Card = ({
  id,
  deckId,
  templateId,
  title,
  status,
  due,
  reviews,
  createAt,
  updateAt,
  notes,
}) => {
  const classes = withStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      square
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      // NOTE: currently disabled for performance reason
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails classes={classes.cardContent}>
        {notes &&
          notes.length > 0 &&
          notes.map((item) => (
            <Typography paragraph key={item.id}>
              {item.content}
            </Typography>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

// TODO useEffect wrapped up
const CardPage = () => {
  const [state, setState] = useState({
    where: {
      deckId: 0,
    },
    cards: [],
  });
  const location = useLocation();

  useEffect(() => {
    const data = {
      take: 20,
      skip: 0,
      where: {
        deckId: location?.state?.deckInfo?.id || 0,
      },
    };
    if (data.where.deckId > 0) {
      http.post("/card", data).then((res) => {
        if (res?.data?.message === "success") {
          setState({ ...state, cards: res.data.data });
        }
      });
    }
  }, []);

  return (
    <Container>
      <Grid style={{ paddingTop: "1rem" }}>
        <Dock
          deckInfo={location.state.deckInfo}
          style={{ marginBottom: "1rem" }}
        />
        {state.cards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

CardPage.propTypes = {};

Dock.propTypes = {
  deckInfo: PropTypes.object,
  style: PropTypes.object,
};

Card.propTypes = {
  id: PropTypes.number,
  deckId: PropTypes.number,
  templateId: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.string,
  due: PropTypes.number,
  reviews: PropTypes.number,
  createAt: PropTypes.string,
  updateAt: PropTypes.string,
  notes: PropTypes.array,
};

CardPage.defaultProps = {
  // bla: 'test',
};

export default CardPage;
