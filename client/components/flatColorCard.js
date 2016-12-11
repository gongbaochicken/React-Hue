import React, {Component} from 'react';
import {FlatColors} from '../../imports/collections/FlatColors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SampleModal from './sampleModal';

const customContentStyle = {
  width: '85%',
  height: '100%',
  maxWidth: 'none',
};

class FlatColorCard extends Component{
  constructor(props){
    super(props);
    this.state = {open: false};
  }

  handleFlatColorVote(event){
    event.preventDefault();
    let colorID = this.props.color._id;
    FlatColors.update(colorID, {$inc: {click: 1}});
    this.setState({open: true});
  }

  handleClose(props){
    this.setState({open: false});
  };

  render(){
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];
    var style = {
      background: this.props.color.hex
    };
    return (
      <div>
        <div className="flatColorCard" onClick={this.handleFlatColorVote.bind(this)} ref={this.props.color}>
          <img className="img-responsive" style={style} />
          <div className="textblock">
            <div className="colorName">{this.props.color.name}</div>
            <div className="colorHex">{this.props.color.hex}</div>
            <div className="colorClick">{this.props.color.click}</div>
          </div>
        </div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle = {customContentStyle}
          onRequestClose={this.handleClose.bind(this)}
        >
          <SampleModal color={this.props.color}/>
        </Dialog>
      </div>
    );
  }
};

export default FlatColorCard;
