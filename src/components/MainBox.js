import React from 'react';
import DialList from './DialList';
import ModalSee  from './modalSee';
import ModalWarn  from './modalWarn';
import PatienList from './PatientList';
import VideoPlayer from './VideoPlayer';
class MainBox extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            bundle_names:Array(4).fill(null)
        };
    }

    createBundle(index,name){
        alert(index + " " +name);
        var bundles=this.state.bundle_names.slice();
        bundles[index]=name;
        this.setState({bundle_names:bundles});
    }

    render() {
      return (
      <div>
        <ModalSee/>
        <ModalWarn/>
        <div className="tab-content">
        <div  className="tab-pane" id="video">   
         <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                 Launch demo modal</button>
        <VideoPlayer/>
                 
        </div> 
        <div className="tab-pane" id="add_numbers">
        <PatienList createBundle={this.createBundle.bind(this)} 
        bundle_name={this.state.bundle_names}/>
        </div>
        
        <div  className="tab-pane" id="diallist">
        <DialList createBundle={this.createBundle.bind(this)} bundle_name={this.state.bundle_names}/>
        </div>
        <div role="tabpanel" className="tab-pane" id="report">
            <h3>No Report Generated</h3>
        </div>
    </div>
   </div>   );
    }

  }

  export default MainBox;
