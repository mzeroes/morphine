module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'no-console': 'off',
        'comma-dangle': 'off',
        quotes: ["error", "double"],
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }],
        'global-require': 'off',
        'no-unused-vars': 'off'
    },
    'globals': {
        "fetch": false
    }

}
