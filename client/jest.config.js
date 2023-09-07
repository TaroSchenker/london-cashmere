// jest.config.ts

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|jpg|mp4)$":
      "<rootDir>/src/test/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};