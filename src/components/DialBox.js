import React from 'react';
class DialBox extends React.Component{
    
    render() {
      return(
          <div className="col-xl-6">
            <div className={this.props.class +' card'}>
      <div className="card-body btn" onClick={this.props.onClick}>
        <h4 className="card-title">Special title treatment</h4>
          <div className="row card-text">
              <div className="col-xl-12">
                <div className="col-xl-4 pull-left">
                    <img src="assets/images/old-telephone-ringing%20(2).png" alt=""/>
                </div>
                <div className="col-xl-8 pull-left">
                   <h4>No Response</h4>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div> );
    }

  }

  export default DialBox;
