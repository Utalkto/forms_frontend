import { Component } from 'react';

import Card from '../cards/card.component.jsx';
import HeadCards from '../cards/HeaderCards.component.jsx';


class FormInformation extends Component {

    state = {

        forms: [],
        filterBy : ''

    }


    componentDidMount() {

        fetch('http://localhost:8000/forms/api/v1/forms/1', 
        {headers: { Authorization: 'Token 43302189e044f29f641d6305804b2b865287f098'}})
            .then((response) => (response.json()))
            .then((data) => (this.setState({forms: data})));

    }

    
    render() {

        return (
            <div id='main'>
                
                <div className='Search-box'>

                    <div class="row">
                        <div class="col-md-10 mb-1">
                            <div class="form-group position-relative has-icon-left">

                                <input type="text" class="form-control"
                                    placeholder="Search" onChange={(event) => {
                                        this.setState({filterBy: event.target.value});
                                    }}

                                    style={{width: '100%', height: '54px'}}
                                />
                                
                                <div class="form-control-icon">
                                    <i class="bi bi-person"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 mb-1">
                            
                            <div class="buttons">
                                <a href="#" class="btn btn-primary" style={{width: '100%', height: '54px'}}>New</a>
                            </div>
                                
                        </div>
                    </div>

                </div>
     
                <HeadCards 
                    card1Value={this.state.totalForms}
                    card1Name={"Total Forms"}
                    
                    card2Value={this.state.activeForms}
                    card2Name={"Active Forms"}

                    card3Value={this.state.visitFromForms}
                    card3Name={"Forms Visits"}

                    card4Value={this.state.dataFromForms}
                    card4Name={"Data From Forms"}

                />

                <div>



                    {
                        this.state.forms.map((form) => {

                            if (form.name.toLowerCase().includes(this.state.filterBy.toLowerCase())) {
                                return (
                                
                                    < Card 
                                        name={form.name} 
                                        description={form.description}
                                        numberOfViews={form.number_of_views}
                                        link={form.link}
                                        dateCreated={form.datetime_created}
                                    />
                                );
                            }
                    
                           
                    
                        })
                    }
                
                </ div>
            </div>

        );


    }


};


export default FormInformation;