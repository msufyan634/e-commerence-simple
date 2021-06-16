import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardroot: {
    maxWidth: 1300,
  },
  media: {
    height: 140,
  },
}));

const FullCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.cardroot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid> 
      </Grid>
    </div>
  );
};
export default FullCards;
