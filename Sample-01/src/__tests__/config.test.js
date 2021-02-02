import { getConfig } from "../config";

jest.mock(
  "../auth_config.json",
  () => ({
    domain: "test-domain.com",
    clientId: "123",
  }),
  { virtual: true }
);

describe("The config module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should omit the audience if not in the config json", () => {
    expect(getConfig().audience).not.toBeDefined();
  });

  it("should omit the audience if left at a default value", () => {
    const config = require("../auth_config.json");

    config.mockImplementation(() => ({
      domain: "test-domain.com",
      clientId: "123",
      audience: "YOUR_API_IDENTIFIER",
    }));

    expect(getConfig().audience).not.toBeDefined();
  });

  it("should return the audience if specified", () => {
    const config = require("../auth_config.json");

    config.mockImplementation(() => ({
      domain: "test-domain.com",
      clientId: "123",
      audience: "my-api",
    }));

    expect(getConfig().audience).not.toBeDefined();
  });
});
