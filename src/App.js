import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withRouter} from 'react-router-dom'
import Header from './components/Header'
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'About', url: '#' },
  { title: 'Projects', url: '#' },
  { title: 'Art', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Contact', url: '#' },
];

const mainFeaturedPost = {
  title: 'Learn more about what Karina Macancela is working on!',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
      </Container>
    </React.Fragment>
  );
}

export default withRouter(App)
