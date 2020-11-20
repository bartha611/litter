import React, { lazy } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import PrivateRoute from '../utils/privateRoute';
import { WaitComponent } from './WaitComponent';
import Wrapper from '../components/utils/wrapper';
import Tweet from '../components/Tweet/Tweet';

const Home = lazy(() => import(/*webpackChunkName: 'Home' */ '../views/Home'));

const Profile = lazy(() =>
  import(/* webpackChunkName: 'Profile' */ '../views/Profile')
);

const Follower = lazy(() =>
  import(/*webpackChunkName: 'Follower' */ '../views/Follower')
);

const Comment = lazy(() =>
  import(/* webpackChunkName: 'Comment' */ '../views/Comment')
);

const TweetCompose = lazy(() =>
  import(
    /* webpackChunkName: 'TweetCompose' */ '../components/Tweet/TweetCompose'
  )
);

const ModalSwitch = () => {
  const location = useLocation();
  let background = location.state && location.state.background;
  let tweet = location.state && location.state.tweet;

  return (
    <div>
      <Container>
        <Switch location={background || location}>
          <PrivateRoute
            background={background}
            exact
            path="/"
            component={Wrapper(Home)}
          />
          <PrivateRoute exact path="/:name" component={Wrapper(Profile)} />
          <PrivateRoute path="/:name/following" component={Wrapper(Follower)} />
          <PrivateRoute
            path="/:name/status/:tweet"
            component={Wrapper(Comment)}
          />
          <PrivateRoute
            path="/compose/tweet"
            tweet={tweet}
            component={Wrapper(TweetCompose)}
          />
        </Switch>
        {background && (
          <PrivateRoute
            path="/compose/tweet"
            tweet={tweet}
            component={WaitComponent(TweetCompose)}
          />
        )}
      </Container>
    </div>
  );
};

export default ModalSwitch;
