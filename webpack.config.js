"use strict";
exports.__esModule = true;
var path = require("path");
var postcss_preset_env_1 = require("postcss-preset-env");
var config = {
    mode: 'development',
    entry: {
        'react-hooks-bar-chart': './src/index.ts',
        'react-hooks-bar-chart.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'lib-umd'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'react-hooks-bar-chart',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: '.scss',
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]'
                            },
                            localsConvention: 'asIs',
                            importLoaders: 2,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: function () { return [
                                postcss_preset_env_1["default"]({
                                    autoprefixer: { grid: true }
                                })
                            ]; },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    name: 'assets/[name].[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]'
                            },
                            localsConvention: 'asIs',
                            importLoaders: 2,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        "react": {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};
exports["default"] = config;
