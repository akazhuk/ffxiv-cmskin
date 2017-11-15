import { View } from '../../../components';
import style from '../index.scss';
import cyStyle from './index.scss';
import { createNs, createMobileNs, loadVersionJs } from './changyan';

const { Content, Split, Footer } = View;

const CHANGYAN_API = {
  appid: 'cytjdgeJ7',
  conf: 'prod_e0ae268a3629c862b8790af46e93c5cb',
};

export default () => {
  setTimeout(() => {
    createNs();
    createMobileNs();
    loadVersionJs();
    window.changyan.api.config(CHANGYAN_API, 100);
  });
  return [
    <Content key="content" className={style.content}>
      <div id="SOHUCS" className={cyStyle.command} />
    </Content>,
    <Split key="split" />,
    <Footer className={style.foot} key="footer" />,
  ];
};
