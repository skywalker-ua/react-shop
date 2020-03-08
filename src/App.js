import React from 'react';
import './App.css';
import Layout from './containers/Layout'
import ProductCard from './components/ProductCard'
import data from './constants/products.constants.json'

import { connect } from 'react-redux'

const App = (props) => {
  return(
      <Layout>
        <ProductCard status={props.stat} filter={props.filterText} products={data} />
      </Layout>
  );
}

const mapStateToProps = state => ({
  filterText: state.filterText,
  stat: state.filterByPrice
})

export default connect(mapStateToProps, null)(App);
