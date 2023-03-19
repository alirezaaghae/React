import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';


const App = () => {
    return(
        <UserCard>
        <div className='ui comments'>
            <SingleComment name='Alex' time='2' message='hallo!'/>
            <SingleComment name='Sarah' time='3' message='ja hallo' />
            <SingleComment name='Neda' time='4' message='danke fur ihre app' />
            <SingleComment name='Nevin' time='5' message='bitte hielf mir'/>
        </div>
        </UserCard>
    )
}

ReactDOM.render(<App />,document.querySelector('#root'))