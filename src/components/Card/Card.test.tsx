import { render, screen } from "@testing-library/react";
import { Card } from ".";

describe("Card Component", () => {
  it("renders and is visible", () => {
    render(<Card title="Card Title" content="Card Content" />);
    expect(screen.getByText("Card Title")).toBeVisible();
    expect(screen.getByText("Card Content")).toBeVisible();
  });

  it("has grey background when disabled", () => {
    const { container } = render(
      <Card title="Disabled" content="Content" disabled />,
    );
    const card = container.firstChild as HTMLElement;
    const styles = getComputedStyle(card);
    expect(styles.backgroundColor).toBe("rgb(240, 240, 240)"); // #f0f0f0
  });
});
