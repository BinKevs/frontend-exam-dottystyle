import whitsunday_logo from "../static/whitsunday_logo.png";
import play_button from "../static/play_button.png";
export default function Third_Section() {
  return (
    <div
      name="test3"
      id="test3"
      className=" bg-third-bg-color bg-cover bg-no-repeat lg:h-screen h-full lg:py-0 py-28  flex justify-center items-center"
    >
      <div className="text-white font-open_sans space-y-10">
        <div className="text-center font-light text-6xl">Solution</div>
        <div className="flex md:flex-row flex-col justify-center items-center md:space-x-10 space-x-0 text-center ">
          <div className="md:w-4/12 w-11/12 space-y-6 md:mx-0 mx-auto">
            <div>
              We knew movies rated high on the list of our target’s interests
              and, with incredible beaches, seaplanes, yachts and glamorous
              locations, the Whitsundays is the perfect setting for a movie.
            </div>
            <div>So we invited Australians to write it:</div>
            <div className=" text-2xl font-semibold">
              The Whitsundays. <div>A movie that’s waiting to be written.</div>
            </div>
            <div>
              We enlisted world-renowned screenwriter Craig Pearce as Script
              Supervisor. Then for 20 days we posted a daily storyboard image on
              Facebook and Instagram, inviting the public to write scenes for a
              chance to win a $10,000 luxury holiday.
            </div>
          </div>
          <div className="md:w-4/12 w-11/12 space-y-6 md:mx-0 mx-auto">
            <div>
              The campaign launched with a trailer, radio and online
              advertising.
            </div>
            <div>
              We reacted to the storyline as it developed, selecting and
              treating images according to the previous winning scene.
            </div>
            <div>
              Each scene written and shared became a compelling “ad” for the
              Whitsundays.
            </div>
            <div>
              Together, a Hollywood screenwriter and the Australian public had
              created the world’s first crowd-sourced movie storyboard and a
              story universe with millions of possible permutations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
