import { render, screen } from "@testing-library/react";
import { Text } from ".";

describe("Text Component", () => {
  it("renders and is visible", () => {
    render(<Text content="Sample text" />);
    expect(screen.getByText("Sample text")).toBeVisible();
  });

  it("has grey color when disabled", () => {
    const { container } = render(<Text content="Disabled text" disabled />);
    const p = container.querySelector("p") as HTMLElement;
    const styles = getComputedStyle(p);
    expect(styles.color).toBe("rgb(153, 153, 153)"); // #999
  });
});
