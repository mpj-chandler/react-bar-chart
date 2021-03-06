"use strict";
exports.__esModule = true;
var path = require("path");
var postcss_preset_env = require("postcss-preset-env");
var config = {
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
                test: /\.(sass|scss)$/,
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
                                postcss_preset_env({
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
    }
};
exports["default"] = config;
