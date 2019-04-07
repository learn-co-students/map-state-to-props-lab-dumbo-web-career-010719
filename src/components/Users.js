import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {

    let users = this.props.users.map((user,id)=>
      <li key={id}>{user.username} from {user.hometown}</li>
    )

    return (
      <div>
        {this.props.userCount}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) =>{
  return{
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
