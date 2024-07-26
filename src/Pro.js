import React, { useState } from 'react';
function Ass2(){
  const [reviews, setReviews] = useState([
    { id: 1, reviewerName: 'Reviewer name', text: 'This product is good.' },
    { id: 2, reviewerName: 'Reviewer name', text: 'This product is not great.' },
  ]);
  const [newReview, setNewReview] = useState('');
  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };
  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([
        ...reviews,
        { id: reviews.length + 1, reviewerName: 'Reviewer name', text: newReview },
      ]);
      setNewReview('');
    }
  };
  return (
    <div className="container mt-5">
        <div className="card mb-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="image1.jpg" className="card-img" alt="Product" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
                <div className="price h4">₹500.00</div>
                <button className="btn btn-success mt-3">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Product specifications</h5>
            <p className="card-text">Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reviews</h5>
            <div className="input-group mb-3">
              <input type="text" placeholder="Type to review" className="form-control" value={newReview} onChange={handleReviewChange}/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={handleAddReview}>Add review</button>
              </div>
            </div>
            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review">
                  <strong>{review.reviewerName}</strong>
                  <p>{review.text}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};
export default Ass2;