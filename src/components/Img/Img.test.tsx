import { render, screen } from "@testing-library/react";
import { Img } from ".";

describe("Img Component", () => {
  const src = "test.jpg";
  const alt = "Sample Image";

  it("renders and is visible", () => {
    render(<Img src={src} alt={alt} />);
    expect(screen.getByAltText(alt)).toBeVisible();
  });

  it("applies grayscale filter when disabled", () => {
    const { container } = render(<Img src={src} alt={alt} disabled />);
    const img = container.querySelector("img") as HTMLElement;
    const styles = getComputedStyle(img);
    expect(styles.filter).toBe("grayscale(100%) opacity(0.5)");
  });
});
