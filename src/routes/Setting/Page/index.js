import { Message, Lang, View, Button } from '../../../components';
import { getSetting } from '../../../utils/getSetting';
import { Component } from 'react';
import style from '../index.scss';

const { Split, Footer } = View;

class PageComponent extends Component {
  onDefault = () => {
    const Default = {
      timekey: this.state.timekey + 1,
      ...getSetting(this.Setting, this.props.setting, true),
    };
    this.setState(Default);
    Message.success(<Lang id="setting.message.reset" />);
  };

  onSave = () => {
    window.lang = this.state.lang;
    this.setState({ timekey: this.state.timekey + 1 });
    this.props.dispatch({ type: 'setting/update', payload: this.state });
    Message.success(<Lang id="setting.message.apply" />);
  };

  Footer = [
    <Split key="split" />,
    <Footer className={style.foot} key="footer" hasBtn>
      <div className={style.btngroup}>
        <Button onClick={this.onDefault}>
          <Lang id="setting.btn.reset" />
        </Button>
        <Button onClick={this.onSave}>
          <Lang id="setting.btn.apply" />
        </Button>
      </div>
    </Footer>,
  ];
}

export default { PageComponent };
