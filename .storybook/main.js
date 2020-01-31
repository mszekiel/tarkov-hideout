const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/preset-typescript', '@storybook/addon-knobs/register', '@storybook/addon-actions/register'],
    webpackFinal: async config => {
        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                use:
                    [
                        { loader: require.resolve('ts-loader') },
                        { loader: require.resolve('react-docgen-typescript-loader') },
                    ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
                use: [
                    {
                        loader: require.resolve('url-loader'),
                    },
                ],
            },
        );
        config.output.publicPath = "http://localhost:9001/"
        config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
        return config;
    },
}