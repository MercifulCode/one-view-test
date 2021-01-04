import { jsonReducer } from "../JSONReducer";

describe("jsonReducer", () => {
  const aUser: IUserResponse = {
    address: {
      city: "Springfield",
      street: "Fake St",
      suite: "123",
      zipcode: "12345",
      geo: {
        lat: "0",
        lng: "0",
      },
    },
    name: "Homer Simpson",
    company: {
      name: "Nuclear Power Plant",
      catchPhrase: "Excellent",
      bs: "Mmmmmm bees",
    },
    email: "chunkylover53@aol.com",
    id: 1,
    phone: "123-456-7890",
    username: "HomerJay",
    website: "",
  };

  const aPost: IPostResponse = {
    body: "This is a body",
    id: 1,
    title: "This is a title",
    userId: 1,
  };

  it("Should handle handle empty actions.", () => {
    const state = { userData: [], postData: [] };
    expect(jsonReducer(state, {})).toEqual({
      userData: [],
      postData: [],
    });
  });

  it("Should handle clearing empty actions.", () => {
    const state = { userData: [aUser], postData: [aPost] };
    expect(jsonReducer(state, {})).not.toEqual({
      userData: [],
      postData: [],
    });
    expect(jsonReducer(state, { type: "JSON_CLEAR" })).toEqual({
      userData: [],
      postData: [],
    });
  });

  it("Should handle setting user data.", () => {
    const state = { userData: [], postData: [] };
    expect(jsonReducer(state, { type: "USER_DATA_SET" })).not.toEqual({
      userData: [aUser],
      postData: [],
    });
  });

  it("Should handle setting post data.", () => {
    const state = { userData: [], postData: [] };
    expect(jsonReducer(state, { type: "POST_DATA_SET" })).not.toEqual({
      userData: [],
      postData: [aPost],
    });
  });
});
