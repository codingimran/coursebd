import React from "react";

const FakeData = () => {
  class Data {
    constructor(Cname, prize) {
      this.Cname = Cname;
      this.Cdetails =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolore, placeat.Optio modi eius aperiam, voluptas natus corporis saepe quod nisi.";
      this.prize = prize;
      this.img =
        "https://cdn01.alison-static.net/courses/1678/alison_courseware_intro_1678.jpg";
    }
  }

  var languages = [
    new Data("Javascript", 99.99),
    new Data("Java", 90.99),
    new Data("C#", 97.99),
    new Data("PHP", 89.99),
    new Data("C++", 79.99),
    new Data("Python", 199.99),
    new Data("C", 59.99),
    new Data("SQL", 79.99),
    new Data("Ruby", 49.99),
    new Data("Objective-C", 99.99),
    new Data("Swift", 149.99),
    new Data("Perl", 229.99),
  ];

  return languages;
};

export default FakeData;
