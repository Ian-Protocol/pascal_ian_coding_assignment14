import { render, screen } from "@testing-library/react";
import { HeroImage } from ".";

describe("HeroImage Component", () => {
  const src = "test.jpg";
  const alt = "Hero Image";

  it("renders and is visible", () => {
    render(<HeroImage src={src} alt={alt} />);
    expect(screen.getByAltText(alt)).toBeVisible();
  });

  it("applies grayscale filter when disabled", () => {
    const { container } = render(<HeroImage src={src} alt={alt} disabled />);
    const img = container.querySelector("img") as HTMLElement;
    const styles = getComputedStyle(img);
    expect(styles.filter).toBe("grayscale(100%) opacity(0.5)");
  });
});
