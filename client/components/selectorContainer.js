import React, {Component}  from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TableRowTemplate from './tableRowTemplate';
import TextField from 'material-ui/TextField';
import ColorCheckList from './colorCheckList';
//import FlatColorList from './flatColorList';
//import MaterialColorList from './materialColorList';

const FlatColorsSample = [
  {name: 'turquoise', hex: '#1abc9c', click: 0},
  {name: 'emerland', hex: '#2ecc71', click: 0},
  {name: 'peterRiver', hex: '#3498db', click: 0},
  {name: 'amethyst', hex: '#9b59b6', click: 0},
  {name: 'wetAsphalt', hex: '#34495e', click: 0},
  {name: 'greenSea', hex: '#16a085', click: 0},
  {name: 'nephritis', hex: '#27ae60', click: 0},
  {name: 'belizeHol', hex: '#2980b9', click: 0},
  {name: 'wisteria', hex: '#8e44ad', click: 0},
  {name: 'midnightBlue', hex: '#2c3e50', click: 0},
  {name: 'sunFlower', hex: '#f1c40f', click: 0},
  {name: 'carrot', hex: '#e67e22', click: 0},
  {name: 'alizarin', hex: '#e74c3c', click: 0},
  {name: 'clouds', hex: '#ecf0f1', click: 0},
  {name: 'concrete', hex: '#95a5a6', click: 0},
  {name: 'orange', hex: '#f39c12', click: 0},
  {name: 'pumpkin', hex: '#d35400', click: 0},
  {name: 'pomegranate', hex: '#c0392b', click: 0},
  {name: 'silver', hex: '#bdc3c7', click: 0},
  {name: 'asbestos', hex: '#7f8c8d', click: 0}
];

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
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '500px',
      selected: [],
    };
  }

  handleRowSelection(rows){
    let css = '';
    rows.forEach(colorIndex =>{
      css += "@";
      css += FlatColorsSample[colorIndex].name;
      css += ": ";
      css += FlatColorsSample[colorIndex].hex;
      css += '\n';
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

    let cssTextAreaStyle={
      background: 'white',
    }

    return (
      <div className="backgroundBoard row">
        <div className="row reactLiveDemo">
        </div>
        <div className="row">
          <div className="col-md-7 colorScrollList">
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
                  <TableHeaderColumn colSpan="3" tooltip="Color Selector" style={{textAlign: 'center'}}>
                    Color Selector
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Color Name">Color Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Color Hex">Color Hex</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                colSpan="3"
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {FlatColorsSample.map((color, index) => (
                  <TableRow style={{fontSize:'20px', textAlign:'center', background:color.hex,
                  color: '#fff', fontWeight:'border',}} key={index}
                  selected={this.state.selected.indexOf(index) !== -1}
                  >
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{color.name}</TableRowColumn>
                    <TableRowColumn>{color.hex}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          <div className="cssBoard col-md-5">
            <TextField
              id="cssBoardId"
              value={this.state.cssString}
              style={cssTextAreaStyle}
              textareaStyle={cssLineStyle}
              disabled={true}
              fullWidth={true}
              multiLine={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectorContainer;
