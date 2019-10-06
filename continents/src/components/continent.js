import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card, Table } from 'react-bootstrap';

const GET_CONTINENT_DETAILS = gql`
  query($code: String!) {
    continent(code: $code) {
	     name
		 countries {
		 	code
			name
			native
			phone
			currency
			emoji
	    }
    }
  }
`;
 
function Continent(props){
	let code;
	if(!props.history.location.state) {
		code = "AS"; 
	} else {
		code = props.history.location.state.code;
	}

	const { data } = useQuery(GET_CONTINENT_DETAILS, {
		variables: { code },
	});

	return(
		<div>
			{ data &&
				<div className="container">
					<h1 className="continent">{data.continent.name}</h1>
					<div className="countries-container">
						{data.continent.countries.map((country) => {
							return(<Card key={country.code} style={{ width: '18rem' }}>
								<Card.Body>
									<Card.Title>{country.name}</Card.Title>
									<Table className="country-details">
										<tbody>
											<tr>
												<td>Native</td>
												<td className="value">{country.native}</td>
											</tr>
											<tr>
												<td>Phone</td>
												<td className="value">{country.phone.split(",")[0]}</td>
											</tr>
											<tr>
												<td>Currency</td>
												<td className="value">{country.currency.split(",")[0]}</td>
											</tr>
											<tr>
												<td>Emoji</td>
												<td className="value">{country.emoji}</td>
											</tr>
										</tbody>
									</Table>
								</Card.Body>
							</Card>)
						})}
					</div>
				</div>
			}
		</div>
		
	);
} 

export default Continent