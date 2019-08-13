import React from 'react';
import {dashboard1} from '../noGit/secrets.json';

const PageTwoContent = (props) => {
   return (
       <div>
            <p>  <br></br><br></br> </p>
           <h2>Dashboard 1</h2>
           <iframe src={dashboard1} height="800" width="100%"></iframe>

       </div>
   );
}

export default PageTwoContent;