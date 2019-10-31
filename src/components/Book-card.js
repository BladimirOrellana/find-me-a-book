import React from "react";
import {Link} from 'react-router-dom';
const BookCard = props => {
    console.log(props.book)
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="book-card">
      <div className="book-card-side book-card-side-front">
      <div class="card bg-dark text-white">
  <img src={props.book.book_image} class="card-img" alt="..."></img>
 </div>
      </div>
      <div className="book-card-side book-card-side-back">
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">{props.book.title}</h5>
   <p>{props.book.description}</p>
    <Link target="_blank" to={props.book.amazon_product_url}  className="btn btn-primary">Read More</Link>
   
   
  </div>
</div>
     
      </div>
      </div>
    </div>
  );
};
export default BookCard;
