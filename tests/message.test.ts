import { getMessage } from "../src/utils/message";

// getMessage関数のテスト
describe("getMessage", () => {
  test("should return 'Hello, TypeScript!'", () => {
    const result = getMessage();
    expect(result).toBe("Hello, TypeScript!");
  });
});
