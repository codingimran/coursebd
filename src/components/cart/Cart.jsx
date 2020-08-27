import React, { useState } from "react";
import "tachyons";
const Cart = (props) => {
  const item = props.enrollCount;
  //items prize
  let itemsPrize = item.reduce((prize, newPrize) => {
    const prizeCount = prize + newPrize.prize;
    return prizeCount;
  }, 0);
  //items prize with gift
  let gift = item.reduce((gift, newGift) => {
    const totalWithGift = gift + newGift.prize - 5;
    return totalWithGift;
  }, 0);
  // Total
  let total = gift;
  //check out alert
  function al() {
    var txt;
    var r = window.confirm("Are you sure?");
    if (r == true) {
      total = 0;
      alert("Thank You For Joining Our Course");
    } else {
      txt = "You pressed Cancel!";
    }
    console.log(txt);
  }
  return (
    <div className="tc">
      <h4 className="">Order Details</h4>
      <p>
        Items Enrolled <strong>{item.length}</strong>
      </p>
      <h5>
        Items: $<strong>{itemsPrize.toFixed(2)}</strong>
      </h5>
      <h6>
        Gift Code: <strong>Imran</strong>
      </h6>
      <h6>
        Total With Gift: <strong>${gift.toFixed(2)}</strong>
      </h6>
      <h3>
        Total: <strong>${total.toFixed(2)}</strong>
      </h3>
      <button className="btn btn-success grow" onClick={() => al()}>
        Check Out
      </button>
    </div>
  );
};

export default Cart;
