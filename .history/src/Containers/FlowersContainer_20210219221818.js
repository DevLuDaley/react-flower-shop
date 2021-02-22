import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


import FlowerGallery from '../components/FlowerGallery'


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: "auto",
    width: '400px',
    padding: '50px 30px',
    // margin: '20px auto',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // height: '200px',
    border: '3px dotted red'
  },
});


const FlowersContainer = () => {
    const classes = useStyles();
    return (
         
        <Grid>
            <Container className={classes.root}>
                <FlowerGallery/>
            </Container>
        </Grid>


     );
}
 
export default FlowersContainer;