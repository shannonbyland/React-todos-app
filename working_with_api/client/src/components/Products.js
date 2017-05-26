import React, { Component } from 'react';
import { Header, Button, Table } from 'semantic-ui-react';

class Products extends Component {
  state = { products: [] };
  baseUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1';

  getProducts = () => {
    fetch(`${this.baseUrl}/products`)
      .then( res => res.json() )
      .then( products => this.setState({ products }));
  }

  products = () => {
    // be responsible for rendering an array of product UI
    return this.state.products.map( product => {
      return(

      )
    });
  }

  render() {
    return(
      <div>
        <Header as='h3' textAlign='center'>Products</Header>
        <Button basic color='blue' fluid onClick={ this.getProducts }>
          Get Products
        </Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.products() }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Products;
