import React from 'react';
import PropTypes from 'prop-types';
import c from './../constants';
import { v4 } from 'uuid';

class newUser extends React.Component {

  constructor(props) {
    super(props);

    this.handleNewUser = this.handleNewUser.bind(this);
  }

  handleNewUser(event) {
    event.preventDefault();
    const { _name } = this.refs;
    const { dispatch } =this.props;
    const action = {
      type: c.ADD_NAME,
      id: v4(),
      name: _name.value,
    }
    dispatch(action);
    _name.value = "";
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleNewUser}>
          <input
            refs="_name"
            type="text"
            id="name"
          />
        </form>
      </div>
    );
  }

  NewUser = connec()(NewUser);

  export default NewUser;