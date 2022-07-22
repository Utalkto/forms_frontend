import { Component } from "react";

import './Rightbar.styles.css';


class Rightbar extends Component {

    state = {

    }

    render () {

        const { firstIndex, secondIndex } = this.props;

        return (

            <div className="active">
                <div className="sidebar-wrapper active" style={{width: '30%'}}>
                    <div className="sidebar-header">
                        <div className="d-flex justify-content-between">
                            <div className="logo">
                                <h3 style={{fontWeight: "700"}}>{this.props.element.inputTypeName}</h3>
                                {/* <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo" srcSet="" /></a> */}
                            </div>
                            <button 
                            className="btn btn-primary"
                            onClick={this.props.functions.closeRightBar}>Close 
                            </button>
                            <div className="toggler">
                                <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">

                            {
                                this.props.element.element_type === 0 ? 
                                <div>
                                    <li className="sidebar-title sidebar-title-right">Text</li>
                                    <li className="sidebar-item">
                                        <input type="text" className="form-control" 
                                        value={this.props.element.value}
                                        onChange={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'value')}
                                        />
                                    </li>
                                </div>

                                :
                                
                                <div>
                                    <li className="sidebar-title sidebar-title-right">Label</li>
                                    <li className="sidebar-item">
                                        <input type="text" className="form-control" 
                                        value={this.props.element.label}
                                        onChange={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'label')}
                                        />
                                    </li>

                                    <li className="sidebar-title sidebar-title-right">Placeholder</li>
                                    <li className="sidebar-item">
                                        <input type="text" className="form-control"
                                        value={this.props.element.placeholder}
                                        onChange={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'placeholder')}
                                        />
                                    </li>

                                    <li className="sidebar-title sidebar-title-right">Input name</li>
                                    <p>This will be the name that this input will display with in the database</p>
                                    <p><strong>names cannot be repeated</strong></p>
                                    <li className="sidebar-item">
                                        <input type="text" className="form-control"
                                        value={this.props.element.name}
                                        onChange={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'name')}
                                        />
                                    </li>

                                    <li className="sidebar-title sidebar-title-right">Input Required</li>
                                    <p>Indicates if this field can be let empty or not </p>

                                    {
                                        this.props.element.required ? 

                                        <li className="sidebar-item">
                                        <input type="checkbox" className="form-check-input"
                                        onClick={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'required')}
                                        checked
                                        />
                                        </li>

                                        :

                                        <li className="sidebar-item">
                                        <input type="checkbox" className="form-check-input"
                                        onClick={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'required')}
                                        />
                                        </li>

                                    }


                                    <li className="sidebar-title sidebar-title-right">Score Enable</li>
                                    <p>Indicates if this field will have an score attached to the answer </p>

                                    
                                    {
                                        this.props.element.scoreEnabled ? 
                                        
                                        <div>
                                            <li className="sidebar-item">
                                            <input type="checkbox" className="form-check-input"
                                            onClick={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'scoreEnabled')}
                                            checked
                                            />
                                            </li>

                                            <li className="sidebar-title sidebar-title-right">Max Score</li>
                                            <p>This will be the maximun score this answer can have attached to</p>
                                            <p><strong>Min must be 1</strong></p>
                                            <li className="sidebar-item">
                                                <input type="number" className="form-control" min={1}
                                                value={this.props.element.maxScore}
                                                onChange={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'maxScore')}
                                                />
                                            </li>
                                        </div>

                                        :

                                        <li className="sidebar-item">
                                        <input type="checkbox" className="form-check-input"
                                        onClick={(e) => this.props.functions.updateComponentElement(e, firstIndex, secondIndex, 'scoreEnabled')}
                                        />
                                        </li>

                                    }


                                    <br />
                                    <hr />

                                    <li className="sidebar-item">

                                        <button className="btn btn-danger"
                                        onClick={() => this.props.functions.deleteFormElement(firstIndex, secondIndex)}
                                        >
                                            Delete Element
                                        </button>
                                    </li>



                                </div>
                            }
            
                        </ul>

                    </div>
                    <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
                </div>
            </div>

        );

        

    }

}


export default Rightbar;