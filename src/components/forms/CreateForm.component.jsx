import { Component } from "react";

import Card from "../cards/Card.component.jsx";
import FormCreationCard from "../cards/FormCreationCard.component.jsx";
import HeadCards from "../cards/HeaderCards.component.jsx";
import Rightbar from "../sidebar/Rightbar.component.jsx";
import Sidebar from "../sidebar/sidebar.component.jsx";

const inputInfo = {
    0: {
        'type': 'text',
        'placeholder': 'click to edit',
        'label': 'label',
        'name': 'simpleInputField',
        'inputTypeName': 'simpleInputField',
        'required': false,
        'scoreEnabled': false,
        'maxScore': 1,

        'element_type': 1,
    },
    // for first name
    1: {
        'type': 'text',
        'placeholder': 'Enter your first name',
        'label': 'First Name',
        'name': 'First Name',
        'inputTypeName': 'FirstName',
        'required': true,
        'scoreEnabled': false,
        'maxScore': 1,

        'element_type': 2,
    },
    // for last name
    2: {
        'type': 'text',
        'placeholder': 'Enter your last name',
        'label': 'Last Name',
        'name': 'Last Name',
        'inputTypeName': 'LastName',
        'required': true,
        'scoreEnabled': false,
        'maxScore': 1,

        'element_type': 3,
    },
    // for email
    3: {
        'type': 'email',
        'placeholder': 'Enter your email',
        'label': 'Email',
        'name': 'Email',
        'inputTypeName': 'Email',
        'required': true,
        'scoreEnabled': false,
        'maxScore': 1,

        'element_type': 4,
    },
    // for select
    4: {
        'type': 'select',
        'placeholder': 'Select your option',
        'label': 'Select',
        'name': 'Select',
        'inputTypeName': 'Select',
        'required': false,
        'scoreEnabled': false,
        'maxScore': 1,

        'options' : [
            {
                'value': 'option1',
                'score' : 0,
            },
            {
                'value': 'option2',
                'score' : 0,
            },
            {
                'value': 'option3',
                'score' : 0,
            },

        ],

        'element_type': 5,
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
        secondIndex : false,

        formElements : [ 
            
            {
                name : 'Form Title',
                type : 'text',
                value : 'Click here to edit the title of the form',
                inputTypeName : 'formTitle',
                id : '1',
                element_type : 0,
            },
            {
                name : 'Form Body',
                type : 'text',
                value : 'Click here to edit the body text of the form',
                inputTypeName : 'formBody',
                id : '2',
                element_type : 0,
            },
        ]
  
    }


    openRightbar = (componentIndex, secondIndex) => {
        this.setState({
            mainWidth: '70%',
            mainMargin: '20px',
            currentComponentIndex: componentIndex,
            secondIndex: secondIndex,
        });
    }

    closeRightbar = () => {
        this.setState({
            mainWidth: '100%',
            mainMargin: '300px'
        });
    }

    updateComponentElement = (e, index, secondIndex, elementToUpdate) => {


        const trueOrFalseComponents = ['required', 'scoreEnabled'];

        const map = this.state.formElements.map((element, i) => {

            if (i === index){

                if (secondIndex !== false){

                    let val = this.state.formElements[index].map((element, i) => {

                        if (i === secondIndex){

                            let valueToReturn = {
                                ...this.state.formElements[index][secondIndex],
                            }   

                            if (trueOrFalseComponents.includes(elementToUpdate)) {
                                valueToReturn[elementToUpdate] = e.target.checked;
                            }
                            else {
                                valueToReturn[elementToUpdate] = e.target.value;

                            }
                            
                            return valueToReturn;
                        }

                        return element;

                    })
                    return {
                        val
                    }

                    
                }
                else {
                    let valueToReturn = {
                        ...this.state.formElements[index],
                    }

                    if (trueOrFalseComponents.includes(elementToUpdate)) {
                        valueToReturn[elementToUpdate] = e.target.checked;
                    }
                    else {
                        valueToReturn[elementToUpdate] = e.target.value;

                    }
                    
                    return valueToReturn;
                }

            }

            return element;
        })


        let convertedMap = map.map((element, i) => {
            
            // check if element is an array and return a list of its objects

            if (Array.isArray(element['val'])){
                return element['val'].map((el, i) => {
                    return el;
                })
            }

            return element;
        })

        this.setState({
            ...this.state,
            formElements : convertedMap
        })
    }


    addNewFormElement = (type) => {
        let val = [];
        
        if (type.length > 1 ){
            let forList = [];
            // create a for each loop to create a new object for each element in the array
            type.forEach((element, i) => {
                forList.push(
                    {
                    name : inputInfo[type[i]].name,
                    type : inputInfo[type[i]].type,
                    placeholder : inputInfo[type[i]].placeholder,
                    label : inputInfo[type[i]].label,
                    value : '',
                    required : inputInfo[type[i]].required,
                    inputTypeName : inputInfo[type[i]].inputTypeName,
                    id : `element${this.state.totalElements + 1}`,
                    element_type : inputInfo[type[i]].element_type,
                }
                )
            })

            val = forList;

        } else if (inputInfo[type[0]].type === 'select'){

            val = {
                name : inputInfo[type].name,
                type : inputInfo[type].type,
                placeholder : inputInfo[type].placeholder,
                label : inputInfo[type].label,
                value : '',
                options : inputInfo[type].options,
                required : inputInfo[type].required,
                inputTypeName : inputInfo[type].inputTypeName,
                id : `element${this.state.totalElements + 1}`,
                element_type : inputInfo[type].element_type,
            }

            console.log('val');
            console.log(val);
        
        } else {
            val = {
                name : inputInfo[type].name,
                type : inputInfo[type].type,
                placeholder : inputInfo[type].placeholder,
                label : inputInfo[type].label,
                value : '',
                required : inputInfo[type].required,
                inputTypeName : inputInfo[type].inputTypeName,
                id : `element${this.state.totalElements + 1}`,
                element_type : inputInfo[type].element_type,
            }
        }

        
        this.setState({
            ...this.state,
            totalElements : this.state.totalElements + type.length,
            formElements : [...this.state.formElements, val],
        })

    }


    deleteFormElement = (index) => {

            let toDelete = 0;        

            // check if the index given is an array in the formElements array
            // if it is, then set Todelete to the length of the array
            // otherwise, set Todelete to 1
            if (Array.isArray(this.state.formElements[index])){
                toDelete = this.state.formElements[index].length;
            }
            else {
                toDelete = 1;
            }
            
            let map = this.state.formElements.map((element, i) => {
    
                if (i !== index){
                    return element;
                }
            });


            // delete undefinded from map
            map = map.filter((element) => {
                return element !== undefined;
            });

            this.setState({
                ...this.state,
                formElements : map,
                currentComponentIndex : 0,
                secondIndex : false,
                totalElements : this.state.totalElements - toDelete,
            })

            this.closeRightbar();



    }

    render() {

        let element;

        if (this.state.secondIndex !== false) {
            element = this.state.formElements[this.state.currentComponentIndex][this.state.secondIndex]
        } else {
            element = this.state.formElements[this.state.currentComponentIndex]
        }                   


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
                    element={element}
                    firstIndex={this.state.currentComponentIndex}
                    secondIndex={this.state.secondIndex}
                    functions={{
                        'closeRightBar':this.closeRightbar,
                        'updateComponentElement': this.updateComponentElement,
                        'deleteFormElement': this.deleteFormElement,
                        
                    }} />

                }
            

            </div>
        );
    }

}

export default CreateForm;