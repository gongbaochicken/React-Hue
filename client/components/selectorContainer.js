import React, {Component}  from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TableRowTemplate from './tableRowTemplate';
import TextField from 'material-ui/TextField';
import CopyToClipboard from 'react-copy-to-clipboard';
import MaterialColorSample from '../data/materialColors';

class SelectorContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      cssString: "",
      fixedHeader: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '750px',
      selected: [],
    };
  }

  handleRowSelection(rows){
    let css = '';
    rows.forEach(colorIndex =>{
      css += "@";
      css += MaterialColorSample[colorIndex].name;
      css += ": ";
      css += MaterialColorSample[colorIndex].hex;
      css += ';\n';
    });
    this.setState({
      selected: rows,
      cssString: css,
    });
  }

  render(){
    let cssLineStyle = {
      background: 'white',
      color: 'green'
    };

    let cssTextAreaStyle = {
      background: 'white',
    };

    let cssStr = this.state.cssString;

    return (
      <div className="backgroundBoard row">
        <div className="row">
          <div className="col-md-7 col-lg-7 col-sm-7 colorScrollList">
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
              onRowSelection = {this.handleRowSelection.bind(this)}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                <TableRow>
                  <TableHeaderColumn colSpan="3" tooltip="Color Selector" style={{fontSize: '22px', textAlign: 'center'}}>
                    Color Selector
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip="The ID" style={{fontSize: '18px', textAlign: 'center'}}>ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Color Name" style={{fontSize: '18px', textAlign: 'center'}}>Color Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Color Hex" style={{fontSize: '18px', textAlign: 'center'}}>Color Hex</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                colSpan="3"
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
                displayBorder="false"
              >
                {MaterialColorSample.map((color, index) => (
                  <TableRow style={{fontSize:'20px', textAlign:'center', background:color.hex,
                  color: '#fff', fontWeight:'border',}} key={index}
                  selected={this.state.selected.indexOf(index) !== -1}
                  >
                    <TableRowColumn style={{fontSize: '16px', textAlign: 'center'}}>{index}</TableRowColumn>
                    <TableRowColumn style={{fontSize: '16px', textAlign: 'center'}}>{color.name}</TableRowColumn>
                    <TableRowColumn style={{fontSize: '16px', textAlign: 'center'}}>{color.hex}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          <div className="cssBoard col-md-5 col-lg-5 col-sm-5">
            <TextField
              id="cssBoardId"
              value={this.state.cssString}
              style={cssTextAreaStyle}
              textareaStyle={cssLineStyle}
              disabled={true}
              fullWidth={true}
              multiLine={true}
            />
            <CopyToClipboard text={cssStr} >
              <button className="btn btn-success copyBtn">Copy to clipboard</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectorContainer;
