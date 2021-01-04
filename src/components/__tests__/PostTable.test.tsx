import { PostTableClass } from "../PostTable";
import { shallow } from "enzyme";

describe("PostTable", () => {
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

  it("Should render when given a user.", () => {
    const wrapper = shallow(
      <PostTableClass
        currentUser={aUser}
        data={[]}
        dispatchJSONFetch={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
