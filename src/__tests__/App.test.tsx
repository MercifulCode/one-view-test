import { App } from "../App";
import { shallow } from "enzyme";

describe("App", () => {
  it("Should render the app.", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
