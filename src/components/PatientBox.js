import React from 'react';
class PatientBox extends React.Component{
   

    render() {
      return (
          <div className="col-sm-6 pull-left">
    <div className="card">
      <div className="card-body btn">
        <h4 className="card-title">{'Dr.' +this.props.obj.doctor_name}</h4>
          <div className="row card-text">
              <div className="col-xl-12">
                  <div className="col-xl-9 pull-left">
                      <h2 className="text-left">{this.props.obj.user_name}</h2>
                      <h5 className="text-left"><span className="date">{this.props.obj.patient_appointment_date} </span> 
                      <span className="time">{this.props.obj.bundle_name.split(' ')[1]}</span></h5>
                  </div>
                  <div className="col-xl-3 pull-left">
                      <div className="age text-center">{this.props.obj.age}</div>
                      <button className="btn btn-primary btn-block">
                      {this.props.obj.locale}
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>);
    }

  }

  export default PatientBox;
