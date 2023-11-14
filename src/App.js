import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import Display from './Components/Display';

function App() {
  const [items, setItems] = useState([]);

  // useEffect to load data from local storage when the component mounts
  useEffect(() => {
    const storedItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      storedItems.push(item);
    }
    setItems(storedItems);
  }, []);

  const onAddItem = (pid, sprice, pname, category) => {
    const newItem = {
      pid,
      sprice,
      pname,
      category,
    };

    setItems((prevItems) => [...prevItems, newItem]);

    const itemObjStringify = JSON.stringify(newItem);
    localStorage.setItem(pid, itemObjStringify);
  };

  const onDeleteItem = (pid) => {
    const updatedItems = items.filter((item) => item.pid !== pid);
    setItems(updatedItems);
    localStorage.removeItem(pid);
  };

  return (
    <div>
      <Form onAddItem={onAddItem} />
      <Display items={items} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;
