/**
 * jest.config.js
 *
 * The enclosed material is Lenovo confidential and is the sole property of Lenovo.
 * Unauthorized disclosure, distribution or other use of this material is expressly prohibited.
 *
 * © 2021 Lenovo Group Ltd.
 *
 * Created on Aug 9, 2021.
 */

 module.exports = {
    testEnvironment: "node",
    roots: ["<rootDir>/tests/unit","<rootDir>/tests/e2e"],
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    verbose: false,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/**/*.{ts,js}"],
  };