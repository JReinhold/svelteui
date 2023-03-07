import path from 'path';
import { mergeConfig } from 'vite';

export default {
	stories: [
		'../../packages/svelteui-core/src/**/*.mdx',
		'../../packages/svelteui-core/src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
		'../../packages/svelteui-composables/src/**/*.mdx',
		'../../packages/svelteui-composables/src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
		'../../packages/svelteui-dates/src/**/*.mdx',
		'../../packages/svelteui-dates/src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: '@storybook/sveltekit',
	async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				alias: {
					$lib: path.resolve(__dirname, '../../packages/svelteui-core/src'),
					$clib: path.resolve(__dirname, '../../packages/svelteui-composables/src'),
					$dlib: path.resolve(__dirname, '../../packages/svelteui-dates/src'),
					'@svelteuidev/core': path.resolve(__dirname, '../../packages/svelteui-core/src'),
					'@svelteuidev/composables': path.resolve(
						__dirname,
						'../../packages/svelteui-composables/src'
					),
					'@svelteuidev/dates': path.resolve(__dirname, '../../packages/svelteui-dates/src')
				}
			},
			define: {
				global: 'window'
			}
		});
	},
	docs: {
		autodocs: 'tag'
	}
};
