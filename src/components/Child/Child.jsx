import React, { Component } from 'react'

export default class Child extends Component {
  render() {

    let x = this.props.name;
    return (

      <div className='border border-2  container'>
            <p className='text-red text-center fw-1 fw-bolder'>
                Hello Iam Child Component 
            </p>
            <p className='text-danger fw-bolder fs-1 p-4 border border-danger' > Hello  {x} </p>
        </div>
    )
  }
}
