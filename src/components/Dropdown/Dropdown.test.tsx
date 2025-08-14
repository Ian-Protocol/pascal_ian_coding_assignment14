import { render, screen } from "@testing-library/react";
import { Dropdown } from ".";
import { DropdownOption } from "./Dropdown.types";

describe("Dropdown Component", () => {
  const options: DropdownOption[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  it("renders and is visible", () => {
    render(<Dropdown options={options} />);
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeVisible();
    });
  });

  it("has grey background when disabled", () => {
    const { container } = render(<Dropdown options={options} disabled />);
    const select = container.querySelector("select") as HTMLElement;
    const styles = getComputedStyle(select);
    expect(styles.backgroundColor).toBe("rgb(240, 240, 240)"); // #f0f0f0
  });
});
