import * as React from "react";

export interface ITableRowProps {
  cellContent: string[];
  onClick?(e: any): void;
}

export class TableRow extends React.Component<ITableRowProps> {
  public render() {
    const { cellContent = [], onClick = () => {} } = this.props;
    return (
      <tr onClick={onClick}>
        {cellContent.map((content, index) => (
          <td key={index}>{content}</td>
        ))}
      </tr>
    );
  }
}
