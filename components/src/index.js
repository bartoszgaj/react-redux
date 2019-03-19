import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail author="Sam" timeAgo="Today at 4:24PM" content="Lorem ipsum re et dolore magna aliqua."/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Jake" timeAgo="Today at 6:54PM" content="Lorem ipsum dolor sit ame."/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Mia" timeAgo="Yesterday at 1:29PM" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Josh" timeAgo="Tommorow at 11:04PM" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."/>
    </ApprovalCard>
    </div>
  )
};

ReactDOM.render( <App />, document.querySelector('#root'));
