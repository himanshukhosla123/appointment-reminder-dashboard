import React from 'react';
import $ from 'jquery';
import TimePicker from 'material-ui/TimePicker';
class NewForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time:new Date().toLocaleString() 
        };
    }

    updateTime(v1,dateObj){
        // alert(dateObj.toLocaleString().replace(",",""));
        this.setState({time:dateObj.toLocaleString().replace(",","")});
    }

    render() {
      return (
      <div className={this.props.class}> 
          
          <form action="post" onSubmit={this.formSubmit.bind(this)}>
          <div className="row new-patient-form">
          <div className="col-sm-4">
               <div className="form-group">
                <label htmlFor="patientno" className="bmd-label-floating">Patient mobile number</label>
                <input type="tel" className="form-control" id="patientno" name="user_number"/>
              </div>
              
          </div>
          
           <div className="col-xl-8">
            <div className="form-group">
                <label htmlFor="name" className="bmd-label-floating">Patient Name</label>
                <input type="text" className="form-control" id="name" name="user_name"/>
              </div>   
           </div>
            
            <div className="col-xl-6">
            <div className="form-group">
                <label htmlFor="docname" className="bmd-label-floating">Doctor Name</label>
                <input type="text" className="form-control" id="docname" name="doctor_name"/>
              </div>   
           </div>
           
            <div className="col-xl-3">
            <div className="form-group">
                <label htmlFor="age" className="bmd-label-floating">Patient Age</label>
                <input type="number" className="form-control" id="age" name="age"/>
              </div>   
           </div>
           
           <div className="col-xl-3">
            <div className="form-group">
                <label htmlFor="lang" className="bmd-label-floating">Call Language</label>
                <input type="text" className="form-control" id="lang" name="locale" list="language"/>
                <datalist id="language">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="nl">Dutch</option>
                    <option value="it">Italian</option>
                    <option value="en-IN">English(India)</option>
                    <option value="en-BR">Englis(British)</option>
                    <option value="el">Greek</option>
                    <option value="es">Spanish</option>
                    <option value="du">Deutsch</option>
                </datalist>
              </div>   
           </div>
    <div className="row col-xl-12">       
        <div className="col-xl-6 no-float">
            <div className="col-xl-6 pull-left">
            <div className="form-group">
                <label htmlFor="date" className="bmd-label-floating">Appointment Date</label>
                <input type="date" className="form-control" id="date" name="patient_appointment_date"/>
              </div>   
           </div>
           <div className="col-xl-6 pull-left">
            <div className="form-group">
                <label htmlFor="time" className="bmd-label-floating">Appointment Time</label>
                <TimePicker hintText="12hr Format" onChange={this.updateTime.bind(this)}/>
                {/* <input type="time" className="form-control" id="name" name=""/> */}
              </div>   
           </div>
    </div>        
        </div>
          
        <div className="col-xl-12 text-center">
           <div className="col-xl-12 btn-row">
            <button className="btn btn-primary btn-lg" type="reset" onClick={this.resetForm}>Reset</button>
            
            <button className="btn btn-primary btn-lg" type="submit">Save</button>
            </div>
        </div>    
        </div>        
          </form>           
      </div>);
    }

    resetForm(){
       $("form")[0].reset(); 
    }



    formSubmit(e){
        e.preventDefault();
        let notEmpty=false;
        var obj={};
        let str=$("form").serializeArray();
        let length=str.length;
        let counter=0;
        $.map(str, function(n, i){
            obj[n['name']] = n['value'];
            if(n['value']===""){
                $("input[name="+n['name']+']').parents("div.form-group").addClass("error");
            }
            else{
                counter++;
            }

        });
        if(length==counter)
        notEmpty=true;
        if(notEmpty)
        {   
        obj['function']="praktice-bot-call-to-patient-function";
        obj["twilio_number"]="+15623177799";
        obj['hospital_id']="ndcs_singapore";
        var bundle_name = new Date().toLocaleString();
        obj["bundle_name"]=this.state.time;
        
        // "2017-10-22 18:00";
        obj['gender']="Male";
        obj['appointment_id']="hk-test-3";
        obj['first_name']=$("input[name=user_name]").val().split(' ')[0];
        obj['last_name']=$("input[name=user_name]").val().split(' ')[1];
        console.log(obj);
        this.props.push(obj);
        this.props.toggleNewForm();
        $.ajax({
            "async": true,
            "crossDomain":true,
            "url": " https://xvedjefz0l.execute-api.ap-southeast-1.amazonaws.com/hkassignment/ivr/appointment-reminder/add-patients",
            "type": "POST",
            "headers": {
              "content-type": "application/json"
            },
            "data":JSON.stringify({
                 "request":obj,
                 "request_origin":"dashboard"  
            }),
            success:function(data){
                alert(data.message);
            },
            error:function(){
                alert("error");
            }
        }) 
        }
    }

  }

  export default NewForm;
