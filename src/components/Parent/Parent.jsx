import React, { Component } from 'react'
import Child from '../Child/Child'


export default class Parent extends Component {
 
    state = {
        parentName: " Iam Your Parent",
    }
    render() {
    
    return (
      <div className='p-4 border border-success container'> 
        <p className='text-center text-warning fw-bolder  fst-italic bg-danger p-4'>Welcome In Parent Component</p>    
        <Child  name={this.state.parentName} />
      </div>
    )
  }
}
