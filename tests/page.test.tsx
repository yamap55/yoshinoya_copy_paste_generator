// filepath: /project/tests/page.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // 修正
import Home from "../src/app/page";

// next/configのモックを追加
jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    basePath: "/base-path",
  },
}));

describe("Home", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByText("吉野家コピペジェネレータ");
    expect(heading).toBeInTheDocument();
  });

  it("renders all form fields", () => {
    render(<Home />);
    const fields = [
      "誰に訴えますか？",
      "どこで？",
      "どうした？",
      "そしたらどういう状態だったの？",
      "だからどうだったの？",
      "んで、もっとよく見たらどうだった？",
      "何「ごとき」で来てる人が多い？",
      "パパは何をしました（言った）か？",
      "なにをあげますか",
      "そのかわりどうさせますか？",
      "どこのヤツとケンカがはじまってもおかしくないですか？",
      "んで、やっとどうできましたか？",
      "その時隣の奴は何といってましたか？",
      "↑の質問に対してどう問い詰めたいですか？",
      "通のあなたが頼むのは？（まん中は必ず書いてください）",
      "上の質問のまん中はどうなの？",
      "その代わりどうなの？",
      "次からダレにマークされますか？",
      "ド素人がするべき事は",
    ];

    fields.forEach((labelText) => {
      const label = screen.getByText(labelText);
      expect(label).toBeInTheDocument();
    });
  });

  it("updates the generated text when input values change", () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("吉野家");
    fireEvent.change(input, { target: { value: "すき家" } });

    const generatedText = screen.getByText(/昨日、すき家行ったんです。すき家。/);
    expect(generatedText).toBeInTheDocument();
  });

  it("renders the default generated text when no inputs are provided", () => {
    render(<Home />);

    const defaultText = screen.getByText(/昨日、近所の吉野家行ったんです。吉野家。/);
    expect(defaultText).toBeInTheDocument();
  });
});
