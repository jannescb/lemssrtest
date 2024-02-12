// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	devtools: { enabled: false },
	modules: ['@nuxtjs/strapi'],
	strapi: {
		url: 'https://bl-strapi.medical-laserinstitute.eu',
	},
});
