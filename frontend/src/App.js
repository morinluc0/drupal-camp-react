import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";
import ArticleTeaser from './ArticleTeaser';

const client = new ApolloClient({
  uri: "http://localhost:8081/graphql"
});


const ArticlesView = () => (
  <Query
    query={gql`
      {
        nodeQuery {
          entities {
            ...on NodeArticle {
              nid
              title
              body {
                value
              }
              uid {
                entity {
                  name
                  entityUrl {
                    path
                  }
                }
              }
              placeholderComment{
                commentName
                commentEmail
                commentBody
                id
              }
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return `Error: ${error.message}`;

      console.log(data);
      return (
        <ul>
          {data.nodeQuery.entities.map(article => <li key={article.nid}><ArticleTeaser article={article} /></li>)}
        </ul>
      )
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-body">
            <ArticlesView />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
