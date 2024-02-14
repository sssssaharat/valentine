import Spline from "@splinetool/react-spline";
import { useState } from "react";

function Content() {
  const [yesPressed, setYesPressed] = useState(false);
  return (
    <div className="mx-auto max-w-9xl">
      <div className="bg-red-800  ">
        {yesPressed ? (
          <>
            <div className="text-4xl font-bold my-4">Ok yay!!!</div>
          </>
        ) : (
          <div className="py-12">
            <Spline scene="https://prod.spline.design/7VghYX3WbzK2hEbP/scene.splinecode" />
            <div className="flex items-center justify-center gap-4">
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-red-500 fill-red-600"
                  fill="none"
                  viewBox="0 0 24 24 "
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Yes
              </button>
              <button className="btn">
                No
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
