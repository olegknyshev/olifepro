import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Calc from 'pages/calc';
import Calc60Days from 'pages/calc2';
import Help from 'pages/help-salary';
import Help60Days from 'pages/help-60-days';

const Routes = (
    <Switch>
    <Route path='/' component={Calc} exact />
    <Route path='/60-days' component={Calc60Days} />
    <Route path='/help-salary' component={Help} />
    <Route path='/help-60-days' component={Help60Days} />
    <Redirect to="/" />
  </Switch>
  );
  
export default Routes;
