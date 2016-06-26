import React from 'react';
import cx from 'classnames';

import Row from './Row';
import Col from './Col';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selected: this.props.defaultValue};
  }

  componentDidMount() {
    if (typeof $ !== 'undefined') {
      $(this.tabsEl).tabs()
    }
    React.Children.map(children, function(child, idx) {
      let {active} = child.props;
      if(active) this.setState({selected: idx})
      
      }.bind(this))
  }

  componentWillMount(){
    this.forceUpdate()
  }

  _onSelect(idx, e) {
    if (this.props.hasOwnProperty('onChange')) {
      this.props.onChange(idx, e)
    }
    this.setState({selected: idx})
  }

  renderIndicator(){
    console.log(this.refs.active)
    if(this.refs.active){
      let {offsetLeft, offsetWidth} = this.refs.active.offsetParent;
      return <span className="indicator" style={{width: offsetWidth, left: offsetLeft}}></span> 
    }
  }

  render() {
    let {children, className, ...props} = this.props;
    const {selected} = this.state;
    return (
      <Row>
        <Col s={12}>
          <ul className={cx('tabs', className)} ref={(ref) => this.tabsEl = ref}>
            {
              React.Children.map(children, (child, idx) => {
                let {title, tabWidth, className, active, disabled} = child.props;
                //if (!tabWidth) {
                //  tabWidth = Math.floor(12 / count);
                //}
                let classes = {
                  tab: true,
                  disabled,
                  col: true
                };
                if (tabWidth) classes['s' + tabWidth] = true;
                let target = '#tab_' + idx;
                return (
                  <li className={cx(classes, className)} key={idx}>
                    <a 
                      href={target} 
                      ref={selected === idx ? 'active' : ''} 
                      className={selected === idx ? 'active' : ''}
                      {...disabled ? {} : {onClick : this._onSelect.bind(this, idx)}}>
                      {title}
                    </a>
                  </li>
                );
              })
            }
            {this.renderIndicator()}
          </ul>          
        </Col>
        {
          React.Children.map(children, (child, idx) => {
            let {title, tabWidth, className, active, disabled} = child.props;
            return selected === idx ? 
              <Col id={'tab_' + idx} s={12} key={'tab' + idx}>{child.props.children}</Col> : 
              null
            //return <Col id={'tab_' + idx} s={12} key={'tab' + idx}>{child.props.children}</Col>;
          })
        }
      </Row>
    );
  }
}

export default Tabs;
