import { connect } from 'react-redux';
import * as React from 'react';

import { modifyA } from '../store/actions';

class ClientForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locationInput: "",
            detailsInput: ""
        }
    }

    inputChangeHandler = (e, whichOne) => {
        console.log("Input change handler was called!");
        
        const inputValue = e.target.value;

        this.setState(() => {
            if (whichOne === 1) {
                return {
                    locationInput: inputValue
                }
            } else {
                return {
                    detailsInput: inputValue
                }
            }

        });
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
       
        this.props.modifier({
            location: this.state.locationInput,
            details: this.state.detailsInput
        });
    }

    render() {
        return (
            <div>
                <form  className="clientForm" onSubmit={this.formSubmitHandler}>
                    <h3>Location</h3>
                    <input
                        type="text" value={this.state.locationInput}
                        onChange={(e) => this.inputChangeHandler(e, 1)}
                    />
                    <h3>Conference details</h3>
                    <textarea rows="4" cols="50" value={this.state.detailsInput}
                        onChange={(e) => this.inputChangeHandler(e, 2)}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(null, { modifier: modifyA })(ClientForm);