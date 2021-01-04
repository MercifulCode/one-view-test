import * as React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { PostTable } from "./components/PostTable";
import { UserTable } from "./components/UserTable";
import { store } from "./Store";

export interface IAppState {
  currentUser: IUserResponse | null;
}

export class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  public render() {
    const { currentUser } = this.state;

    return (
      <Provider store={store}>
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <UserTable onClick={this.onClickCallback}></UserTable>
          {currentUser ? this.renderPostTable(currentUser) : null}
        </div>
      </Provider>
    );
  }

  protected renderPostTable(currentUser: IUserResponse) {
    return (
      <div>
        <br />
        {currentUser.name}'s Posts:
        <PostTable currentUser={currentUser} />
      </div>
    );
  }

  protected onClickCallback = (user: IUserResponse) => {
    this.setState({
      currentUser: user,
    });
  };
}

export default App;
