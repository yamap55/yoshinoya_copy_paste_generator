// filepath: /project/tests/page.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // 修正
import Home from "../src/app/page";

// next/configのモックを追加
jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    basePath: "/base-path",
  },
}));

describe("Home", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });

  it('renders the "Get started by editing" text', () => {
    render(<Home />);
    const getStartedText = screen.getByText(/Get started by editing/i);
    expect(getStartedText).toBeInTheDocument();
  });

  it('renders the "Deploy now" link', () => {
    render(<Home />);
    const deployLink = screen.getByText(/Deploy now/i);
    expect(deployLink).toBeInTheDocument();
  });

  it('renders the "Read our docs" link', () => {
    render(<Home />);
    const docsLink = screen.getByText(/Read our docs/i);
    expect(docsLink).toBeInTheDocument();
  });

  it("renders the footer links", () => {
    render(<Home />);
    const learnLink = screen.getByText(/Learn/i);
    const examplesLink = screen.getByText(/Examples/i);
    const nextjsLink = screen.getByText(/Go to nextjs.org/i);
    expect(learnLink).toBeInTheDocument();
    expect(examplesLink).toBeInTheDocument();
    expect(nextjsLink).toBeInTheDocument();
  });
});
