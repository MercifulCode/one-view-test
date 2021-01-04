import { UserTableClass } from "../UserTable";
import { shallow } from "enzyme";

describe("UserTable", () => {
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
  it("Should render when given no data", () => {
    const wrapper = shallow(
      <UserTableClass
        data={[]}
        dispatchJSONFetch={jest.fn()}
        onClick={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render when given some data", () => {
    const wrapper = shallow(
      <UserTableClass
        data={[aUser]}
        dispatchJSONFetch={jest.fn()}
        onClick={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
