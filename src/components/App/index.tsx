import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from 'components/Search';
import { apiGraphQl } from 'api-graphql';
import DetailsPage from 'components/DetailsPage';

const App: React.FC = () => {
  return (
    <ApolloProvider client={apiGraphQl}>
      <Router>
        <Route exact path="/" component={Search} />
        <Route path="/users/:login" component={DetailsPage} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
