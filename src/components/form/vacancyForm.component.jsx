import { Component } from 'react';

// styles
import './vacancyForm.styles.css';

// components
import AdultFields from '../adult-fields/adultFields.component.jsx';
import PetFields from '../pets-fields/petFields.component.jsx';

const link = 'http://localhost:8000/candidates/api/v1/candidates/101';
const token = 'Token 43302189e044f29f641d6305804b2b865287f098';

class VacancyForm extends Component{

    state = {
        numAdults: 1,
        hasPets: 0,
    }

    onAddChild = () => {
        this.setState({
          numAdults: this.state.numAdults + 1
        });
    }

    onRemoveChild = () => {
        if (this.state.numAdults > 1){
            this.setState({
                numAdults: this.state.numAdults - 1
            });
        }
    }

    onHasPet = () => {
        this.setState({
            hasPets: 1
        });
    }

    onDontHasPet = () => {
        this.setState({
            hasPets: 0
        });
    }


    shouldComponentUpdate(nextProps, nextState) { 
        if (nextState.numAdults !== this.state.numAdults || nextState.hasPets !== this.state.hasPets ) { 
          return true;
        }
        return false;
    }


    onSubmit = (event) => {
        event.preventDefault();

        let adultInfo = []; 
        let current_adult = 0;

        let data = {};

        for (let i = 0; i < this.state.numAdults; i++) {

            let info = {}
            info[`adult${i}`] = {}
            info[`adult${i}`][`name${i}`] = event.target[current_adult].value + ' ' + event.target[current_adult + 1].value; 
            info[`adult${i}`][`email${i}`] = event.target[current_adult + 2].value; 
            info[`adult${i}`][`phone${i}`] = `+${event.target[current_adult + 3].value + event.target[current_adult + 4].value}`; 
            current_adult += 4
            adultInfo.push(info)
        }

        data.adults_information = adultInfo;
        data.family_income = event.target.family_income_info.value;
        data.number_of_children = event.target.number_children_info.value
        data.current_address = event.target.current_address.value;
        data.length_of_time_at_current_address = event.target.length_of_time_at_current_address_info.value;
        data.reason_for_moving = event.target.reason_for_moving_info.value;
        data.expected_renting_duration = event.target.expected_renting_duration_info.value;
        data.duration_of_lease = event.target.duration_of_lease_info.value;
        data.relevant_information = event.target.relevant_information_info.value;
        data.unit = 101;
        data.number_of_adults = this.state.numAdults;
        data.availability_date = '2022-07-18';
        data.current_landlord_name = "landlord_name";
        data.current_landlord_phone = "phone";
        data.preferred_move_in_date = "2022-07-18";
        data.previous_unit_time = "time";


        if (event.target.pet_info.value === 1) {
            data.pets = event.target.pet_description_info.value;
        } else {
            data.pets = "5";
        }


        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': token, 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };


        console.log(requestOptions.body);


        fetch(link, requestOptions)
            .then(response => response.json())
            .then(data => window.location.reload(true));

    };


    render() {

        const adultsComponents = [];
        const petsComponents = [];

        for (let i = 0; i < this.state.numAdults; i++){
            adultsComponents.push(<AdultFields key={i} n={i} />)
        }

        for (let i = 0; i < this.state.hasPets; i++){
            petsComponents.push(<PetFields key={i} />)
        }

        return (
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                <div className="wrapper wrapper--w790">
                    <div className="card card-5">
                        <div className="card-heading">
                            <h2 className="title">Apply for unit</h2>
                        </div>
                        <form onSubmit={this.onSubmit} action="">

                            <div className="card-body">
                                
                                {adultsComponents}


                                <div>
                                    <button className="btn btn--radius-2 btn--blue m-r-55" 
                                    type="button"
                                    onClick={this.onAddChild}
                                    >
                                        Add another person
                                    </button>

                                    <button className="btn btn--radius-2 btn--red" 
                                    type="button"
                                    onClick={this.onRemoveChild}
                                    >
                                        remove a person
                                    </button>
                                </div>
                                
                                {/* income information */}
                                <div className="form-row p-t-20">
                                    <label className="label label--block">Monthly Household Income*</label>
                                    <div className="p-t-15">
                                        <label className="radio-container m-r-45">{`<$2,000`}
                                            <input type="radio" name="family_income_info" value="0" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-45">{`$2,000-$2,500`}
                                            <input type="radio" name="family_income_info" value="1" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-45">{`$2,000-$3,000`}
                                            <input type="radio" name="family_income_info" value="2" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-45">{`$3,000-$4,000`}
                                            <input type="radio" name="family_income_info" value="3" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        
                                        <label className="radio-container">{`>$4,000`}
                                            <input type="radio" name="family_income_info" value="4" required />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                {/* children information */}
                                <div className="form-row p-t-20">
                                    <label className="label label--block">Children Info*</label>
                                    <div className="p-t-15">
                                        <label className="radio-container m-r-55">{`No children`}
                                            <input type="radio" name="number_children_info" value="0" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-55">{`1 child`}
                                            <input type="radio" name="number_children_info" value="1" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-55">{`2 child`}
                                            <input type="radio" name="number_children_info" value="2" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-55">{`4 child`}
                                            <input type="radio" name="number_children_info" value="3" required />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                {/* pets information */}

                                    <div className="form-row p-t-20">
                                        <label className="label label--block">Pets*</label>
                                        <div className="p-t-15">
                                            <label className="radio-container m-r-55">{`No Pets`}
                                                <input type="radio" name="pet_info" value="0" onClick={this.onDontHasPet} required />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="radio-container m-r-55">{`Yes`}
                                                <input type="radio" name="pet_info" value="1" onClick={this.onHasPet} required />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>

                                    {petsComponents}


                                {/* current address information */}


                                <div className="form-row">
                                    <div className="name">Current address*</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="text" name={`current_address`} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row p-t-20">
                                    <label className="label label--block">Length of Time at Current Address*</label>
                                    <div className="p-t-15">
                                        <label className="radio-container m-r-55">{`0 - 1 year`}
                                            <input type="radio" name="length_of_time_at_current_address_info" value="0" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-55">{`1 - 2 years`}
                                            <input type="radio" name="length_of_time_at_current_address_info" value="1" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-55">{`2 - 3 years`}
                                            <input type="radio" name="length_of_time_at_current_address_info" value="2" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-55">{`+3 years`}
                                            <input type="radio" name="length_of_time_at_current_address_info" value="3" required />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>


                                {/* reason for moving */}

                                <div className="form-row">
                                    <div className="name">Reason for moving *</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="text" name={`reason_for_moving_info`} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="name">Expected Renting Duration *</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="text" name={`expected_renting_duration_info`} required />
                                        </div>
                                    </div>
                                </div>

                                {/* Duration of lease */}

                                <div className="form-row p-t-20">
                                    <label className="label label--block">Duration of Lease *</label>
                                    <p>If you are satisfied with the unit, are you willing to sign a one year lease?</p>
                                    <div className="p-t-15">
                                        <label className="radio-container m-r-55">{`Yes`}
                                            <input type="radio" name="duration_of_lease_info" value="0" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-55">{`No`}
                                            <input type="radio" name="duration_of_lease_info" value="1" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container m-r-55">{`Possibly`}
                                            <input type="radio" name="duration_of_lease_info" value="2" required />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                {/* Other information */}

                                <div className="form-row">
                                    <div className="name">Other relevant information *</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="text" name={`relevant_information_info`} required />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className="btn btn--radius-2 btn--red" type="submit">Send info</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default VacancyForm;
