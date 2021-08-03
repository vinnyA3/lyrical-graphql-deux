import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import SongList from './components/SongList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Lyrical</h1>
        <SongList />
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
