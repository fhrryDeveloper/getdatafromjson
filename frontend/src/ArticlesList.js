import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import {Container, Table } from 'reactstrap';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: [], isLoading: true};
  }

  componentDidMount() {   //  when loading
    this.setState({isLoading: true});
    
    fetch('api/articles')
      .then(response => response.json())
      .then(data =>{
        this.setState({isLoading: false, articles: data.inventory});
      });
  }

  render() {      // frontend

    const {articles, isLoading} = this.state;

    if (isLoading) {      // loading data
      return <p>Loading...</p>;
    }

    const articleList = articles.map(article => {      // table body
      return <tr key={article.art_id}>
        <td>{article.name}</td>
        <td>{article.stock}</td>
        <td></td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <h3>Articles List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Name</th>
                <th width="20%">Stock</th>
                <th width="60%"></th>
              </tr>
            </thead>
            <tbody>
            {articleList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Articles;