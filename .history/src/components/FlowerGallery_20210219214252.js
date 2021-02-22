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

const flowerList = [
  {id: 1, name: 'Red Roses', imageUrl: 'https://images.unsplash.com/photo-1548094967-e25a127d1f6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1137&q=80' , rating: 5},
  {id: 2, name: 'Tulips', imageUrl: 'https://images.unsplash.com/photo-1610444028097-40d9858bb44f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80', rating: 4},
  {id: 3, name: 'Daisies', imageUrl: 'https://images.unsplash.com/photo-1607061868914-e38515be98cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1091&q=80', rating: 4},
  {id: 4, name: 'Sunflowers', imageUrl: 'https://images.unsplash.com/photo-1598459832065-1e43b2283799?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VuZmxvd2VyJTIwYm9xdWV0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60', rating: 5},
  {id: 5, name: 'Blue-Eyed-Susan', imageUrl: 'public/images/red-roses-by-bence-balla-schottner-ehGgVnHc-1Q-unsplash.jpg', rating: 5}

] 

    return (
        <Container>
        <h1>This is a flower Gallery</h1>
        <section className="flower-cards">
        {flowerList ? flowerList.map(flower => 
          <div>
              <p>{flower.name}</p> 
              <img src={flower.imageUrl} alt='photo of red roses' style={{width:"128px", height: "128px"}}></img>
          </div>
        ) 
        : <p className="no-data-message"> No Flowers Yet</p>
        }


        </section>
        <Button className={classes.root}>Hook</Button>
        <Button variant="contained" color="primary">Hook</Button>
      </Container>
      );
}
 
export default FlowerGallery;
// FlowerGalleryStyles