import React from 'react';
import $ from 'jquery';
class modalSee extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
      return (
      <div>  
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="text-center" id="myModalLabel">Are you ready to see Sarah in action ?</h4>
        
        <button type="button" className="close pull-right" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" className="">&times;</span></button>
      </div>
      <div className="modal-body text-center">
        <button type="button" className="btn btn-default" data-dismiss="modal">Watch Demo Again</button>
        <button type="button" className="btn btn-primary" onClick={()=>{$("ul li a")[1].click();
                                                                          $("#add_numbers").removeClass("none")}}>Lets get Started</button>
      </div>
    </div>
  </div>
</div>            
      </div>);
    }

  }

  export default modalSee;
