import React from 'react';

const SampleModal = ({color}) => {
  const {name, hex} = color;
  var titleStyle = {background: hex};
  var row1Style = {background: hex};
  var row2Style = {color: hex};
  return(
    <div className="sampleOnTest">
      <div className="sampleTitle" style={titleStyle}>
        <div>Color: {name}</div>
        <div>Hex: {hex}</div>
      </div>
      <div className="firstRow" style={row1Style}>
        <span>
          <i className="fa fa-camera-retro fa-4x"></i>
          <i className="fa fa-check fa-4x" aria-hidden="true"></i>
          <i className="fa fa-tripadvisor fa-4x" aria-hidden="true"></i>
          <i className="fa fa-btc fa-4x" aria-hidden="true"></i>
          <i className="fa fa-calendar fa-4x"></i>
          <i className="fa fa-github-alt fa-4x"></i>
          <i className="fa fa-star-half-o fa-4x"></i>
          <i className="fa fa-refresh fa-spin fa-4x fa-fw"></i>
        </span>
      </div>
      <div className="secondRow" style={row2Style}>
        <i className="fa fa-camera-retro fa-4x"></i>
        <i className="fa fa-check fa-4x" aria-hidden="true"></i>
        <i className="fa fa-tripadvisor fa-4x" aria-hidden="true"></i>
        <i className="fa fa-btc fa-4x" aria-hidden="true"></i>
        <i className="fa fa-calendar fa-4x"></i>
        <i className="fa fa-github-alt fa-4x"></i>
        <i className="fa fa-star-half-o fa-4x"></i>
        <i className="fa fa-refresh fa-spin fa-4x fa-fw"></i>
      </div>
    </div>
  );
}

export default SampleModal;
