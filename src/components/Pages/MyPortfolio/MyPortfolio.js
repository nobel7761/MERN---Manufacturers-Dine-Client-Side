import React from "react";
import "./MyPortfolio.css";
import Nobel from "../../../images/my-portfolio/nobel.png";

const MyPortfolio = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Nobel}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="devPhoto"
          />

          <div className="ml-12">
            <h1 className="text-5xl font-bold text-center">
              Md. Habibur Rahaman Nobel
            </h1>

            <div className="overflow-x-auto">
              <table className="table table-zebra w-full my-5">
                <tbody>
                  <tr>
                    <td>
                      <strong>Profession: </strong>
                    </td>
                    <td>Junior Full Stack Web Developer</td>
                    <td>
                      <strong>Company: </strong>
                    </td>
                    <td>Bit Software Solutions</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Email: </strong>
                    </td>
                    <td>habiburnobel@gmail.com</td>
                    <td>
                      <strong>Mobile: </strong>
                    </td>
                    <td>+88-01521320912</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Last Education: </strong>
                    </td>
                    <td>BSc in Computer Science and Engineering</td>
                    <td>
                      <strong>University: </strong>
                    </td>
                    <td>Daffodil International University</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Research Field: </strong>
                    </td>
                    <td>Natural Language Processing</td>
                    <td>
                      <strong>Publication: </strong>
                    </td>
                    <td>4 (All are scopus indexed)</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Frontend Skills: </strong>
                    </td>
                    <td>
                      HTML, CSS, Bootstrap, Tailwind CSS, React<br></br> React
                      Native, NextJS, Typescript<br></br> Material UI, Daisy UI
                    </td>
                    <td>
                      <strong>Backend Skills: </strong>
                    </td>
                    <td>
                      Node JS, Express Js, MongoDB, PostgreSQL<br></br> GraphQL
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Deployment Skills: </strong>
                    </td>
                    <td>Firebase, Netlify, Heroku</td>
                    <td>
                      <strong>Version Control Skills: </strong>
                    </td>
                    <td>Git</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <a
                href="https://electronics-warehouse-bf875.web.app/home"
                target="_blank"
              >
                <button className="btn btn-primary w-full my-3">
                  VIEW MY MERN PROJECT
                </button>
              </a>

              <a href="https://assignment-10-69530.web.app/" target="_blank">
                <button className="btn btn-primary w-full my-3">
                  VIEW MY REACT PROJECT
                </button>
              </a>

              <a
                href="https://airbnb-clone-by-nobel.netlify.app/"
                target="_blank"
              >
                <button className="btn btn-primary w-full my-3">
                  AIRBNB CLONE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
