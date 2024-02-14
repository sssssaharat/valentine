import Spline from "@splinetool/react-spline";
import { useState } from "react";
import Happy from "./Happy";
import Header from "./Header";
import Intro from "./Intro";
function Content() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  return (
    <div className="mx-auto max-w-9xl">
      <div className="bg-red-800  ">
        {yesPressed ? (
          <>
            <Happy />
          </>
        ) : (
          <div className="pb-12">
            <Header />
            <Intro />
            <Spline scene="https://prod.spline.design/7VghYX3WbzK2hEbP/scene.splinecode" />
            <a className="flex items-center justify-center mb-12 text-white text-3xl font-extrabold ">
              Your choice 👇
            </a>
            <div className=" flex items-center justify-center gap-4">
              <button
                className={`bg-red-700 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl mr-4`}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button className="btn hover:bg-gray-800" onClick={handleNoClick}>
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
