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
import {ProductData} from './ProductData';

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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const Cards = () => {
  const classes = useStyles();
  
    const product =ProductData.map(({id,title,category,price},index)=>{
      return(
        <Grid item xs={3}>
        <Card className={classes.cardroot} key={index}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {category}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {price}
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
      
      );
    })
  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
         {product}
        </Grid>
     
    </div>
  );
};
export default Cards;
