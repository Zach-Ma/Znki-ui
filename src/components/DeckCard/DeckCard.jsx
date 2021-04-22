import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Chip, Box } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import PublicIcon from "@material-ui/icons/Public";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { dateDiff } from "../../shared/utils/transform";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    paddingLeft: ".75rem",
    width: "90%",
    boxShadow: "9px 6px 13px 0px  rgba(34, 35, 58, 0.2)",
    borderRadius: 12,
  },
  overline: {
    fontSize: ".75rem",
  },
  title: {
    padding: "0.5rem 0 0.3rem",
  },
  description: {},
  actions: {
    paddingBottom: "1rem",
    justifyContent: "space-between",
    "& button": {
      flexShrink: 0,
    },
  },
  box: {
    "& *": {
      margin: "0.2rem",
    },
  },
});

export default function DeckCard({
  id = 0,
  version = 0,
  pid = -1,
  conf = {},
  createAt = "2021-04-17T09:07:12.180Z",
  updateAt = "2021-04-17T09:07:12.180Z",
  isPublic = false,
  name = "placeholder",
  description = "Bedfordshire tangible Refined",
}) {
  const classes = useStyles();
  const dayCount = dateDiff(createAt, new Date(), "day");
  const query = `?id=${id}`;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.overline}
          color="textSecondary"
          gutterBottom
        >
          {`Already in deck for ${dayCount} ${dayCount >= 2 ? "days" : "day"} `}
        </Typography>
        <Typography
          color="primary"
          className={classes.title}
          variant="h5"
          component="h2"
        >
          {name}
        </Typography>
        <Typography color="textSecondary" className={classes.description}>
          {description}
        </Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Box className={classes.box}>
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label={isPublic ? "public" : "private"}
            icon={<PublicIcon />}
          />
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label="placeholder"
            icon={<AssignmentTurnedInIcon />}
          />
        </Box>
        <Button
          color="primary"
          size="small"
          component={Link}
          to={`/card${query}`}
        >
          view
        </Button>
      </CardActions>
    </Card>
  );
}

DeckCard.propTypes = {
  id: PropTypes.number,
  version: PropTypes.number,
  pid: PropTypes.number,
  conf: PropTypes.string,
  createAt: PropTypes.string,
  updateAt: PropTypes.string,
  isPublic: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
};
