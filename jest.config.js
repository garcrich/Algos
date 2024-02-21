module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      "^@cds/(.*)$": "<rootDir>/CommonDataStructures/$1"
    }
  };
  