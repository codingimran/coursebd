import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Course from "./components/course/Course";
import Cart from "./components/cart/Cart";
import FakeData from "./components/fakeData/FakeData";

function App() {
  const langInfo = FakeData();
  const [enrollItem, setEnrollItem] = useState([]);
  // enroll btn
  function enrollHandler(props) {
    const item = [...enrollItem, props];
    setEnrollItem(item);
  }
  return (
    <div className="">
      {/* Header Section Start*/}
      <Header />
      {/* Header Section End */}
      {/* Course Section Start*/}
      <div className="">
        <h4 className="text-center garamond f1">Our Courses</h4>
        {/* <hr /> */}
      </div>
      <div className="">
        <div className="row">
          <div className="col-8 flex flex-wrap justify-center-m">
            {langInfo.map((langData, i) => {
              const { Cname, Cdetails, prize, img } = langData;
              return (
                <Course
                  name={Cname}
                  description={Cdetails}
                  prize={prize}
                  img={img}
                  enrollHandler={enrollHandler}
                  key={i}
                ></Course>
              );
            })}
          </div>
          <div className="col-4 flex flex-column justify-start-m">
            <Cart enrollCount={enrollItem}></Cart>
          </div>
        </div>
      </div>
      {/* Course Section End*/}
      {/* <hr className="mb0" /> */}
      {/* Footer Section Start */}
      <h6 className="tc bodoni bg-light-gray pa2 mb0 f3">
        &#xA9;Imran Khan <span className="code i">2020</span>
      </h6>
      {/* Footer Section End */}
    </div>
  );
}

export default App;
