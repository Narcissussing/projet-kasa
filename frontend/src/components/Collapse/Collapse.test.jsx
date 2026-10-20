import { describe, expect, it } from "vitest";
import Collapse from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function renderCollapse() {
  return render(<Collapse titre="Titre-Collapse" contenu="Test contenu" />);
}

describe("Collapse", () => {
  it("doit afficher le titre", () => {
    renderCollapse();
    expect(screen.getByRole("button", { name: "Titre-Collapse" })).toBeInTheDocument();
  });
  it("doit être fermé par défaut", () => {
    renderCollapse();
    const button = screen.getByRole("button", { name: "Titre-Collapse" });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
  it("doit s'ouvrir au clic sur le titre", async () => {
    const user = userEvent.setup();
    renderCollapse();
    const button = screen.getByRole("button", { name: "Titre-Collapse" });
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
  it("doit se refermer au second clic", async () => {
    const user = userEvent.setup();
    renderCollapse();
    const button = screen.getByRole("button", { name: "Titre-Collapse" });
    await user.click(button);
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});