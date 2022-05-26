import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import "./AddReview.css";

const AddReview = () => {
  const [user] = useAuthState(auth)



  const handleSubmit = event => {
    event.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const review = event.target.description.value;
    const rating = event.target.rating.value;
    const avatar = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png';

    event.target.reset();

    const userReview = {
      name: name,
      email: email,
      review: review,
      rating: rating,
      avatar: avatar,
    }

    console.log(userReview);


    fetch('https://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userReview)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast("Review Submitted Successfully!");
      })

  }


  return (
    <div>
      <div className="pb-20 flex justify-center mt-5">
        <div className="card bg-orange-500 shadow-xl w-full">
          <div className="card-body">
            <h2 className="text-center font-bold text-4xl">ADD REVIEW</h2>
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="product Name"
                    className="input input-bordered "
                    value={user?.displayName}
                    name="username"
                    disabled />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Your Review</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    name="description"
                    placeholder="Type Your Review Here..."
                    required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="range"
                    placeholder="Your Rating"
                    className=""
                    name="rating"
                    min={1}
                    max={5}
                    required />
                </div>

                <div className="form-control">
                  <button className="btn btn-primary mt-8">ADD REVIEW</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
