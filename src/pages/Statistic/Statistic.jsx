import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, makeStyles } from "@material-ui/core";
import DashboardCard from "../../components/DashboardCard";
import { FaGithub } from "react-icons/fa";

const useStyles = makeStyles({
  section: {
    height: 200,
    backgroundColor: "#dedede",
    margin: ".5rem .8rem",
  },
});

const dashboardItems = [
  {
    title: "localhost",
    count: 12,
    icon: <FaGithub />,
  },
  {
    title: "localhost",
    count: 12,
    icon: <FaGithub />,
  },
  {
    title: "localhost",
    count: 12,
    icon: <FaGithub />,
  },
  {
    title: "localhost",
    count: 12,
    icon: <FaGithub />,
  },
];

const Statistic = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        {dashboardItems.map((item, index) => (
          <Grid item spacing={1} xs={6} lg={3} key={index}>
            <DashboardCard
              title={item.title}
              count={item.count}
              renderIcon={item.icon}
              style={{
                margin: ".5rem .8rem",
              }}
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
