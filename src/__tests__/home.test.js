import Home from "@/app/page";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";

describe("Homepage", () => {
    it("renders a landing page", () => {
      render(<Home />);
      expect(screen.getByTestId("landing-navbar")).toBeInTheDocument();
      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getByTestId("pointer")).toBeInTheDocument();
      expect(screen.getByTestId("searchbar")).toBeInTheDocument();
    });
  });