import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, withApollo} from "react-apollo";

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

const AppWithClient = withApollo(App);

ReactDOM.render(
	<ApolloProvider client={client}>
	      <AppWithClient />
  	</ApolloProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
