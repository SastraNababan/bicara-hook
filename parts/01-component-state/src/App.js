/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Layout from './Layout'
import SubscribeBoxClass from './SubscribeBox.class'
import SubscribeBoxFunc from './SubscribeBox.func'

function App() {
  return (
    <Layout title="React Hook #1 - Component State">
      <SubscribeBoxClass />
      {/* <SubscribeBoxFunc/> */}
    </Layout>
  );
}

export default App;