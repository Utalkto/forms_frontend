import { type } from "@testing-library/user-event/dist/type";
import { Component } from "react";


class FormCreationCard extends Component {

    state = {
    }


    render () {      
        return (
            <div className="card">
                <div className="card-content">
                    <div className="card-body">
                        
                        <h4 className="card-title" 
                        style={{fontWeight: "700"}}
                        onClick={() => this.props.functions.openRightbar(0, false)}
                        >
                            {this.props.title}
                        </h4>
                        <p className="card-text"
                        onClick={() => this.props.functions.openRightbar(1, false)}
                        >
                            {this.props.textBody}
                        </p>
                    </div>
                <div>

                    <div style={{padding: '10px 25px'}}>

                        {
                            this.props.elements.map((element, index) => {


                                if (element.name !== 'Form Title' && element.name !== 'Form Body' && !Array.isArray(element)){
                                    
                                    if (element.type !== 'select'){
                                        return(
                                            <div class="form-group">
                                                <label htmlFor="basicInput">{element.label} {element.required && '*' } </label>
                                                <input 
                                                type={element.type} 
                                                className="form-control" 
                                                name={element.name} 
                                                id="basicInput"
                                                placeholder={element.placeholder}
                                                onClick={() => this.props.functions.openRightbar(index, false)}
                                                />
                                            </div>
                                        );
                                    }
                                    else if (element.type === 'select'){

                                        return(
                                            <div class="form-group">

                                                <label htmlFor="basicInput">{element.label} {element.required && '*' } </label>

                                                <select class="form-select" id="basicSelect"
                                                onClick={() => this.props.functions.openRightbar(index, false)}
                                                
                                                >

                                                    {
                                                    
                                                    element.options.map((option, index) => {
                                                        return <option>{option.value}</option>
                                                    })
                                                    
                                                    }
                                                </select>

                                            </div>
                                        );

                                    
                                    }

                                } else if (Array.isArray(element)) {


                                    return (
                                    
                                    <div className="row">
                                        <div class="col-md-6">

                                            <div class="form-group">
                                                <label htmlFor="basicInput">{element[0].label} {element[0].required && '*' }</label>
                                                <input 
                                                type={element[0].type} 
                                                className="form-control" 
                                                name={element[0].name} 
                                                id="basicInput"
                                                placeholder={element[0].placeholder}
                                                onClick={() => this.props.functions.openRightbar(index, 0)}
                                                />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                        
                                            <div class="form-group">
                                                <label htmlFor="basicInput">{element[1].label} {element[1].required && '*' }</label>
                                                <input 
                                                type={element[1].type} 
                                                className="form-control" 
                                                name={element[1].name} 
                                                id="basicInput"
                                                placeholder={element[1].placeholder}
                                                onClick={() => this.props.functions.openRightbar(index, 1)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    );
                                }
                            })
                        }   

                    </div>

                </div>
                <div className="card-footer d-flex justify-content-end" >
                    <button className="btn btn-primary block">{this.props.buttonText}</button>
                </div>
            </div>
        </div>
        );
    }

}


export default FormCreationCard;