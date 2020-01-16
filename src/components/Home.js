import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'

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
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    imageText: 'Image Text',
    url: 'https://medium.com/@kmacancela/the-fresh-developer-principles-b0dd9e3978cc'
  },
  {
    title: 'Quick Introduction on using Stripe',
    date: 'Nov 25, 2019',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    imageText: 'Image Text',
    url: 'https://medium.com/@kmacancela/quick-introduction-on-using-stripe-api-with-react-and-node-js-ba3c181a463b'
  },
];

function Home() {
  return (
    <React.Fragment>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map(post => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </main>
    </React.Fragment>
  )
}

export default Home
