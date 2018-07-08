import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

import App from './components/App';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';
import FeedBack from './views/people-feed-back/index';
import GovernBack from './views/govern-feed-back/index';
import MediationTeam from './views/mediation-team/index';
import Appointment from './views/appointment/index';
import Helper from './views/helper/index'
import Guardians from './views/guardians/index'
import GuardiansDetail from './views/guardians/detail'
import HelperDetail from './views/helper/detail'
import MediationDetail from './views/mediation-team/detail'
import OrderList from './views/order/orderList'
import OrderDetail from './views/order/orderDetail'
import Chat from './views/chat';


import './index.less';

class Index extends React.Component {
  render() {
    return (
      <div className="body">
        <h1>Stages list</h1>
        <ul role="nav">
          <li><Link to="/s1">ListView + Carousel</Link></li>
          <li><Link to="/s2">Tabs + ...</Link></li>
          <li><Link to="/s3">Form + ...</Link></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Index} />
          <Route path="people-feed-back" component={FeedBack} />
          <Route path="govern-feed-back" component={GovernBack} />
          <Route path="appointment" component={Appointment} />
          <Route path="mediation-team" component={MediationTeam} />
          <Route path="mediation-detail/:id" component={MediationDetail} />
          <Route path="helper" component={Helper} />
          <Route path="helper-detail/:id" component={HelperDetail} />
          <Route path="guardians" component={Guardians} />
          <Route path="guardians-detail/:id" component={GuardiansDetail} />
          <Route path="order-list" component={OrderList} />
          <Route path="order-detail/:id" component={OrderDetail} />
          <Route path="chat" component={Chat} />
      </Route>
  </Router>
, document.getElementById('example'));

// ReactDOM.render(
//   <div className="body">
//     <h1>Stages list</h1>
//     <ul role="nav">
//       <li><h3>ListView + Carousel</h3></li>
//       <li><h3>Tabs + ...</h3></li>
//       <li><h3>Form + ...</h3></li>
//     </ul>
//     <App><Stage3 /></App>
//   </div>
// , document.getElementById('example'));