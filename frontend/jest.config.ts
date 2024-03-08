import type { Config } from 'jest';
import nextJest from 'next/jest.js';

//* nextJest({})
//Next.jsのためのJest設定を生成する関数
const createJestConfig = nextJest({
    // JestがNext.jsの設定を読み込むためのディレクトリを指定
    dir: './',
});

//Jestのカスタム設定オブジェクト
const customJestConfig: Config = {
    coverageProvider: 'v8',
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(customJestConfig);
