module.exports = {
    root: true,
    extends: [
        'plugin:@typescript-eslint/recommended', //Typescriptのエラーを無視させないためのpackageの反映
        'next/core-web-vitals', //デフォルトの設定
        'plugin:tailwindcss/recommended', //TailwindにESLintをかけるpackageの反映
        'prettier', //Prettierの反映
    ],
    plugins: ['unused-imports'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module', //moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。
        project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定　(tsconfigRootDirからの相対パス)
        tsconfigRootDir: __dirname, //tsconfigRootDirはプロジェクトルートの絶対パスを指定する
    },
    rules: {
        //以下の設定で、Typescriptのルールを増やしている
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        'unused-imports/no-unused-imports-ts': 'warn',
        //以下の設定で、import分の順番にルールを持してみやすくする
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '{react,react-dom/**,react-router-dom}',
                        group: 'builtin',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
    },
};
