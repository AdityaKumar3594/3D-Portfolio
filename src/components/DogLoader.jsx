import "./DogLoader.css";

export default function DogLoader() {
  return (
    <div className="loader-page">

      <div className="loader">

        {/* Loading circle */}
        <div className="loading-circle">

          {/* Base circle */}
          <div className="circle-track" />

          {/* Animated progress arc */}
          <div className="circle-progress" />

        </div>


        {/* Running fox SVG */}
        <div className="fox">

          <img
            src="/fox-running.svg"
            alt=""
          />

        </div>

      </div>

    </div>
  );
}