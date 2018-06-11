const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main',
        vendors: './src/vendors'
    },
    output: {
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {

                    less: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', {
							loader: 'postcss-loader', options: {
								sourceMap: process.env.NODE_ENV !== 'production'
							}
						}, 'less-loader'],
                        fallback: 'vue-style-loader'
                    }),

                    css: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', {
							loader: 'postcss-loader', options: {
								sourceMap: process.env.NODE_ENV !== 'production'
							}
						}],
                        fallback: 'vue-style-loader'
                    })
                }
            }
        },
        {
            test: /iview\/.*?js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', {
					loader: 'postcss-loader', options: {
						sourceMap: process.env.NODE_ENV !== 'production'
					}
				}],
                fallback: 'style-loader'
            })
        },

        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', {
					loader: 'postcss-loader', options: {
						sourceMap: process.env.NODE_ENV !== 'production'
					}
				}, 'less-loader'],
                fallback: 'style-loader'
            })
        },

        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=1024'
        },
        {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.runtime.esm.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default'],
            axios: "axios"
        })
    ]
};