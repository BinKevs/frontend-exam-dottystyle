import whitsunday_logo from "../static/whitsunday_logo.png";
import header_play_img from "../static/header_play_img.png";
import download_board from "../static/download_board.png";
import navbar from "../static/Navbar.png";
import React, { useState } from "react";
import close from "../static/close.png";
export default function Header_Section() {
  const [Nav, setNav] = useState(false);
  return (
    <>
      {!Nav ? (
        <div className="fixed hidden w-full bg-header-bg-color lg:flex items-center">
          <div className=" text-white font-open_sans flex space-x-5 items-center py-3 w-3/4 justify-center">
            <img src={header_play_img} alt="" />
            <div className=" border-r-2 pr-3">Background & Challenge</div>
            <div className=" border-r-2 pr-3">Solution</div>
            <div className=" border-r-2 pr-3">Results & Effectiveness</div>
            <div>Slideshow</div>
          </div>

          <div className="">
            <img src={download_board} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
      {!Nav ? (
        <div className="lg:hidden  fixed md:top-3 top-5 right-3  lg:p-5 rounded-3xl z-50">
          <img
            src={navbar}
            alt=""
            onClick={() => setNav(true)}
            className=" h-8 w-10 "
          />
        </div>
      ) : (
        ""
      )}
      {Nav ? (
        <div className="xl:hidden  fixed top-3 right-3  p-5 rounded-xl z-30">
          <img
            src={close}
            alt=""
            className="w-12 "
            onClick={() => setNav(false)}
          />
        </div>
      ) : (
        ""
      )}
      {Nav ? (
        <div className="fixed h-screen w-full bg-black z-20 flex">
          <div className="m-auto space-y-10">
            <div className="flex flex-col  z-20 text-white text-lg font-black space-y-10 text-center items-center">
              <div>
                <img src={download_board} alt="" />
              </div>
              <div>Background & Challenge</div>
              <div>Solution</div>
              <div>Results & Effectiveness</div>
              <div>Slideshow</div>
              <div>
                <img src={header_play_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
