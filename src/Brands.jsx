import { useState } from 'react';
import Brand from './Brand';


function Brands(props) {

  return (
    <div>
      <h1>Choose from these brands: </h1>
      <div className="brands">
      {props.brands.map(course => <Brand key={course.name} name={course.name} handleBrandClick={props.handleBrandClick} />)
      }
        <p className="total"> Total: <span>{props.brands.length}</span></p>
      </div>
    </div>
  );
}


export default Brands;

