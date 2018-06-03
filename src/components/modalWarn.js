import React from 'react';
class modalWarn extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
        };
    }

    render() {
      return (
      <div> 
          
<div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close pull-right" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" className="">&times;</span></button>
      </div>
      <div className="modal-body">
        <h4 className="text-center">You have to watch the complete video to add numbers .</h4>
      </div>
    </div>
  </div>
</div>  
                
      </div>);
    }

  }

  export default modalWarn;
