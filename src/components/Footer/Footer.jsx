import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <h1>Contact Us:</h1>
      <p>Email: <a href='mailto:info@theglobeapp.com'>info@theglobeapp.com</a></p>
      <p>Facebook: <a href="https://www.facebook.com/ToDoList/">www.facebook.com/ToDoList</a></p>
      <p>Mobile: <a href='tel:078-3456923'>078-3456923</a></p>
      <p>Copyright &copy; ToDOList {new Date().getFullYear()} </p>
    </div>
  );
}
