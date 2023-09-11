// jest.config.ts

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom", //or jsdom? 
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|jpg|mp4)$":
      "<rootDir>/src/__test__/__mocks__/fileMock.js",
  },
  // setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTests.js"],
};
