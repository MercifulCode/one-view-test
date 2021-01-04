import * as React from "react";
import { connect } from "react-redux";
import { TableRow } from "./TableRow";
import { fetchUserData } from "../reducers/JSONReducer";
import { bindActionCreators, Dispatch } from "redux";

export interface IUserTableProps {
  data: IUserResponse[];
  dispatchJSONFetch(fetchFn: any): void;
  onClick(currentUser: IUserResponse): void;
}

export interface IUserTableState {
  nameFilter: string;
}

export class UserTableClass extends React.Component<
  IUserTableProps,
  IUserTableState
> {
  constructor(props: IUserTableProps) {
    super(props);
    this.state = {
      nameFilter: "",
    };
  }

  public componentDidMount() {
    this.props.dispatchJSONFetch("https://jsonplaceholder.typicode.com/users");
  }

  public render() {
    return (
      <div>
        {this.renderSearchInput()}
        {this.renderTable()}
      </div>
    );
  }

  protected renderTable() {
    const { data, onClick } = this.props;
    const { nameFilter } = this.state;

    return (
      <table>
        <thead>
          <TableRow cellContent={["Name", "Email", "City", "Company"]} />
        </thead>
        <tbody>
          {data.map(
            (datum, index) =>
              datum.name
                .toLocaleLowerCase()
                .includes(nameFilter.toLocaleLowerCase()) && (
                <TableRow
                  key={`user_table_row_${index}`}
                  cellContent={[
                    datum.name,
                    datum.email,
                    datum.address.city,
                    datum.company.name,
                  ]}
                  onClick={() => {
                    onClick(datum);
                  }}
                />
              )
          )}
        </tbody>
      </table>
    );
  }

  protected renderSearchInput() {
    const { nameFilter } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filter By Name:
          <br />
          <input type="text" value={nameFilter} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  protected handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    this.setState({ nameFilter: event.target.value });
  };

  protected handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nameFilter: event.target.value });
  };
}

const mapStateToProps = (state: { userData: IUserResponse[] }) => ({
  data: state.userData,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      dispatchJSONFetch: fetchUserData,
    },
    dispatch
  );

export const UserTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTableClass);
