import { render, screen } from "@testing-library/react";
import { RadioButton } from ".";

describe("RadioButton Component", () => {
  it("renders and is visible", () => {
    render(<RadioButton label="Option A" name="test" value="a" />);
    expect(screen.getByText("Option A")).toBeVisible();
  });

  it("has grey color when disabled", () => {
    const { container } = render(
      <RadioButton label="Option A" name="test" value="a" disabled />,
    );
    const label = container.querySelector("label") as HTMLElement;
    const styles = getComputedStyle(label);
    expect(styles.color).toBe("rgb(153, 153, 153)"); // #999
  });
});
