import DotEnv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

function webpackConfig() {
	const rulesJS = {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: { loader: 'babel-loader' },
	};

	const rulesCSS = {
		test: /\.css$/,
		exclude: /node_modules/,
		use: ['style-loader', 'css-loader'],
	};

	const rulesIMG = {
		type: 'asset',
		test: /\.(png|svg|gif)$/,
		exclude: /node_modules/,
	};

	const rules = [rulesJS, rulesCSS, rulesIMG];

	const serve = { hot: true, open: true, port: 3000, compress: true };

	const html5 = {
		template: 'src/main.html',
		favicon: 'src/assets/favicon.png',
		minify: {
			collapseWhitespace: true,
			removeComments: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			useShortDoctype: true,
			removeStyleLinkTypeAttributese: true,
			removeOptionalTags: true,
			removeEmptyAttributes: true,
			removeAttributeQuotes: true,
			minifyJS: true,
			minifyCSS: true,
		},
	};

	return {
		output: { filename: 'bundle.js' },
		resolve: { extensions: ['.js', '.jsx'] },
		module: { rules },
		devServer: serve,
		plugins: [new DotEnv(), new HtmlWebpackPlugin(html5)],
	};
}

export default webpackConfig;
