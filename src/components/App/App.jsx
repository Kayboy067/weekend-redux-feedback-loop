import React from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import BeginFeedback from '../BeginFeedback/BeginFeedback'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Thankyou from '../Thank you/Thankyou'
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path="/" exact>
          <BeginFeedback />
        </Route>
        
        <Route path="/Feeling" exact>
        <Feeling />
        </Route>

        <Route path="/Understanding" exact>
        <Understanding />
        </Route>

        <Route path="/Support" exact>
        <Support />
        </Route>

        <Route path="/Comments" exact>
        <Comments />
        </Route>

        <Route path="/Review" exact>
        <Review />
        </Route>

        <Route path="/Thankyou" exact>
        <Thankyou />
      </Route>



      </Router>
    </div>
  );
}

export default App;
