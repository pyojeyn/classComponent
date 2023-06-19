import { Component } from 'react';

import classes from './User.module.css';


// 클래스 기반 컴포넌트는 함수형 컴포넌트와 작업이 가능하다.
class User extends Component{
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
