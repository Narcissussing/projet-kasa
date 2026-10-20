import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { logements } from "../../test/fixtures/logements";
import LogementCard from ".";

const renderLogementCard = () => {
  return render(
    <MemoryRouter>
      <LogementCard logement={logements[0]} />
    </MemoryRouter>
  );
};

describe("LogementCard", () => {
  it("doit etre un lien vers le logement", () => {
    renderLogementCard();
    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/logement/${logements[0].id}`);
  });
  it("doit afficher la photo du logement", () => {
    renderLogementCard();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", logements[0].cover);
  });
  it("doit afficher le titre du logement", () => {
    renderLogementCard();
    const title = screen.getByRole("heading", { level: 2, name: logements[0].title });
    expect(title).toBeInTheDocument();
  });
});
