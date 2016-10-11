import React from 'react';
import Sidebar from './Sidebar'

export default class App extends React.Component {

  render() {
    return (
      <div className="app">
          {this.props.children}
          <Sidebar />
      </div>
    );
  }
}