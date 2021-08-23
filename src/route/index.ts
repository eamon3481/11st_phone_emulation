import Alert from '@src/page/AlertPage';
import Home from '@src/page/HomePage';
import Memo from '@src/page/MemoPage';
import Photo from '@src/page/PhotoPage';

import Component, { constructorType } from '@src/lib/Component';

import ErrorPage from '@src/Error';

export type routeType = {
  '/': constructorType<void, Component>;
  '/alert': constructorType<void, Component>;
  '/memo': constructorType<void, Component>;
  '/photo': constructorType<void, Component>;
  '/error': constructorType<void, Component>;
};

const routes: routeType = {
  '/': Home,
  '/alert': Alert,
  '/memo': Memo,
  '/photo': Photo,
  '/error': ErrorPage,
};

export default routes;
