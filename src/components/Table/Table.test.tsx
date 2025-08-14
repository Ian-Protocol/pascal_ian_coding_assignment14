import { render, screen } from "@testing-library/react";
import { Table } from ".";

describe("Table Component", () => {
  const headers = ["Name", "Age"];
  const rows = [
    ["Alice", "30"],
    ["Bob", "25"],
  ];
  const footer = ["Total", "2"];

  it("renders and is visible", () => {
    render(<Table headers={headers} rows={rows} footer={footer} />);
    headers.concat(rows.flat(), footer).forEach((text) => {
      expect(screen.getByText(text)).toBeVisible();
    });
  });

  it("has grey background when disabled", () => {
    const { container } = render(
      <Table headers={headers} rows={rows} footer={footer} disabled />,
    );
    const table = container.querySelector("table") as HTMLElement;
    const styles = getComputedStyle(table);
    expect(styles.backgroundColor).toBe("rgb(240, 240, 240)"); // #f0f0f0
  });
});
