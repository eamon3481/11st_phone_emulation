import Alert from '@src/page/Alert';
import Home from '@src/page/Home';
import Memo from '@src/page/Memo';
import Photo from '@src/page/Photo';


import Component from '@src/lib/Component';
import { constructorType } from '@src/lib/componentLibType';

export type routeType = {
    '/': constructorType<void,Component>,
    '/alert': constructorType<void,Component>,
    '/memo': constructorType<void,Component>,
    '/photo': constructorType<void,Component>,
}


const routes : routeType= {
  '/': Home,
  '/alert': Alert,
  '/memo': Memo,
  '/photo': Photo,
};


export default routes;
