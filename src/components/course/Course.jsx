import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
const Course = (props) => {
  const enrollHandlerData = props;
  console.log(props);
  // console.log(enrollHandlerData);
  return (
    <div className="ma2">
      {/* Course area */}
      {/* Bootstrap card */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top grow" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title calisto">{props.name}</h5>
          <p className="card-text bodoni">{props.description}</p>
          <div className="flex justify-between">
            <h3>${props.prize}</h3>
            <button
              type="button"
              className="btn btn-primary grow"
              onClick={() => props.enrollHandler(enrollHandlerData)}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      {/* Bootstrap card */}
    </div>
  );
};

export default Course;
