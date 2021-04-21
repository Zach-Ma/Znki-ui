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

const withStyles = makeStyles({
  dock: {
    borderRadius: "8px",
    padding: "10px 1rem",
    background: "#f7ede3",
    boxShadow: "5px -5px 10px #c6beb6,5px -5px 10px #fffff5",
    height: "4rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
});

const Dock = ({ deckName = "deck name", style, ...props }) => {
  const classes = withStyles();
  return (
    <Box className={classes.dock} style={style}>
      <Typography classes={classes.dock}>{deckName}</Typography>
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
      <AccordionDetails className={classes.cardContent}>
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
// TODO remove default deck id
const CardPage = ({ deckName, deckId = 2, ...props }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    http.post("/card", { take: 20, skip: 0, where: { deckId } }).then((res) => {
      if (res?.data?.message === "success") {
        setCards(res.data.data);
      }
    });
  }, [deckId]);
  return (
    <Container>
      <Grid style={{ paddingTop: "1rem" }}>
        <Dock deckName={deckName} style={{ marginBottom: "1rem" }} />
        {cards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

CardPage.propTypes = {
  deckName: PropTypes.string,
  deckId: PropTypes.number,
};

Dock.propTypes = {
  deckName: PropTypes.string,
  style: PropTypes.obj,
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
  notes: PropTypes.obj,
};

CardPage.defaultProps = {
  // bla: 'test',
};

export default CardPage;
