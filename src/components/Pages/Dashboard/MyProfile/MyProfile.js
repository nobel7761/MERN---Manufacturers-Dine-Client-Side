import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../../firebase.init";
import useLoadingUserInfo from "../../../../Hooks/useLoadingUserInfo";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  // const [userInfo, setUserInfo] = useLoadingUserInfo(user?.email);
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    const url = `https://pure-atoll-42866.herokuapp.com/user/${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProfileInfo(data));
  }, [user, user?.email])

  const handleSubmit = (event) => {
    event.preventDefault();
    const address = event.target.address.value;
    const education = event.target.education.value;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;

    const updateInfo = {
      address: address?.length > 0 ? address : null,
      education: education?.length > 0 ? education : null,
      phone: phone?.length > 0 ? phone : null,
      linkedin: linkedin?.length > 0 ? linkedin : null,
    };

    if (address || education || phone || linkedin) {
      const url = `https://pure-atoll-42866.herokuapp.com/user/${user?.email}`;
      console.log(user?.email, updateInfo);
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
    }
    else {
      toast.error("Please Fill Up The Form For Updating Information")
    }

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
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <tbody>
            {/* email*/}
            <tr className="active">
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
              <td>{profileInfo?.address}</td>
            </tr>
            {/* education*/}
            <tr className="active">
              <td>
                <strong>Education: </strong>
              </td>
              <td>{profileInfo?.education}</td>
            </tr>
            {/* phone*/}
            <tr>
              <td>
                <strong>Phone: </strong>
              </td>
              <td>{profileInfo?.phone}</td>
            </tr>
            {/* linkedin*/}
            <tr className="active">
              <td>
                <strong>Linkedin Profile: </strong>
              </td>
              <td>
                <a
                  href={profileInfo?.linkedin}
                  target="_blank"
                  className="text-blue-700 text-sm underline"
                >
                  {profileInfo?.linkedin}
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
