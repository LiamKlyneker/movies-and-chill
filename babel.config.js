module.exports = {
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				root: '.',
				alias: {
					'luar-components': './src/components/luar-components',
					'#components': './src/components',
					'#pages': './src/pages',
					'#modules': './src/modules',
					'#utils': './src/utils',
					'#services': './src/services',
				},
			},
		],
	],
};
