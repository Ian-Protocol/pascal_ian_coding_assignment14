import { render, screen } from "@testing-library/react";
import { Label } from ".";

describe("Label Component", () => {
  it("renders and is visible", () => {
    render(<Label text="Sample Label" />);
    expect(screen.getByText("Sample Label")).toBeVisible();
  });

  it("has grey color when disabled", () => {
    const { container } = render(<Label text="Disabled Label" disabled />);
    const label = container.querySelector("label") as HTMLElement;
    const styles = getComputedStyle(label);
    expect(styles.color).toBe("rgb(153, 153, 153)"); // #999
  });
});
