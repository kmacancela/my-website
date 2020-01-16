import React from 'react';
import Header from './Header'
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost'
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost'

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Learn more about Karina Macancela...',
  description:
    "Check out what Software Engineer Karina Macancela is working on, her upcoming application releases, published tech blogs, and more!",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'The ‘Fresh Developer’ Principles',
    date: 'Sep 25, 2019',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    url: 'https://medium.com/@kmacancela/the-fresh-developer-principles-b0dd9e3978cc'
  },
  {
    title: 'Quick Introduction on using Stripe API with React and Node.js',
    date: 'Nov 25, 2019',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    url: 'https://medium.com/@kmacancela/quick-introduction-on-using-stripe-api-with-react-and-node-js-ba3c181a463b'
  },
];

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map(post => (
                <FeaturedPost key={post.title} post={post} />
              ))}
          </Grid>
          </main>
      </Container>
    </React.Fragment>
  )
}

export default Home
