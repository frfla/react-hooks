module.exports = {
  testEnvironment: 'jsdom',
  testRegex: '/src/test/.*\\.test\\.(ts|tsx)?$',
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/test/'],
  coverageReporters: ['text', 'html']
}
