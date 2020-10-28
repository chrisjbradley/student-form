import React, { Component } from 'react';

import {sendError} from '../error-config'; // import your own error config file

export default class ErrorBoundary extends Component {

  state = {
        hasError: false
      }
      componentDidCatch(){
        this.setState({ hasError: true })
      }

    render (){
      if(this.state.hasError){
        return <h2>Something went wrong!</h2>
      }

      return this.props.children;
    }
}