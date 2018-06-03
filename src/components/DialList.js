import React from 'react';
import DialBox from './DialBox';
import $ from 'jquery';
class DialList extends React.Component{
    constructor(props){
        super(props);
        this.state={ status:["dialing","unreach","noresponse","oncall"]
        };
    }
    
    

    render() {
      return (
      <div>   
        <div className="dial-list">
         <div className="container">   
            <div className="row">
             {this.props.bundle_name.map((obj,index)=>(
              obj==null?null:<DialBox class={this.state.status[index]} key={index} onClick={this.checkStatus.bind(this,index)}/>
             ))}
       </div>
        </div>           
      </div>
      </div>);
    }

    checkStatus(num){
      var statusClass="dialing";
      if(this.props.bundle_name[num]!=null)
        { let bundle_name=this.props.bundle_name[num];
      $.ajax({
        "async": true,
        "crossDomain":true,
        "url": "https://xvedjefz0l.execute-api.ap-southeast-1.amazonaws.com/hkassignment/ivr/appointment-reminder/bundle-data",
        "type": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "data":JSON.stringify({
                "bundle_name":bundle_name
        }),
        success:function(data){
          console.log(data);
          statusClass=data.message.toLowerCase();
          // $(e.id).classList="card"+" dialing";
            alert(data.data[num].status);
        },
        error:function(){
            alert("error");
        }
    });
  }
    var statusList=this.state.status.slice();
    statusList[num]=statusClass;
    this.setState({status:statusList});
    }

  }

  export default DialList;
