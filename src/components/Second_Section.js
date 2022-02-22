import whitsunday_logo from "../static/whitsunday_logo.png";

export default function Second_Section() {
  return (
    <div name="test2" id="test2" className=" xl:h-screen h-full flex">
      <div className="flex xl:flex-row flex-col items-center justify-center">
        <img src={whitsunday_logo} className="border-" alt="" />
        <div className="text-white font-open_sans space-y-10 xl:text-left text-center xl:mb-0 mb-40">
          <div className=" space-y-6 ">
            <div className="font-semibold text-5xl  md:w-1/2 w-4/5 xl:mx-0 md:text-left text-center mx-auto">
              Background & Audience
            </div>
            <div className="font-light w-1/2 xl:mx-0 mx-auto">
              Tourism & Events Queensland wanted to increase consideration of
              The Whitsundays amongst ‘social fun seekers’; digitally savvy
              consumers that socialise substantially online.
            </div>
          </div>
          <div className=" space-y-6">
            <div className="font-semibold text-5xl">Problem</div>
            <div className="font-light w-5/12 xl:mx-0 mx-auto">
              The Whitsundays was losing its cachet as an aspirational holiday
              location.
            </div>
          </div>
          <div className=" space-y-6">
            <div className="font-semibold text-5xl">Objective</div>
            <div className="font-light w-5/12 xl:mx-0 mx-auto">
              Shift perceptions and re-build the Whitsundays’ social currency as
              a world-class destination.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
