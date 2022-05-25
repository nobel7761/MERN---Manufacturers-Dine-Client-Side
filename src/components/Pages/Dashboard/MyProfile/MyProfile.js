import React from "react";
import "./MyProfile.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../../firebase.init";
import { toast } from "react-toastify";
import useLoadingUserInfo from "../../../../Hooks/useLoadingUserInfo";
import useLoadSingleUser from "../../../../Hooks/useLoadSingleUser";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [singleUser, setUser] = useLoadingUserInfo(user?.email);
  // console.log(singleUser);

  const [user1, setUser1] = useLoadSingleUser(user?.email);

  const handleSubmit = (event) => {
    event.preventDefault();
    const address = event.target.address.value;
    const education = event.target.education.value;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;

    // console.log(address, education, phone, linkedin);

    const updateInfo = {
      address: address,
      education: education,
      phone: phone,
      linkedin: linkedin,
    };
    // console.log(updateInfo);

    const url = `http://localhost:5000/user/${singleUser?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
        toast("Information Updated!!!");
      });

    event.target.reset();
  };

  // console.log("updated user", user);
  return (
    <div className="container">
      <h1 className="text-center text-3xl">
        Hello{" "}
        <span className="text-[#f97316] font-extrabold">
          {user?.displayName}
        </span>
      </h1>

      {/* table */}
      <div class="overflow-x-auto mt-10">
        <table class="table w-full">
          <tbody>
            {/* email*/}
            <tr class="active">
              <td>
                <strong>Email: </strong>
              </td>
              <td>{user?.email}</td>
            </tr>
            {/* address*/}
            <tr>
              <td>
                <strong>Address: </strong>
              </td>
              <td>{user1?.address}</td>
            </tr>
            {/* education*/}
            <tr class="active">
              <td>
                <strong>Education: </strong>
              </td>
              <td>{user1?.education}</td>
            </tr>
            {/* phone*/}
            <tr>
              <td>
                <strong>Phone: </strong>
              </td>
              <td>{user1?.phone}</td>
            </tr>
            {/* linkedin*/}
            <tr class="active">
              <td>
                <strong>Linkedin Profile: </strong>
              </td>
              <td>
                <a
                  href={user1?.linkedin}
                  target="_blank"
                  className="text-blue-700 text-sm underline"
                >
                  {user1?.linkedin}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* form */}
      <div className="pb-20 flex justify-center mt-10">
        <div className="card bg-orange-500 shadow-xl w-full">
          <div className="card-body">
            <h2 className="text-center font-bold text-4xl">Update Details</h2>
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    type="textarea"
                    className="input input-bordered "
                    placeholder="Your Address"
                    name="address"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Education</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered "
                    placeholder="Subject, University"
                    name="education"
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Contact Number</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered "
                    placeholder="Your Phone Number"
                    name="phone"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Linkedin Profile</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered "
                    placeholder="Linkedin Profile Link"
                    name="linkedin"
                  />
                </div>

                <div className="form-control">
                  <button className="btn btn-primary mt-8">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
