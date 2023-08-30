
import { useState } from 'react';
import Model from './Model';


function Models(props) {

  return (
    <div>
      <h1>Choose from these models: </h1>
      <div className="models">
      {props.models.map(course => <Model key={course.name} name={course.name}/>)
      }
        <p className="total"> Total: <span>{props.models.length}</span></p>
      </div>
    </div>
  );
}


export default Models;

