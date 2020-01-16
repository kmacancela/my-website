import React from 'react';
import { useRoutes } from "hookrouter";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { routes } from "./Router";
import Header from "./components/Header";
import Footer from './components/Footer'
import NotFound from "./components/NotFound";

export default function App() {
  const route = useRoutes(routes);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Container>{route || <NotFound />}</Container>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
