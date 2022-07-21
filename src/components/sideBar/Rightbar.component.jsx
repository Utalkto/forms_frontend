import { Component } from "react";


class Rightbar extends Component {

    state = {

    }


    render () {

        return (

            <div className="active">
                <div className="sidebar-wrapper active" style={{width: '30%'}}>
                    <div className="sidebar-header">
                        <div className="d-flex justify-content-between">
                            <div className="logo">
                                <h3 style={{fontWeight: "700"}}>{this.props.element.name}</h3>
                                {/* <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo" srcSet="" /></a> */}
                            </div>
                            <button onClick={this.props.functions.closeRightBar}>
                                Close 
                            </button>
                            <div className="toggler">
                                <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">
                            <li className="sidebar-title">Text</li>
                            <li className="sidebar-item">
                                <input type="text" className="form-control" 
                                value={this.props.element.value}
                                onChange={(e) => this.props.functions.updateComponentValue(e, this.props.componentIndex)}
                                
                                />
                            </li>

                            {/* <li className="sidebar-item active ">
                                <a href="index.html" className='sidebar-link'>
                                    <i className="bi bi-grid-fill"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li> */}
                        </ul>

                    </div>
                    <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
                </div>
            </div>

        );

        

    }

}


export default Rightbar;