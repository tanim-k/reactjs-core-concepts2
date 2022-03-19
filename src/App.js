import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
      {/* clear the div  */}
      <p> at first clear this div </p>
      {/* re-write the fn tags  */}
      

    </div>
  );
}
// amonymous function : () => {something}
function ExternalUsers () {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>external Users:</h2>
      <h2>external Users: {users.length}</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
};
function User(props) {
  return (
    <div style={{border:'2px solid red', margin:'20px'}}>
      <h3>name:  {props.name}</h3>
      <p>email: {props.email}</p>
    </div>
  )
};
function Counter () {
  const [count, setCount] = useState(5);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  /* const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  } */
  return (
    <div className="c">
      <h1>count: {count} </h1>
      <button onClick={increaseCount}>Increase</button><hr />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
// HERE PASTE::
/* const products = [
  {name:'laptop', price:'342000'},
  {name:'bag', price:'100000'},
  {name:'watch', price:'1000'},
  {name:'car', price:'108778000'},
  {name:'yacht', price:'344534'},
  {name:'ferrari', price:'1'},
]
<Product name="laptop" price="100000"></Product>
      <Product name="phone" price="10000"></Product>
      <Product name="bag" price="1000"></Product>
      <Product name="dslr" price="1000090"></Product>

      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      } */
// making more fn from the given one 
function Product(props) {
  return (
    <div className="product">
      <h2>name: {props.name}</h2>
      <p>price: {props.price}</p>
    </div>
  );
}

export default App;
