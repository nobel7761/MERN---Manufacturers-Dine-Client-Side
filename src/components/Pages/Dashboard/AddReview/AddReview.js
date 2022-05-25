import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import "./AddReview.css";

const AddReview = () => {
  const [user] = useAuthState(auth)
  return (
    <div>














      <div className="pb-20 flex justify-center mt-5">
        <div className="card bg-orange-500 shadow-xl w-full">
          <div className="card-body">
            <h2 className="text-center font-bold text-4xl">ADD REVIEW</h2>
            <div className="">
              <form>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="product Name"
                    className="input input-bordered "
                    value={user.displayName}
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
                    type="number"
                    placeholder="Your Rating"
                    className="input input-bordered"
                    name="availableQuantity"
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
