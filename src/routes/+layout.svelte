<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue selection:text-white"
>
	<Header />
	{@render children()}
	<Footer />
</div>
