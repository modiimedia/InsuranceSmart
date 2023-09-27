/**
 * @type {import('prettier').Config}
 */
module.exports = {
    tabWidth: 4,
    endOfLine: 'lf',
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    plugins: ['prettier-plugin-go-template'],
    overrides: [
        {
            files: ['*.html'],
            options: {
                parser: 'go-template',
            },
        },
    ],
};
