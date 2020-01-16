import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import CreateIcon from '@material-ui/icons/Create';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{marginTop: 8 }}>
      {'© '}
      {new Date().getFullYear()}
      {' Karina Macancela'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  icons: {
    padding: 5,
  }
}));

const nav = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Projects', url: '/projects' },
  { name: 'Art', url: '/art' },
  { name: 'Blog', url: 'https://medium.com/@kmacancela' },
  { name: 'Contact', url: '/contact' },
]

const social = [
  { icon: GitHubIcon, url: 'https://github.com/kmacancela' },
  { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/kmacancela/' },
  { icon: CreateIcon, url: 'https://medium.com/@kmacancela'},
  { icon: TwitterIcon, url: 'https://twitter.com/coolkatwizard'},
]

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center">
          {social.map(network => (
            <Link className={classes.icons} href={network.url} key={network}>
                <network.icon />
            </Link>
          ))}
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" component="p" spacing={1}>
          {nav.map(navItem => (
            <Link className={classes.icons} href={navItem.url} key={navItem}>
              {navItem.name}
            </Link>
          ))}
        </Typography>

        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
