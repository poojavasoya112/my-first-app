import React from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { products } from '../../consts/Products';

function Home() {

  // console.log(product,"product");

  const navigate = useNavigate();

  const addEmployee = () => {
    navigate("/AddEmployee")
  }
  const viewEmployee = () => {
    navigate("/ViewEmploye")
  }

  const viewProducts = () => {
    navigate("/viewProducts")
  }
  return (
    <div>
      <Container>
        <h1>Home</h1>
        <button className='text-bg-light py-1 px-3' onClick={() => addEmployee()}>Add Employee</button>
        <button className='text-bg-light ms-3 py-1 px-3' onClick={() => viewEmployee()}>View Employee Data</button>
        <button className='text-bg-dark ms-3 py-1 px-3' onClick={() => viewProducts()}>View Products</button>
      </Container>
    </div>
  )
}

export default Home;