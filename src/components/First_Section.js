import whitsunday_logo from "../static/whitsunday_logo.png";
import play_button from "../static/play_button.png";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import example from "../static/example.mp4";

class First_Section extends React.Component {
  state = {
    ytShow: false,
  };
  handleYtShow = (e) => {
    e.preventDefault();
    this.setState({
      ytShow: !this.state.ytShow,
    });
  };
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
  handleScroll = (e) => {
    var T1 = document.getElementById("test1").offsetTop;
    var TH1 = document.getElementById("test1").offsetHeight;

    var T2 = document.getElementById("test2").offsetTop;
    var TH2 = document.getElementById("test2").offsetHeight;

    var T3 = document.getElementById("test3").offsetTop;
    var TH3 = document.getElementById("test3").offsetHeight;

    var T4 = document.getElementById("test4").offsetTop;
    var TH4 = document.getElementById("test4").offsetHeight;

    var wH = window.innerHeight;
    if (parseInt(window.pageYOffset) >= parseInt(T1 + TH1 - wH)) {
      document.getElementById("nav3").classList.remove("active");
      document.getElementById("nav2").classList.remove("active");
      document.getElementById("nav4").classList.remove("active");

      document.getElementById("nav2").classList.add("inactive_link");
      document.getElementById("nav3").classList.add("inactive_link");
      document.getElementById("nav4").classList.add("inactive_link");
      document.getElementById("nav1").classList.remove("inactive_link");
      document.getElementById("nav1").classList.add("active");
    }
    if (parseInt(window.pageYOffset) >= parseInt(T2 + TH2 - wH)) {
      document.getElementById("nav1").classList.remove("active");
      document.getElementById("nav3").classList.remove("active");
      document.getElementById("nav4").classList.remove("active");
      document.getElementById("nav1").classList.add("inactive_link");

      document.getElementById("nav3").classList.add("inactive_link");
      document.getElementById("nav4").classList.add("inactive_link");
      document.getElementById("nav2").classList.remove("inactive_link");
      document.getElementById("nav2").classList.add("active");
    }
    if (parseInt(window.pageYOffset) >= parseInt(T3 + TH3 - wH)) {
      document.getElementById("nav1").classList.remove("active");
      document.getElementById("nav2").classList.remove("active");
      document.getElementById("nav4").classList.remove("active");
      document.getElementById("nav1").classList.add("inactive_link");
      document.getElementById("nav2").classList.add("inactive_link");

      document.getElementById("nav4").classList.add("inactive_link");
      document.getElementById("nav3").classList.remove("inactive_link");
      document.getElementById("nav3").classList.add("active");
    }
    if (parseInt(window.pageYOffset) >= parseInt(T4 + TH4 - wH)) {
      document.getElementById("nav1").classList.remove("active");
      document.getElementById("nav2").classList.remove("active");
      document.getElementById("nav3").classList.remove("active");

      document.getElementById("nav1").classList.add("inactive_link");
      document.getElementById("nav2").classList.add("inactive_link");
      document.getElementById("nav3").classList.add("inactive_link");
      document.getElementById("nav4").classList.remove("inactive_link");
      document.getElementById("nav4").classList.add("active");
    }
  };

  handleTest1 = (e) => {
    document.getElementById("nav3").classList.remove("active");
    document.getElementById("nav2").classList.remove("active");
    document.getElementById("nav4").classList.remove("active");

    document.getElementById("nav2").classList.add("inactive_link");
    document.getElementById("nav3").classList.add("inactive_link");
    document.getElementById("nav4").classList.add("inactive_link");
    document.getElementById("nav1").classList.remove("inactive_link");
    document.getElementById("nav1").classList.add("active");
    window.location.hash = "#test1";
  };
  handleTest2 = (e) => {
    document.getElementById("nav1").classList.remove("active");
    document.getElementById("nav3").classList.remove("active");
    document.getElementById("nav4").classList.remove("active");
    document.getElementById("nav1").classList.add("inactive_link");

    document.getElementById("nav3").classList.add("inactive_link");
    document.getElementById("nav4").classList.add("inactive_link");
    document.getElementById("nav2").classList.remove("inactive_link");
    document.getElementById("nav2").classList.add("active");
    window.location.hash = "#test2";
  };
  handleTest3 = (e) => {
    document.getElementById("nav1").classList.remove("active");
    document.getElementById("nav2").classList.remove("active");
    document.getElementById("nav4").classList.remove("active");
    document.getElementById("nav1").classList.add("inactive_link");
    document.getElementById("nav2").classList.add("inactive_link");

    document.getElementById("nav4").classList.add("inactive_link");
    document.getElementById("nav3").classList.remove("inactive_link");
    document.getElementById("nav3").classList.add("active");

    window.location.hash = "#test3";
  };
  handleTest4 = (e) => {
    document.getElementById("nav1").classList.remove("active");
    document.getElementById("nav2").classList.remove("active");
    document.getElementById("nav3").classList.remove("active");

    document.getElementById("nav1").classList.add("inactive_link");
    document.getElementById("nav2").classList.add("inactive_link");
    document.getElementById("nav3").classList.add("inactive_link");
    document.getElementById("nav4").classList.remove("inactive_link");
    document.getElementById("nav4").classList.add("active");

    window.location.hash = "#test4";
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("keydown", this.escFunction, false);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("keydown", this.escFunction, false);
  }

  escFunction(event) {
    if (event.key === "Escape") {
      this.setState({
        ytShow: !this.state.ytShow,
      });
    }
  }

  render() {
    return (
      <div name="test1" id="test1" className=" h-screen  flex">
        <div className="space-y-10 fixed top-1/2 right-10 flex flex-col">
          {" "}
          <div onClick={this.handleTest1} className="active" id="nav1">
            {" "}
          </div>
          <div onClick={this.handleTest2} className="inactive_link" id="nav2">
            {" "}
          </div>
          <div onClick={this.handleTest3} className="inactive_link" id="nav3">
            {" "}
          </div>
          <div
            onClick={this.handleTest4}
            className="inactive_link"
            id="nav4"
          ></div>
        </div>

        <div className="flex xl:flex-row flex-col xl:mx-0 mx-auto lg:m-0 m-auto items-center">
          <img src={whitsunday_logo} className="border-" alt="" />
          <div className=" xl:-mt-0 md:-mt-36 -mt-0">
            <img
              onClick={this.handleYtShow}
              src={play_button}
              className="md:w-auto w-14"
              alt=""
            />
          </div>
          <div
            className={`fixed w-full bottom-0 h-screen ${
              this.state.ytShow ? "" : "hidden"
            }`}
          >
            <ReactPlayer
              width="100%"
              height="90%"
              playing={true}
              controls={true}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <div className="bg-white text-6xl font-open_sans text-center w-full py-5">
              Press "Esc" To Exit Video.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default First_Section;
