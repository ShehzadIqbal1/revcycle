<script lang="ts">
	import { resolve } from '$app/paths';
	import { serviceNav } from '$lib/data/services';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Medical Billing Services | RevCycle Revenue Cycle Management</title>
	<meta
		name="description"
		content="Explore RevCycle medical billing services: revenue cycle management, credentialing and enrollment, compliance auditing, reporting, denials management, and certified coding."
	/>
</svelte:head>

<section class="bg-gradient-to-b from-white via-mint/20 to-slate-50 py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<p class="text-xs font-semibold tracking-wider text-blue uppercase">Medical billing services</p>
		<h1 class="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">
			Clinical billing programs built around the full revenue cycle
		</h1>
		<p class="mt-5 max-w-2xl text-lg text-slate-600">
			From payer enrollment to certified coding, denials, compliance, and analytics, RevCycle
			operates the financial engine behind specialty practices.
		</p>
		<div class="mt-10 grid gap-4 md:grid-cols-2">
			{#each serviceNav as item (item.slug)}
				<a
					href={resolve(item.href as '/services/revenue-cycle-management')}
					class="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-blue hover:shadow-md"
				>
					<h2 class="text-lg font-semibold text-navy group-hover:text-blue">{item.name}</h2>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
					<span class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue">
						View service
						<ArrowRight class="h-4 w-4" />
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
