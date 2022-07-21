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
                        onClick={() => this.props.functions.openRightbar(0)}
                        >
                            {this.props.title}
                        </h4>
                        <p className="card-text"
                        onClick={() => this.props.functions.openRightbar(1)}
                        >
                            {this.props.textBody}
                        </p>
                    </div>
                <div>

                    
                    {
                        this.props.elements.map((element, index) => {

                            if (element.name !== 'Form Title' && element.name !== 'Form Body'){
                                return(
                                    <div class="form-group">
                                        <label for="basicInput">{element.label}</label>
                                        <input 
                                        type={element.type} 
                                        class="form-control" 
                                        name={element.name} 
                                        id="basicInput"
                                        placeholder={element.placeholder}/>
                                    </div>
                                )
                            }
                        })





                    }   
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