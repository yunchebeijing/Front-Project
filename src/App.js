import React from 'react';
import View from './View';
import Page1 from './Page1';
import { BrowserRouter as Router,Route} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
    super(props);
    
    }
    render(){ 
        return(
        <Router >
          <div>
            <Route exact path="/" component={View} />
            <Route path="/Page1" component={Page1}/>
          </div>
        </Router>
        )
    }
    }
    export default App;