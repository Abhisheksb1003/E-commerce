import React, { useState } from 'react';

const Form = (props) => {
  const [pid, setpid] = useState('');
  const [sprice, setsprice] = useState('');
  const [pname, setpname] = useState('');
  const [category, setcategory] = useState('');

  function pidChangeHandler(event) {
    setpid(event.target.value);
  }

  function spriceChangeHandler(event) {
    setsprice(event.target.value);
  }

  function nameChangeHandler(event) {
    setpname(event.target.value);
  }

  function categoryChangeHandler(event) {
    setcategory(event.target.value);
  }

  function dataonSubmitHandler(e) {
    e.preventDefault();
    props.onAddItem(pid, sprice, pname, category);
  }

  return (
    <div>
      <form onSubmit={dataonSubmitHandler}>
        <label>Product Id:</label>
        <input type="number" id="pro" onChange={pidChangeHandler}></input>
        <label>Selling Price:</label>
        <input type="number" id="sell" onChange={spriceChangeHandler}></input>
        <label>Product Name</label>
        <input type="text" id="name" onChange={nameChangeHandler}></input>
        <label>Choose Category:</label>
        <select name="category" id="cat" onChange={categoryChangeHandler}>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="skincare">skincare</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Add Product"></input>
      </form>
    </div>
  );
};

export default Form;
