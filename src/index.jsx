import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

import App from './components/App';
// import FeedBack from './views/people-feed-back/index';
// import GovernBack from './views/govern-feed-back/index';
// import MediationTeam from './views/mediation-team/index';
// import Appointment from './views/appointment/index';
// import Helper from './views/helper/index'
// import Guardians from './views/guardians/index'
// import GuardiansDetail from './views/guardians/detail'
// import HelperDetail from './views/helper/detail'
// import MediationDetail from './views/mediation-team/detail'
// import OrderList from './views/order/orderList'
// import OrderDetail from './views/order/orderDetail'
// import Chat from './views/chat';


import './index.less';

import Loadable from 'react-loadable';
// import Loading from './Loading';
class Loading extends React.Component {
    render () {
        return null;
    }
}

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

const FeedBack = Loadable({
    loader: () => import('./views/people-feed-back/index'),
    loading: Loading,
});
const GovernBack = Loadable({
    loader: () => import('./views/govern-feed-back/index'),
    loading: Loading,
});

const Appointment = Loadable({
    loader: () => import('./views/appointment/index'),
    loading: Loading,
});


const MediationTeam = Loadable({
    loader: () => import('./views/mediation-team/index'),
    loading: Loading,
});


const MediationDetail = Loadable({
    loader: () => import('./views/mediation-team/detail'),
    loading: Loading,
});

const Helper = Loadable({
    loader: () => import('./views/helper/index'),
    loading: Loading,
});

const Guardians = Loadable({
    loader: () => import('./views/guardians/index'),
    loading: Loading,
});

const HelperDetail = Loadable({
    loader: () => import('./views/helper/detail'),
    loading: Loading,
});

const GuardiansDetail = Loadable({
    loader: () => import('./views/guardians/detail'),
    loading: Loading,
});

const OrderList = Loadable({
    loader: () => import('./views/order/orderList'),
    loading: Loading,
});
const OrderDetail = Loadable({
    loader: () => import('./views/order/orderDetail'),
    loading: Loading,
});
const Chat = Loadable({
    loader: () => import('./views/chat'),
    loading: Loading,
});



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