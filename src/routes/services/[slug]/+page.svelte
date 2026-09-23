<script lang="ts">
	import ServicePage from '$lib/components/ServicePage.svelte';

	let { data } = $props();
</script>

<ServicePage service={data.service} />
