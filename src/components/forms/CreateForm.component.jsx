import { Component } from "react";

import Card from "../cards/Card.component.jsx";
import FormCreationCard from "../cards/FormCreationCard.component.jsx";
import HeadCards from "../cards/HeaderCards.component.jsx";
import Rightbar from "../sidebar/Rightbar.component.jsx";
import Sidebar from "../sidebar/sidebar.component.jsx";

const inputInfo = {
    0: {
        'type': 'text',
        'placeholer': 'placeholder',
        'label': 'label',
        'name': 'simpleInputField',
    },
    // for first name
    1: {
        'type': 'text',
        'placeholer': 'Enter your first name',
        'label': 'First Name',
        'name': 'First Name',
    },
    // for last name
    2: {
        'type': 'text',
        'placeholer': 'Enter your last name',
        'label': 'Last Name',
        'name': 'Last Name',
    },
    // for email
    3: {
        'type': 'email',
        'placeholer': 'Enter your email',
        'label': 'Email',
        'name': 'Email',
    }
}


class CreateForm extends Component {

    // margins are 
    // 20px when rightbar is open and width is 70%
    // 300px when rightbar is closed and width is 100%

    state = {
        totalElements : 2,
        totalScore : 0,

        mainWidth : '100%',
        mainMargin : '300px',

        currentComponentIndex : 0,

        formElements : [ 
            
            {
                name : 'Form Title',
                type : 'text',
                value : 'Click here to edit the title of the form',
                id : '1'
            },
            {
                name : 'Form Body',
                type : 'text',
                value : 'Click here to edit the body text of the form',
                id : '2'
            },
        ]
  
    }


    openRightbar = (componentIndex) => {
        this.setState({
            mainWidth: '70%',
            mainMargin: '20px',
            currentComponentIndex: componentIndex,
        });
    }

    closeRightbar = () => {
        this.setState({
            mainWidth: '100%',
            mainMargin: '300px'
        });
    }


    updateComponentValue = (e, index) => {

        const map = this.state.formElements.map((element, i) => {

            if (i === index){
                return {
                    ...this.state.formElements[index],
                    value : e.target.value
                }
            }

            return element;
        })


        this.setState({
            ...this.state,
            formElements : map
        })
    }

    addNewFormElement = (type) => {

        type.forEach(t => {
            this.setState({
                ...this.state,
                totalElements : this.state.totalElements + 1,

                formElements :
                [
                    ...this.state.formElements,
                    {
                        name : inputInfo[t].name,
                        type : inputInfo[t].type,
                        placeholder : inputInfo[t].placeholder,
                        label : inputInfo[t].label,
                        value : '',
                        id : `element${this.state.totalElements + 1}`
                    }
                ]
            });
        });
    }

    deleteFormElement = (componentIndex) => {
        this.setState({
            ...this.state,
            totalElements : this.state.totalElements - 1,
            formElements : {
                ...this.state.formElements,
                [componentIndex] : null
            }
        });
    }


    render() {
        return (
            <div className="d-flex">

                {
                    this.state.mainWidth === '100%' &&
                    <Sidebar 
                    title={'Inputs in the form'} 
                    forForms = {true}
                    functions= {{
                        'addNewFormElement' : this.addNewFormElement, 
                    }}
                    />

                }


                <div id='main' style={{width: this.state.mainWidth, marginLeft: this.state.mainMargin}}>
                    
                    <div className="page-title">
                        <div className="row">
                            <div className="col-12 col-md-6 order-md-1 order-last">
                                <h3>Create Form</h3>
                                <p className="text-subtitle text-muted">Create form for your unit</p>
                            </div>
                            <div className="col-12 col-md-6 order-md-2 order-first">
                                <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Create Form</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
        
                    <HeadCards 
                        card1Value={this.state.totalElements}
                        card1Name={"Total Elements"}
                        
                        card2Value={this.state.totalScore}
                        card2Name={"Total Score"}

                        card3Value={this.state.visitFromForms}
                        card3Name={"Form Visits"}

                        card4Value={this.state.dataFromForms}
                        card4Name={"Data From Forms"}
                    />

                    <div>
                    < FormCreationCard 
                        title={this.state.formElements[0].value} 
                        textBody={this.state.formElements[1].value}
                        numberOfViews={'form.number_of_views'}
                        link={'form.link'}
                        dateCreated={'form.datetime_created'}
                        buttonText={'Submit'}
                        functions={{
                            'openRightbar': this.openRightbar,
                        }}
                        elements={this.state.formElements}
                    />
                    </ div>
                </div>

                {

                    this.state.mainMargin === '20px' &&
                    <Rightbar 
                    element={this.state.formElements[this.state.currentComponentIndex]}
                    componentIndex={this.state.currentComponentIndex}
                    functions={{
                        'closeRightBar':this.closeRightbar,
                        'updateComponentValue': this.updateComponentValue,
                    }} />

                }
            

            </div>
        );
    }

}

export default CreateForm;