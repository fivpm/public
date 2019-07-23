import * as React from 'react';
import ClientForm from './ClientForm';
import Instruction from './Instruction';
import '../App.css';

class Post extends React.Component {
     
    render() {
        return (
            <div>
                <h1>Post element</h1>
                <Instruction/>
                < ClientForm />
            </div>
        );
    }
}

export default Post;
