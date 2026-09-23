<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { serviceNav } from '$lib/data/services';
	import {
		ShieldCheck,
		Activity,
		ArrowRight,
		PhoneCall,
		ChevronDown,
		Menu,
		X
	} from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let mobileServicesOpen = $state(false);
	let mobileCompanyOpen = $state(false);

	const isHome = $derived(page.url.pathname === '/' || page.url.pathname === ('/' as string));
	const isServices = $derived(page.url.pathname.startsWith('/services'));
	const isAbout = $derived(page.url.pathname.startsWith('/about'));
	const isPrivacy = $derived(page.url.pathname.startsWith('/privacy-policy'));
	const isContact = $derived(page.url.pathname.startsWith('/contact'));
</script>

<!-- Top Clinical Compliance Bar -->
<div class="border-b border-navy-light/40 bg-navy px-4 py-2 text-xs text-slate-200">
	<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
		<div class="flex items-center gap-2 text-slate-300">
			<ShieldCheck class="h-4 w-4 text-emerald" />
			<span class="font-medium">HIPAA Compliant &amp; SOC 2 Type II Certified RCM Operations</span>
			<span class="hidden text-slate-500 md:inline">|</span>
			<span class="hidden text-slate-300 md:inline">AAPC &amp; AHIMA Certified Professional Coders</span>
		</div>
		<div class="flex items-center gap-4 text-slate-300">
			<span class="flex items-center gap-1.5">
				<span class="h-2 w-2 animate-pulse rounded-full bg-emerald"></span>
				EDI 837 Clearinghouse Systems Operational
			</span>
			<a
				href="tel:18005557382"
				class="flex items-center gap-1 font-semibold transition-colors hover:text-white"
			>
				<PhoneCall class="h-3.5 w-3.5 text-blue" /> (800) 555-REV2
			</a>
		</div>
	</div>
</div>

