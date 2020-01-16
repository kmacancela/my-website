import React from 'react';
import { useRoutes } from "hookrouter";
import { Container } from "@material-ui/core";
import { routes } from "./Router";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

export default function App() {
  const route = useRoutes(routes);
  return (
    <React.Fragment>
      <Header />
      <Container>{route || <NotFound />}</Container>
    </React.Fragment>
  );
}
