<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	const { children } = $props();
	const currentLocale = $derived(page.params.lang === 'id' ? page.params.lang : 'id');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<html lang={currentLocale}></html>
</svelte:head>
{@render children()}
