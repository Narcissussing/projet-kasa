import { describe, expect, it } from "vitest";
import Banner from ".";
import { render, screen } from "@testing-library/react";

describe("Banner", () => {
  it("doit afficher l'image", () => {
    render(<Banner image="/path/to/image.jpg" />);

    expect(document.querySelector("img")).toHaveAttribute(
      "src",
      "/path/to/image.jpg",
    );
  });

  it("doit afficher le texte", () => {
    render(<Banner image="/path/to/image.jpg" texte="Test Banner" />);
    expect(
      screen.getByRole("heading", { name: "Test Banner" }),
    ).toBeInTheDocument();
  });

  it("n'affiche pas de titre sans texte", () => {
    render(<Banner image="/path/to/image.jpg" />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
