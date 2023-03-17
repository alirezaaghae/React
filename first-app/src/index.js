import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';


const App = () => {
    return(
        <UserCard>
        <div className='ui comments'>
           
            <SingleComment name='Alex' time='2' message='fuck you!'/>
           
            <SingleComment name='Sarah' time='3' message='ja hallo' />
            <SingleComment name='Neda' time='4' message='fick dich bitch' />
            <SingleComment name='Nevin' time='5' message='Please help me mother fucker'/>
        </div>
        </UserCard>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)