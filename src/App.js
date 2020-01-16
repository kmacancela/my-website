import React from 'react';
import {withRouter} from 'react-router-dom'
import Header from './components/Header'
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './components/MainFeaturedPost'

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
  title: 'Learn more about Karina Macancela...',
  description:
    "Check out what Software Engineer Karina Macancela is working on, her upcoming application releases, published tech blogs, and more!",
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
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
          </main>
      </Container>
    </React.Fragment>
  );
}

export default withRouter(App)
