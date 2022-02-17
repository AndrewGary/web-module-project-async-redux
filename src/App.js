import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import RandomCriminal from './components/RandomCriminal';
import * as actionCreators from './state/action-creators';
import { connect } from 'react-redux'

function App(props) {
  console.log('app props: ', props)
  useEffect(() => {
    props.fetchAllMostWanted();
  }, [])

  return (
    <div className="App">
      <Header />

      <RandomCriminal />
    </div>
  );
}

export default connect(state => state, actionCreators)(App);