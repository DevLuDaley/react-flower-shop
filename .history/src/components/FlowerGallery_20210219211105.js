import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import FlowerGalleryStyles from './FlowerGalleryStyles'
// import Button from materialmaterial
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const FlowerGallery = () => {
      const classes = useStyles();
    // const classes = FlowerGalleryStyles()

const flowers = [
  {id: 1, name: 'Red Roses', photo: '' , rating: },
  {id: 2, name: 'Tulips', photo: url(''), rating: },
  {id: 3, name: 'Daisies', photo: url(''), rating: },
  {id: 4, name: 'Sunflowers', photo: url(''), rating: },
  {id: 5, name: 'Blue-Eyed-Susan', photo: url(''), rating: }

] 

    return (
        <Container>
        <h1>This is a flower Gallery</h1>
        <Button className={classes.root}>Hook</Button>
        <Button variant="contained" color="primary">Hook</Button>
      </Container>
      );
}
 
export default FlowerGallery;
// FlowerGalleryStyles