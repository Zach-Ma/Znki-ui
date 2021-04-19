import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import DashboardCard from "../../components/DashboardCard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import NoteIcon from "@material-ui/icons/Note";

const useStyles = makeStyles({
  section: {
    height: 200,
    backgroundColor: "#dedede",
  },
});

const dashboardItems = [
  {
    title: "Decks",
    count: 12,
    icon: <LibraryBooksIcon />,
  },
  {
    title: "Cards",
    count: 12,
    icon: <NoteIcon />,
  },
  {
    title: "Days Used",
    count: 12,
    icon: <EqualizerIcon />,
  },
  {
    title: "Tags",
    count: 12,
    icon: <LocalOfferIcon />,
  },
];

const Statistic = () => {
  const classes = useStyles();
  return (
    <Container style={{ paddingTop: "1rem" }}>
      <Grid container spacing={1}>
        {dashboardItems.map((item, index) => (
          <Grid item xs={6} lg={3} key={index}>
            <DashboardCard
              title={item.title}
              count={item.count}
              renderIcon={item.icon}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <section className={classes.section}>heat-map</section>
        </Grid>
        <Grid item xs={8}>
          <section className={classes.section}>charts</section>
        </Grid>
        <Grid item xs={4}>
          <section className={classes.section}>charts</section>
        </Grid>
      </Grid>
    </Container>
  );
};

Statistic.propTypes = {
  // bla: PropTypes.string,
};

Statistic.defaultProps = {
  // bla: 'test',
};

export default Statistic;
