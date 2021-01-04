import { TableRow } from "../TableRow";
import { shallow } from "enzyme";

describe("TableRow", () => {
  it("Should render when given no data", () => {
    const wrapper = shallow(<TableRow cellContent={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render when given some data", () => {
    const wrapper = shallow(<TableRow cellContent={["One", "Two"]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
