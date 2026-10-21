import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Slideshow from ".";
import { logements } from "../../test/fixtures/logements";

const plusieursPhotos = logements[0]; // 5 photos
const unePhoto = logements[1]; // 1 photo

describe("Slideshow", () => {
  it("affiche la première image, les flèches et le compteur", () => {
    render(
      <Slideshow
        imageUrls={plusieursPhotos.pictures}
        titre={plusieursPhotos.title}
      />,
    );

    expect(
      screen.getByRole("img", { name: `Photo 1 de ${plusieursPhotos.title}` }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Image précédente" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Image suivante" }),
    ).toBeInTheDocument();
    expect(screen.getByText("1/5")).toBeInTheDocument();
  });

  it("change l'image principale lorsqu'on clique sur les boutons de navigation", async () => {
    const user = userEvent.setup();
    render(
      <Slideshow
        imageUrls={plusieursPhotos.pictures}
        titre={plusieursPhotos.title}
      />,
    );
    const btnSuivant = screen.getByRole("button", { name: "Image suivante" });
    const btnPrecedent = screen.getByRole("button", {
      name: "Image précédente",
    });
    const photo = (n) =>
      screen.getByRole("img", {
        name: `Photo ${n} de ${plusieursPhotos.title}`,
      });

    await user.click(btnSuivant);
    expect(photo(2)).toBeInTheDocument();

    await user.click(btnSuivant);
    expect(photo(3)).toBeInTheDocument();

    await user.click(btnPrecedent);
    expect(photo(2)).toBeInTheDocument();

    await user.click(btnPrecedent);
    expect(photo(1)).toBeInTheDocument();

    // avant la première : la dernière
    await user.click(btnPrecedent);
    expect(photo(5)).toBeInTheDocument();

    // après la dernière : la première
    await user.click(btnSuivant);
    expect(photo(1)).toBeInTheDocument();
  });

  it("met à jour le compteur", async () => {
    const user = userEvent.setup();
    render(
      <Slideshow
        imageUrls={plusieursPhotos.pictures}
        titre={plusieursPhotos.title}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Image suivante" }));
    expect(screen.getByText("2/5")).toBeInTheDocument();
  });

  it("masque les flèches et le compteur si une seule image est présente", () => {
    render(<Slideshow imageUrls={unePhoto.pictures} titre={unePhoto.title} />);

    expect(
      screen.queryByRole("button", { name: "Image précédente" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Image suivante" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("1/1")).not.toBeInTheDocument();
  });
});
