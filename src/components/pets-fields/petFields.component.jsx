import { Component } from "react";

class PetFields extends Component {

    state = {
        pet: false,
    };


    render () {
        return (
            <div className="form-row p-t-20">
                <label className="label label--block">Pets Description*</label>
                <div className="p-t-15">
                    <label className="radio-container m-r-45">{`1 Cat`}
                        <input type="radio" name="pet_description_info" value="4" required />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-container m-r-45">{`2 Cats`}
                        <input type="radio" name="pet_description_info" value="3" required />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-container m-r-45">{`Other - Pet fee to be discussed`}
                        <input type="radio" name="pet_description_info" value="6" required />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        );
    }
}


export default PetFields;