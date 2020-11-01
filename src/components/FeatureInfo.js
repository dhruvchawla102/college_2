import React from "react";
import "./FeatureInfo.css";

function FeatureInfo({title, description}) {
  return (
    <div className="feature1">
      <div className="feature__info1">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default FeatureInfo;
