import { render, screen } from "@testing-library/react";
import { Button } from ".";

// Testing the Button component.
// Test again, for we test again after we test again.
// TEST AGAIN! aeafdfsdf 

describe("Button Component", () => {
  it("renders and is visible", () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText("Test Button")).toBeVisible();
  });

  it("has grey background when disabled", () => {
    const { container } = render(<Button label="Disabled" disabled />);
    const button = container.querySelector("button");
    const styles = getComputedStyle(button!);
    expect(styles.backgroundColor).toBe("rgb(153, 153, 153)"); // #999
  });
});
