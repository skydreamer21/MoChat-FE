module.exports = {
  root: true,
  env: { browser: true, es2020: true },
   // extends: 프로젝트에 사용할 eslint 규칙 set
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // parser: typescript를 parser로 사용
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  // plugins: 사용할 eslint 플러그인 설정
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'linebreak-style': 0,
    // 싱글 쿼터 사용
    quotes: ['error', 'single'],
    '@typescript-eslint/quotes': ['error', 'single'],
    // 사용 안한 변수 경고
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // 선언 전 사용 시 경고
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    // 아래 확장자들은 import 시 확장자 생략
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
