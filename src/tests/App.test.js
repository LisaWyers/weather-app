import { render } from "@testing-library/react";
import App from "/Users/admin/projects/weather-app/src/components/App.js";

describe("App", () => {
  it("Renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
