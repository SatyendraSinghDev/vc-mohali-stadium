export default {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  // coverageThreshold: {
  //   global: {
  //     lines: 80,
  //   },
  // },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
}
