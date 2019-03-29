import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    const userList = this.props.users.map(user => <li>{user.username}</li>)

    return (
      <div>
        <h1>{this.props.userCount}</h1>
        <ul>
          {userList}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
