// import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// // or
// import { Grid } from '@material-ui/core';
 import FlowerGallery from './components/FlowerGallery'
 import FlowersContainer from './Containers/FlowersContainer'
 

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    // height: '900px',
    border: '5px dotted green',
    // padding: '50px'
    width: '2450px',
    margin: 'auto 0'
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Container>
      {/* <FlowersContainer/> */}
        <FlowerGallery/>
      </Container>
    </Grid>
  );
}

export default App;
