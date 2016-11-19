import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import TableRowTemplate from './tableRowTemplate';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

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

export default class ColorCheckList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cssString: "",
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '600px',
    };
  }

  handleRowSelection(key){
    let css = "";
    key.forEach(function(i) {
      css += FlatColorsSample[i].hex;
    });

    console.log("last: " + this.state.cssString);
    console.log(css);
    this.setState({cssString: css});
    console.log("new: " + this.state.cssString);
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
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
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
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
              color: '#fff', fontWeight:'border',}} key={index} selected={color.selected}
              >
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{color.name}</TableRowColumn>
                <TableRowColumn>{color.hex}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
