import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {product: [], productdata: [], isLoading: true};
  }

  componentDidMount() {   //  when loading

    this.setState({ isLoading: true})
    let num = 0;

    fetch('api/getproducts')
      .then(response => response.json())
      .then(data =>{
        const productsarray = data.products;
        productsarray.map((item) =>{
          num = num+1;
          item.id = num;
        })
        this.setState({ isLoading: false, product: productsarray, productdata: data.products})
      });

  }

  remove(name) {      // remove button

    fetch(`/api/updateproducts/${name}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      }).then(() => {
    });
    window.location.reload();

  }

  render() {      // frontend

    const {product, isLoading} = this.state;

    if (isLoading) {      // loading data
      return <p>Loading...</p>;
    }

    const productList = product.map((productitem) => {      // table body

      return <tr key={productitem.id}>
        <td style={{whiteSpace: 'nowrap'}}>{productitem.name}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="danger" onClick={() => this.remove(productitem.name)}>Delete</Button>
          </ButtonGroup>
        </td>
        <td></td>
      </tr>

    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <h3>Products List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Name</th>
                <th width="10%">Actions</th>
                <th width="70%"></th>
              </tr>
            </thead>
            <tbody>
            {productList}
            </tbody>
          </Table>
        </Container>
      </div>
    );

  }

}

export default Products;