import React from 'react';
import {dashboard2} from '../noGit/secrets.json';

const PageThreeContent = (props) => {
   return (
       <div>
            <p>  <br></br><br></br> </p>
           <h2>Dashboard 2</h2>
           <iframe src={dashboard2} height="800" width="100%"></iframe>

       </div>
   );
}

export default PageThreeContent;