import React from 'react';
import PatientBox from './PatientBox';
import BlankPatientList from './BlankPatientList';
import NewForm from './NewForm';
import AddPatient from './AddPatient';
import $ from 'jquery';
class PatientList extends React.Component{
    constructor(props){
        super(props);
        this.state={
          patientsList:Array(4).fill(null),
          openNewForm:false 
        };
        this.containOneNotNull=false;
    }

    toggleNewForm(){
      $("form")[0].reset();
      this.setState((prev)=>{return {openNewForm:!prev.openNewForm} });
    }

    pushPatient(obj){
      let newList=this.state.patientsList.slice();
      let index=0;
      for(let i=0;i<newList.length;i++){
        if(newList[i]==null)
        { index=i;
          break; 
        }
      }
      newList[index]=obj;
      console.log(newList);
      this.setState({patientsList:newList});
      this.containOneNotNull=true;
      this.props.createBundle(index,obj.bundle_name);
    }

    render() {

      return (
      <div>
        
        <div className="patient-list">
        <div className="container">
          
        <BlankPatientList class={((!this.state.openNewForm)&&this.state.patientsList[0]==null)===true?"":"none"} 
        toggleNewForm={this.toggleNewForm.bind(this)}/>
        <NewForm class={this.state.openNewForm===true?"":"none"} 
        toggleNewForm={this.toggleNewForm.bind(this)} push={this.pushPatient.bind(this)}/>

        <div className={((!this.state.openNewForm)&&this.containOneNotNull)?"row":"none row"}>
              {this.state.patientsList.map((obj,index)=>{
                if(obj!=null)
                {return <PatientBox obj={obj} key={index}/>}
                else 
                {return <AddPatient index={index+1} key={index} toggleNewForm={this.toggleNewForm.bind(this)}/>} 
                })}
                {/* <AddPatient index={2} key={5} toggleNewForm={this.toggleNewForm.bind(this)}/> */}
                <div className="text-center col-xl-12s" style={{"marginTop":"70px"}}>
                  <button className="btn btn-primary btn-lg">Reset</button>
                  <button className="btn btn-primary btn-lg" onClick={this.dialAllpatient.bind(this)}>Dial</button>
              </div>
            </div>
            </div>
            </div>         
      </div>);
    }

    dialAllpatient(){
      // for()
      // $()
      $("ul li a:nth-child(2),#add_numbers").removeClass("active");
      $("ul li a:nth-child(3),#diallist").addClass("active");
      for(var x=0;x<4;x++){
        if(this.props.bundle_name[x]!=null)
        { let bundle_name=this.props.bundle_name[x];
        $.ajax({
        "async": true,
        "crossDomain":true,
        "url": " https://xvedjefz0l.execute-api.ap-southeast-1.amazonaws.com/hkassignment/ivr/appointment-reminder/make-calls",
        "type": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "data":JSON.stringify({
                "bundle_name":bundle_name 
        }),
        success:function(data){
          console.log(data);  
          alert(data.message);
        },
        error:function(){
            alert("error");
        }
    });
  }
    }
  }

  }

  export default PatientList;
