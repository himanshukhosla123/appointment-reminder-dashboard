import React from 'react';
class AddPatient extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
      return (
          
  <div className="col-sm-6 pull-left">
  <div className="card">
    <div className="card-body btn btn-primary row">
        <div className="col-xl-4 pull-left">
     <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyIDUyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Ik0yNiwwQzExLjY2NCwwLDAsMTEuNjYzLDAsMjZzMTEuNjY0LDI2LDI2LDI2czI2LTExLjY2MywyNi0yNlM0MC4zMzYsMCwyNiwweiBNMzguNSwyOEgyOHYxMWMwLDEuMTA0LTAuODk2LDItMiwyICBzLTItMC44OTYtMi0yVjI4SDEzLjVjLTEuMTA0LDAtMi0wLjg5Ni0yLTJzMC44OTYtMiwyLTJIMjRWMTRjMC0xLjEwNCwwLjg5Ni0yLDItMnMyLDAuODk2LDIsMnYxMGgxMC41YzEuMTA0LDAsMiwwLjg5NiwyLDIgIFMzOS42MDQsMjgsMzguNSwyOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0NDQ0NDQyIgZGF0YS1vbGRfY29sb3I9IiNjY2NjY2MiPjwvcGF0aD48L2c+IDwvc3ZnPg==" 
     alt=""/>
     </div>
     <div className="col-xl-8 pull-left">
     <h5 className="text-center padd-top-50" onClick={this.props.toggleNewForm}>Click to add patient {this.props.index}</h5>
     </div>
    </div>
  </div>
</div>
        );
    }

  }

  export default AddPatient;
