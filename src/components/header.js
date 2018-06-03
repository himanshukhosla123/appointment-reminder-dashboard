import React from 'react';
class Header extends React.Component{
  
    render() {
      return (
      <div>
          <ul className="cd-breadcrumb triangle nav nav-tabs" role="tablist">
        <li role="presentation">
            <a className="active">
                Demo Video
            </a>
        </li>
        <li role="presentation" className="">
            <a>
                Add Numbers
            </a>
        </li>
        <li role="presentation" className="">
            <a>
                Dialing
            </a>
        </li>
        <li role="presentation" className="">
            <a>
                Report
            </a>
        </li>
    </ul>  
      </div>);
    }

  }

  export default Header;
