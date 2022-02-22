import whitsunday_logo from "../static/whitsunday_logo.png";
import Social_img from "../static/Social_img.png";
import radio_img from "../static/radio_img.png";
import video_img from "../static/video_img.png";
import PR_img from "../static/PR_img.png";
import Photo_img from "../static/Photo_img.png";
import React, { useState } from "react";

export default function Fourth_Section() {
  const [Video, setVideo] = useState(false);
  const [Photography, setPhotography] = useState(true);
  const [Social, setSocial] = useState(false);
  const [PR, setPR] = useState(false);
  const [Radio, setRadio] = useState(false);
  const handleVideo = () => {
    setVideo(true);
    setPhotography(false);
    setSocial(false);
    setPR(false);
    setRadio(false);
  };

  const handlePhotography = () => {
    setVideo(false);
    setPhotography(true);
    setSocial(false);
    setPR(false);
    setRadio(false);
  };
  const handleSocial = () => {
    setVideo(false);
    setPhotography(false);
    setSocial(true);
    setPR(false);
    setRadio(false);
  };
  const handlePR = () => {
    setVideo(false);
    setPhotography(false);
    setSocial(false);
    setPR(true);
    setRadio(false);
  };
  const handleRadio = () => {
    setVideo(false);
    setPhotography(false);
    setSocial(false);
    setPR(false);
    setRadio(true);
  };
  return (
    <div
      name="test4"
      id="test4"
      className=" bg-third-bg-color bg-cover bg-no-repeat lg:h-screen h-full lg:py-0 py-24 flex justify-center items-center"
    >
      <div>
        <div className="text-white text-lg flex lg:flex-row flex-col  lg:space-x-10 space-x-0 text-center justify-center py-10 lg:w-auto w-1/4 lg:mx-0 mx-auto">
          <div
            className={`hover:bg-hover-color rounded-2xl p-2 ${
              Video ? "bg-hover-color" : ""
            } `}
            onClick={handleVideo}
          >
            Video
          </div>
          <div
            className={`hover:bg-hover-color rounded-2xl p-2 ${
              Photography ? "bg-hover-color" : ""
            } `}
            onClick={handlePhotography}
          >
            Photography
          </div>
          <div
            className={`hover:bg-hover-color rounded-2xl p-2 ${
              Social ? "bg-hover-color" : ""
            } `}
            onClick={handleSocial}
          >
            Social
          </div>
          <div
            className={`hover:bg-hover-color rounded-2xl p-2 ${
              PR ? "bg-hover-color" : ""
            } `}
            onClick={handlePR}
          >
            PR
          </div>
          <div
            className={`hover:bg-hover-color rounded-2xl p-2 ${
              Radio ? "bg-hover-color" : ""
            } `}
            onClick={handleRadio}
          >
            Radio
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center lg:space-x-10 space-x-0 lg:mx-0 mx-auto items-center">
          <div>
            <img
              src={Social_img}
              className={`rounded-2xl ${Social ? "" : "hidden"} `}
              alt=""
            />
            <img
              src={radio_img}
              className={`rounded-2xl w-96 ${Radio ? "" : "hidden"} `}
              alt=""
            />
            <img
              src={video_img}
              className={`rounded-2xl w-96 ${Video ? "" : "hidden"} `}
              alt=""
            />
            <img
              src={PR_img}
              className={`rounded-2xl w-96 ${PR ? "" : "hidden"} `}
              alt=""
            />
            <img
              src={Photo_img}
              className={`rounded-2xl w-96 ${Photography ? "" : "hidden"} `}
              alt=""
            />
          </div>
          <div className="text-white font-open_sans flex flex-col justify-between lg:w-1/4 w-4/5">
            <div className=" space-y-10  mb-16 lg:text-left text-center">
              <div className={`text-3xl `}></div>
              <div className={`text-3xl ${Video ? "" : "hidden"} `}>Video</div>
              <div className={`text-3xl ${Photography ? "" : "hidden"} `}>
                Photography
              </div>
              <div className={`text-3xl ${Social ? "" : "hidden"} `}>
                Social
              </div>
              <div className={`text-3xl ${PR ? "" : "hidden"} `}>PR</div>
              <div className={`text-3xl ${Radio ? "" : "hidden"} `}>Radio</div>
              <div className={`text-md pb-20 ${Video ? "" : "hidden"} `}>
                A 60 second promotional movie trailer played on TV, online as
                pre rolls and via Facebook, to promote the movie that was
                waiting to be written to our movie-loving target audience, and
                encourage them to enter.
              </div>
              <div className={`text-md ${Photography ? "" : "hidden"} `}>
                Shots posted on Facebook and Instagram every day inspired
                thousands of entries. We reacted to the storyline as it
                developed in real time, selecting and treating the next image
                according to the day’s winning scene.
              </div>
              <div className={`text-md ${Social ? "" : "hidden"} `}>
                The complete movie storyboard showcased the entire story,
                completely inspired by stunning images captured in the
                Whitsundays, with all 20 winning scenes accompanying the images.
              </div>
              <div className={`text-md ${PR ? "" : "hidden"} `}>
                We enlisted the help of Craig Pearce as script supervisor, who
                was tasked with choosing the winner each day to ensure the story
                flowed properly, and providing daily writing tips to encourage
                people to take part.
              </div>
              <div className={`text-md pb-20 ${Radio ? "" : "hidden"} `}>
                Live reads from NOVA presenters reflected the ever-evolving
                story of Jake in real time, and encouraged people to get
                involved to shape the story themselves.
              </div>
            </div>

            <div className="bg-button-color py-3 lg:w-52 w-9/12 text-center rounded-2xl lg:mx-0 mx-auto">
              View Project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
