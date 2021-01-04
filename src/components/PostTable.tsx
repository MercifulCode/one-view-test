import * as React from "react";
import { connect } from "react-redux";
import { TableRow } from "./TableRow";
import { fetchPostData } from "../reducers/JSONReducer";
import { bindActionCreators, Dispatch } from "redux";

export interface IPostTableProps {
  currentUser: IUserResponse;
  data: IPostResponse[];
  dispatchJSONFetch(fetchFn: any): void;
}

export class PostTableClass extends React.Component<IPostTableProps> {
  public componentDidMount() {
    const { currentUser } = this.props;
    this.props.dispatchJSONFetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${currentUser.id}`
    );
  }

  public componentDidUpdate(prevProps: IPostTableProps) {
    const { currentUser, dispatchJSONFetch } = this.props;
    if (currentUser.id !== prevProps.currentUser.id) {
      dispatchJSONFetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${currentUser.id}`
      );
    }
  }

  public render() {
    const { data } = this.props;
    return (
      <table>
        <thead>
          <TableRow cellContent={["Title", "Body"]} />
        </thead>
        <tbody>
          {data.map((datum, index) => (
            <TableRow
              key={`post_table_row_${index}`}
              cellContent={[datum.title, datum.body]}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state: { postData: IPostResponse[] }) => ({
  data: state.postData,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      dispatchJSONFetch: fetchPostData,
    },
    dispatch
  );

export const PostTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTableClass);