<!-- Main Header Navigation -->
<header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-xs backdrop-blur-md">
	<div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<a href={resolve('/')} class="group flex items-center gap-3">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white shadow-md transition-colors group-hover:bg-blue"
			>
				<Activity class="h-6 w-6 text-emerald" />
			</div>
			<div>
				<div class="text-2xl leading-none font-bold tracking-tight text-navy">
					Rev<span class="text-blue">Cycle</span>
				</div>
				<div class="mt-1 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
					Executive Clinical RCM
				</div>
			</div>
		</a>

		<nav class="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
			<a
				href={resolve('/')}
				class="transition-colors hover:text-navy {isHome ? 'font-semibold text-navy' : ''}"
			>
				Home
			</a>

			<div class="group relative">
				<button
					type="button"
					class="flex items-center gap-1 py-7 font-medium transition-colors hover:text-navy focus:outline-none {isServices
						? 'font-semibold text-navy'
						: ''}"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<span>Services</span>
					<ChevronDown
						class="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-navy"
					/>
				</button>
				<div
					class="invisible absolute top-full left-0 z-50 w-72 translate-y-1 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
				>
					<ul class="overflow-hidden bg-blue text-white">
						{#each serviceNav as item (item.slug)}
							<li class="border-b border-white/25 last:border-b-0">
								<a
									href={resolve(item.href as '/services/revenue-cycle-management')}
									class="block px-5 py-3.5 text-sm font-medium leading-snug transition-colors hover:bg-navy {page.url.pathname.startsWith(
										item.href
									)
										? 'bg-navy'
										: ''}"
								>
									{item.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<a href="{resolve('/')}#specialties" class="transition-colors hover:text-navy">Specialties</a>

			<div class="group relative">
				<button
					type="button"
					class="flex items-center gap-1 py-7 font-medium transition-colors hover:text-navy focus:outline-none {isAbout ||
					isPrivacy
						? 'font-semibold text-navy'
						: ''}"
				>
					<span>Company</span>
					<ChevronDown
						class="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-navy"
					/>
				</button>
				<div
					class="invisible absolute top-full left-0 z-50 mt-0 w-64 rounded-2xl border border-slate-200 bg-white p-2.5 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
				>
					<div class="px-3 py-1 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
						Corporate Information
					</div>
					<a
						href={resolve('/about')}
						class="group/item flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-mint/60 {isAbout
							? 'bg-mint/50'
							: ''}"
					>
						<span
							class="text-sm font-semibold text-slate-800 transition-colors group-hover/item:text-navy"
						>
							About Us
						</span>
						<span class="text-[11px] text-slate-500">Our mission, leadership &amp; clinical ethos</span>
					</a>
					<a
						href={resolve('/privacy-policy')}
						class="group/item flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-mint/60 {isPrivacy
							? 'bg-mint/50'
							: ''}"
					>
						<span
							class="text-sm font-semibold text-slate-800 transition-colors group-hover/item:text-navy"
						>
							Privacy Policy
						</span>
						<span class="text-[11px] text-slate-500">HIPAA compliance &amp; zero SMS sharing</span>
					</a>
				</div>
			</div>

			<a href={resolve('/contact')} class="transition-colors hover:text-navy {isContact ? 'font-semibold text-navy' : ''}">Contact Us</a>
		</nav>

		<div class="flex items-center gap-3">
			<a
				href="{resolve('/')}#audit"
				class="inline-flex items-center gap-2 rounded-lg bg-blue px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-600 hover:shadow-md active:scale-[0.98]"
			>
				Request Practice Audit
				<ArrowRight class="h-4 w-4" />
			</a>

			<button
				type="button"
				class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-navy focus:outline-none lg:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle navigation menu"
			>
				{#if mobileMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="border-b border-slate-200 bg-white px-4 pt-2 pb-6 shadow-lg lg:hidden">
			<nav class="flex flex-col space-y-3 text-sm font-medium text-slate-700">
				<a
					href={resolve('/')}
					class="rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-navy"
					onclick={() => (mobileMenuOpen = false)}
				>
					Home
				</a>

				<div>
					<button
						type="button"
						class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-slate-50 hover:text-navy"
						onclick={() => (mobileServicesOpen = !mobileServicesOpen)}
					>
						<span>Services</span>
						<ChevronDown class="h-4 w-4 transition-transform {mobileServicesOpen ? 'rotate-180' : ''}" />
					</button>
					{#if mobileServicesOpen}
						<div class="mt-1 space-y-1 pl-4">
							{#each serviceNav as item (item.slug)}
								<a
									href={resolve(item.href as '/services/revenue-cycle-management')}
									class="block rounded-lg px-3 py-1.5 text-xs text-slate-600 hover:bg-mint/60 hover:text-navy"
									onclick={() => (mobileMenuOpen = false)}
								>
									{item.name}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<a
					href="{resolve('/')}#specialties"
					class="rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-navy"
					onclick={() => (mobileMenuOpen = false)}
				>
					Specialties
				</a>

				<div>
					<button
						type="button"
						class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-slate-50 hover:text-navy"
						onclick={() => (mobileCompanyOpen = !mobileCompanyOpen)}
					>
						<span>Company</span>
						<ChevronDown class="h-4 w-4 transition-transform {mobileCompanyOpen ? 'rotate-180' : ''}" />
					</button>
					{#if mobileCompanyOpen}
						<div class="mt-1 space-y-1 pl-4">
							<a
								href={resolve('/about')}
								class="block rounded-lg px-3 py-1.5 text-xs text-slate-600 hover:bg-mint/60 hover:text-navy"
								onclick={() => (mobileMenuOpen = false)}
							>
								About Us
							</a>
							<a
								href={resolve('/privacy-policy')}
								class="block rounded-lg px-3 py-1.5 text-xs text-slate-600 hover:bg-mint/60 hover:text-navy"
								onclick={() => (mobileMenuOpen = false)}
							>
								Privacy Policy
							</a>
						</div>
					{/if}
				</div>

				<a
					href={resolve('/contact')}
					class="rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-navy"
					onclick={() => (mobileMenuOpen = false)}
				>
					Contact Us
				</a>
			</nav>
		</div>
	{/if}
</header>
