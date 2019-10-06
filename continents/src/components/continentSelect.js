import React, { Component } from "react";
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import { ListGroup } from 'react-bootstrap';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

const GET_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;



class ContinentSelect extends Component {
	
	handleClick = code => {
		this.props.history.push('/continent', {
			code: code
		})
	}

	render() {
		return(
			<div className="select-container">
				<h1 className="select-header">Select Continent</h1>
				<Query query={GET_CONTINENTS} client={client}>
			        {({loading, error, data}) => {
			          if (loading) return <p>Loading...</p>;
			          if (error) return <p>{error.message}</p>;
			          return (
			          	<ListGroup className="continent-list">
		          			{data.continents.map((continent, index) => (
				                <ListGroup.Item 
				                	className={index} 
				                	key={continent.code} 
				                	value={continent.code}
				                	onClick={() => this.handleClick(continent.code)}
				                >
				                  {continent.name}
				                </ListGroup.Item>
		              		))}
			          	</ListGroup>
			          );
			        }}
	      		</Query>
			</div>
		);

	}
}
export default ContinentSelect;