import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import Router from './router'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


const App = () => {
  return <div>1111</div>
}
ReactDOM.render(

  <ConfigProvider locale={zhCN} >
    <GlobalStyle />
    <Router />
  </ConfigProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
