import React from 'react';
import './App.css';
import Layout from './containers/Layout'
import ProductCard from './components/ProductCard'
import data from './constants/products.constants.json'

import { connect } from 'react-redux'

const App = (props) => {
  return(
      <Layout>
        <ProductCard filter={props.filterText} products={data} />
      </Layout>
  );
}

const mapStateToProps = state => ({
  filterText: state.filterText
})

export default connect(mapStateToProps, null)(App);
