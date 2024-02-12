<template>
	<div>
		<pre>{{ homePage }}</pre>
		<pre>{{ specializationPage }}</pre>
	</div>
</template>
<script setup>
const { find } = useStrapi();

const { data: homePage } = await useAsyncData(
	async () => await find('home-page')
);
const { data: specializationPage } = await useAsyncData(
	async () => await find('specialization-page')
);

useHead({
	title: homePage.value.data.attributes.title,
});
</script>
