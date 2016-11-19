import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const TableRowTemplate = ({color}) => {
  const {name, hex} = color;
  let colTextStyle = {
    background: hex,
    fontSize: '20px',
    textAlign: 'center',
    color: 'white',
  };
  let colStyle = {
    width: '100%',
    height: '100%',
    background: hex,
  };

  return(
    <div>
      <TableRowColumn className="colStyle" style={colTextStyle}>{name}</TableRowColumn>
      <TableRowColumn className="colStyle" style={colTextStyle}>{name}</TableRowColumn>
      <TableRowColumn className="colStyle" style={colTextStyle}>{hex}</TableRowColumn>
      <TableRowColumn style={colStyle}></TableRowColumn>
    </div>
  );
}

export default TableRowTemplate;
