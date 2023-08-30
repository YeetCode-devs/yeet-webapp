import { useState } from 'react';


function Brand(props) {
  const [active, setActive] = useState(false);

  function brandClicked() {
    props.handleBrandClick(props.name);
  }
  return (
    <div className="brand">
      <p className={active? "active" : ""} onClick={brandClicked}>{props.name} </p>
    </div>
  );
}

export default Brand
