import { formatTime } from "../utils/utils.js";

function SunInfo({ sunrise, sunset }) {
  return (
    <div className="sun-card">
      <div className="sun">
        <div className="sunrise">
          <p className="bold">Sunrise</p>
          <p>{formatTime(sunrise)}</p>
        </div>
        <div className="sunset">
          <p className="bold">Sunset</p>
          <p>{formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
}

export default SunInfo;
