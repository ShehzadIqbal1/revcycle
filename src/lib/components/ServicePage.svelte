<script lang="ts">
	import { resolve } from '$app/paths';
	import type { ServicePageContent } from '$lib/types/site';
	import { serviceNav } from '$lib/data/services';
	import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-svelte';

	let { service }: { service: ServicePageContent } = $props();
</script>

<svelte:head>
	<title>{service.metaTitle}</title>
	<meta name="description" content={service.metaDescription} />
</svelte:head>

<section class="relative overflow-hidden bg-gradient-to-b from-white via-mint/20 to-slate-50 py-14 md:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<p class="text-xs font-semibold tracking-wider text-blue uppercase">{service.eyebrow}</p>
		<h1 class="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
			{service.headline}
		</h1>
		<p class="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
			{service.intro[0]}
		</p>
		<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
			<a
				href="{resolve('/')}#audit"
				class="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-light"
			>
				Book Free Consultation
				<ArrowRight class="h-4 w-4 text-emerald" />
			</a>
			<a
				href="tel:18005557382"
				class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-navy"
			>
				<PhoneCall class="h-4 w-4 text-blue" /> (800) 555-REV2
			</a>
		</div>
	</div>
</section>

<section class="bg-white py-14 md:py-16">
	<div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
		<article class="space-y-5 text-base leading-relaxed text-slate-600 lg:col-span-8">
			{#each service.intro.slice(1) as paragraph, index (index)}
				<p>{paragraph}</p>
			{/each}

			<h2 class="pt-4 text-2xl font-extrabold tracking-tight text-navy">{service.processHeading}</h2>
			<ol class="space-y-4">
				{#each service.process as step, i (step.title)}
					<li class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
						<div class="flex items-start gap-3">
							<span
								class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue text-sm font-bold text-white"
							>
								{i + 1}
							</span>
							<div>
								<h3 class="text-base font-semibold text-navy">{step.title}</h3>
								<p class="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
							</div>
						</div>
					</li>
				{/each}
			</ol>

			{#if service.extraHeading && service.extraItems}
				<h2 class="pt-6 text-2xl font-extrabold tracking-tight text-navy">{service.extraHeading}</h2>
				{#if service.extraIntro}
					<p>{service.extraIntro}</p>
				{/if}
				<ul class="space-y-3">
					{#each service.extraItems as item (item.title)}
						<li class="flex items-start gap-3">
							<CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
							<div>
								<h3 class="text-base font-semibold text-navy">{item.title}</h3>
								<p class="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
							</div>
						</li>
					{/each}
				</ul>
			{/if}
		</article>

		<aside class="lg:col-span-4">
			<div class="sticky top-28 space-y-4 rounded-2xl border border-slate-200 bg-navy p-6 text-white">
				<p class="text-[11px] font-bold tracking-wider text-emerald uppercase">All services</p>
				<nav class="space-y-1">
					{#each serviceNav as item (item.slug)}
						<a
							href={resolve(item.href as '/services/revenue-cycle-management')}
							class="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/10 {item.slug ===
							service.slug
								? 'bg-white/15 font-semibold'
								: 'text-slate-200'}"
						>
							{item.name}
						</a>
					{/each}
				</nav>
			</div>
		</aside>
	</div>
</section>

<section class="bg-mint/40 py-14 md:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{service.whyHeading}</h2>
		<p class="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">{service.whyIntro}</p>
		<div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each service.whyItems as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
					<h3 class="text-base font-semibold text-navy">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
				</div>
			{/each}
		</div>
		<blockquote
			class="mt-10 max-w-3xl border-l-4 border-blue bg-white px-6 py-5 text-lg font-medium text-navy italic"
		>
			“{service.quote}”
		</blockquote>
		<div class="mt-8">
			<a
				href="{resolve('/')}#audit"
				class="inline-flex items-center gap-2 rounded-xl bg-blue px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-600"
			>
				Book Free Consultation
				<ArrowRight class="h-5 w-5 text-emerald" />
			</a>
		</div>
	</div>
</section>
