import React, { Component } from 'react';
 
class CameraView extends Component {

    render = () => {
        const { presetId } = this.props;
        return <div className="Camera-selection-container"  >
            <img style={{  height: "600px", width: "600px" }}
                src={ `http://weathercam.digitraffic.fi/${presetId}.jpg`}
                alt={ `Camera ${presetId}`}
             />
        </div>
    }
}

export default CameraView;
