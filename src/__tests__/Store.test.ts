import { store } from "../Store";

describe("App Store", () => {
  it("Should match the existing snapshot.", () => {
    expect(store).toMatchSnapshot();
  });
});
