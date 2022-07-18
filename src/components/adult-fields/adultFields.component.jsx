import { Component } from 'react';


class AdultFields extends Component {


    render () {

        const {key, n} = this.props;

        return (
            <div className="adult" key={key}>
                <div className="form-row m-b-55">
                    <div className="name">Name</div>
                    <div className="value">
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group-desc">
                                    <input className="input--style-5" type="text" name={`first_name${n}`} required />
                                    <label className="label--desc">first name</label>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group-desc">
                                    <input className="input--style-5" type="text" name={`last_name${n}`} required />
                                    <label className="label--desc">last name</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="name">Email</div>
                    <div className="value">
                        <div className="input-group">
                            <input className="input--style-5" type="email" name={`email${n}`} required />
                        </div>
                    </div>
                </div>
                <div className="form-row m-b-55">
                    <div className="name">Phone</div>
                    <div className="value">
                        <div className="row row-refine">
                            <div className="col-3">
                                <div className="input-group-desc">
                                    <input className="input--style-5" type="text" name={`area_code${n}`} required/>
                                    <label className="label--desc">Area Code</label>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="input-group-desc">
                                    <input className="input--style-5" type="text" name={`phone${n}`} required/>
                                    <label className="label--desc">Phone Number</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="form-row p-t-20">
                    <label className="label label--block">Are you an existing customer?</label>
                    <div className="p-t-15">
                        <label className="radio-container m-r-55">Yes
                            <input type="radio" checked="checked" name="exist" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-container">No
                            <input type="radio" name="exist" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div> */}


            </div>
        );
    }
}


export default AdultFields;