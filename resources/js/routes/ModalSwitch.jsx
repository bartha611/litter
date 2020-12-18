import React, { lazy } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import PrivateRoute from '../utils/privateRoute';
import { WaitComponent } from './WaitComponent';
import Wrapper from '../components/utils/wrapper';
import Tweet from '../components/Tweet/Tweet';
import ModalWrapper from '../utils/ModalWrapper';
import CropPicture from '../components/Profile/CropPicture';

const Home = lazy(() => import(/*webpackChunkName: 'Home' */ '../views/Home'));

const Profile = lazy(() =>
  import(/* webpackChunkName: 'Profile' */ '../views/Profile')
);

const FollowerView = lazy(() =>
  import(/*webpackChunkName: 'Follower' */ '../views/FollowerView')
);

const Comment = lazy(() =>
  import(/* webpackChunkName: 'Comment' */ '../views/Comment')
);

const TweetCompose = lazy(() =>
  import(
    /* webpackChunkName: 'TweetCompose' */ '../components/Tweet/TweetCompose'
  )
);

const TweetUserView = lazy(() =>
  import(/* webpackChunkName: 'TweetUserView' */ '../views/TweetUserView')
);

const EditProfile = lazy(() =>
  import(/* webpachunkName: 'EditProfile' */ '../views/EditProfile')
);

const ModalSwitch = () => {
  const location = useLocation();
  let background = location.state && location.state.background;
  let tweet = location.state && location.state.tweet;
  console.log(background);

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
          <PrivateRoute
            exact
            background={background}
            path="/:name"
            component={Wrapper(Profile)}
          />
          <PrivateRoute
            exact
            background={background}
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
          <Switch>
            <PrivateRoute
              path="/compose/tweet"
              title="Compose Tweet"
              tweet={tweet}
              component={ModalWrapper(TweetCompose)}
            />
            <PrivateRoute
              path="/settings/profile"
              title="Edit Profile"
              component={ModalWrapper(EditProfile)}
            />
            <PrivateRoute
              path="/:name/status/:tweet/likes"
              title="Liked By"
              type="likes"
              component={ModalWrapper(TweetUserView)}
            />
            <PrivateRoute
              path="/:name/status/:tweet/retweets"
              title="Retweeted By"
              type="retweets"
              component={ModalWrapper(TweetUserView)}
            />
          </Switch>
        )}
      </Container>
    </div>
  );
};

export default ModalSwitch;
