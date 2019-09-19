module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy'
  },
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'd.ts',
    'scss'
  ],
  testMatch: [
    '**/?(*.)test.ts?(x)'
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!node_modules/**/*',
    '!**/index.tsx'
  ]
}
