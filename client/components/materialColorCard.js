import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import SampleModal from './sampleModal';
import Dialog from 'material-ui/Dialog';
import {MaterialColors} from '../../imports/collections/MaterialColors';

const customContentStyle = {
  width: '85%',
  height: '100%',
  maxWidth: 'none',
};

class MaterialColorCard extends Component{
  constructor(props){
    super(props);
    this.state = {open: false};
  }

  handleMaterialColorVote(event){
    event.preventDefault();
    var colorID = this.props.color._id;
    MaterialColors.update(colorID, {$inc: {click: 1}});
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
      <div className="materialColorCard" onClick={this.handleMaterialColorVote.bind(this)} >
        <img className="img-responsive" style={style}/>
        <div className="textblock">
          <div className="colorName">{this.props.color.name}</div>
          <div className="colorHex">{this.props.color.hex}</div>
          <div className="colorClick">{this.props.color.click}</div>
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

export default MaterialColorCard;
