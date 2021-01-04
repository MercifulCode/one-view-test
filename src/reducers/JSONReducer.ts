const actions = {
  userDataSet: "USER_DATA_SET",
  postDataSet: "POST_DATA_SET",
  clear: "JSON_CLEAR",
};

const initialState = {
  userData: [] as IUserResponse[],
  postData: [] as IPostResponse[],
};

export const fetchJson = (address: string) => fetch(address);

export const fetchUserData = (address: string) => {
  return async (dispatch: any) => {
    try {
      const data = await (await fetchJson(address)).json();

      return dispatch({
        type: "USER_DATA_SET",
        payload: data,
      });
    } catch (err) {
      return dispatch({
        err,
        type: "ERROR",
      });
    }
  };
};

export const fetchPostData = (address: string) => {
  return async (dispatch: any) => {
    try {
      const data = await (await fetchJson(address)).json();
      return dispatch({
        type: "POST_DATA_SET",
        payload: data,
      });
    } catch (err) {
      return dispatch({
        err,
        type: "ERROR",
      });
    }
  };
};

export const jsonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.userDataSet:
      return {
        ...state,
        userData: action.payload,
      };
    case actions.postDataSet:
      return {
        ...state,
        postData: action.payload,
      };
    case actions.clear:
      return {
        userData: initialState.userData,
        postData: initialState.postData,
      };
    default:
      return state;
  }
};
