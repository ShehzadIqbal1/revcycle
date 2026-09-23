<script lang="ts">
	import { metrics, rcmSteps, specialties, ehrPartners, testimonials } from '$lib/data/content';
	import type { Specialty } from '$lib/types/site';
	import type { ComponentType } from 'svelte';
	import {
		CheckCircle2,
		ArrowRight,
		Activity,
		Stethoscope,
		HeartPulse,
		Zap,
		Brain,
		Bone,
		Smile,
		Truck,
		Crosshair,
		Scan,
		Network,
		FlaskConical,
		TrendingUp,
		Building2,
		Award,
		ChevronRight,
		Clock,
		Star,
		Check
	} from 'lucide-svelte';

	// Map specialty icon names to Svelte component
	const iconMap: Record<string, ComponentType> = {
		FlaskConical,
		Zap,
		Brain,
		Activity,
		HeartPulse,
		Bone,
		Smile,
		Truck,
		Crosshair,
		Scan,
		Network,
		Stethoscope
	};

	let selectedSpecialty = $state<Specialty | null>(specialties[0]);
	let activeStep = $state<number>(1);
</script>

<!-- Hero Section -->
	<section
		class="relative overflow-hidden bg-gradient-to-b from-white via-mint/20 to-slate-50 pt-12 pb-20 md:pt-20 md:pb-28"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
				<!-- Hero Copy -->
				<div class="space-y-6 text-left lg:col-span-7">
					<div
						class="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-mint px-3.5 py-1.5 text-xs font-semibold text-navy shadow-2xs"
					>
						<span class="h-2 w-2 rounded-full bg-emerald"></span>
						Draft A &bull; Executive Clinical SaaS Edition
					</div>

					<h1
						class="text-4xl leading-[1.12] font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl"
					>
						Maximize Clean Claims. <br />
						<span class="text-blue">Eliminate Denials.</span> <br />
						Accelerate Revenue.
					</h1>

					<p class="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
						RevCycle delivers hospital-grade medical billing, certified coding, and proactive denial
						appeals. Engineered for medical practices that demand a <strong
							>98% first-pass clean claim rate</strong
						> and faster reimbursements.
					</p>

					<!-- Trust Bullet Points -->
					<div class="grid grid-cols-1 gap-3 pt-2 text-sm text-slate-700 sm:grid-cols-2">
						<div class="flex items-center gap-2">
							<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
							<span>Average 18% Increase in Collections</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
							<span>Days in A/R Reduced Under 30 Days</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
							<span>Zero EHR Workflow Disruption</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
							<span>Dedicated AAPC Certified Account Team</span>
						</div>
					</div>

					<!-- CTAs -->
					<div class="flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center">
						<a
							href="#audit"
							class="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-navy-light hover:shadow-lg"
						>
							Claim Your Free Practice Audit
							<ArrowRight class="h-5 w-5 text-emerald" />
						</a>
						<a
							href="#rcm-cycle"
							class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-navy shadow-2xs transition-all hover:bg-slate-100"
						>
							Explore the 6-Step Engine
						</a>
					</div>
				</div>

				<!-- Hero Visual: Executive Clinical Dashboard Mockup -->
				<div class="relative lg:col-span-5">
					<div
						class="absolute -top-6 -right-6 -z-10 h-72 w-72 rounded-full bg-blue/10 blur-3xl"
					></div>
					<div
						class="absolute -bottom-6 -left-6 -z-10 h-72 w-72 rounded-full bg-mint/80 blur-2xl"
					></div>

					<div class="space-y-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xl">
						<!-- Card Header -->
						<div class="flex items-center justify-between border-b border-slate-100 pb-4">
							<div class="flex items-center gap-3">
								<div class="h-3 w-3 rounded-full bg-emerald"></div>
								<span class="text-xs font-semibold tracking-wider text-slate-500 uppercase"
									>Live Revenue Command Center</span
								>
							</div>
							<span
								class="inline-flex items-center gap-1 rounded-full bg-mint px-2.5 py-1 text-[11px] font-semibold text-emerald-dark"
							>
								Real-Time Scrubbing
							</span>
						</div>

						<!-- Core Metrics Snapshot -->
						<div class="grid grid-cols-2 gap-3">
							<div class="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
								<span class="text-xs font-medium text-slate-500">Clean Claim Rate</span>
								<div class="mt-1 text-2xl font-bold text-navy">98.4%</div>
								<div class="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-emerald">
									<TrendingUp class="h-3 w-3" /> +14.2% vs national avg
								</div>
							</div>
							<div class="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
								<span class="text-xs font-medium text-slate-500">Days in A/R</span>
								<div class="mt-1 text-2xl font-bold text-navy">26.4 Days</div>
								<div class="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-emerald">
									<TrendingUp class="h-3 w-3" /> 48% speedup
								</div>
							</div>
						</div>

						<!-- Active Claim Processing Tracker -->
						<div class="space-y-3">
							<div class="flex items-center justify-between text-xs">
								<span class="font-semibold text-slate-700">Daily Batch Claim Validation</span>
								<span class="font-mono font-medium text-blue">842 / 856 Batch #8942</span>
							</div>
							<div class="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
								<div
									class="h-2.5 w-[98.4%] rounded-full bg-gradient-to-r from-blue to-emerald"
								></div>
							</div>
						</div>

						<!-- Recent Audit Items -->
						<div class="space-y-2 pt-1">
							<div
								class="flex items-center justify-between rounded-lg border border-mint-dark/50 bg-mint/50 p-2.5 text-xs"
							>
								<div class="flex items-center gap-2">
									<CheckCircle2 class="h-4 w-4 text-emerald" />
									<span class="font-medium text-navy">CPT 99214 Multi-Modifier Validation</span>
								</div>
								<span
									class="rounded border border-emerald/20 bg-white px-2 py-0.5 text-[10px] font-bold text-emerald-dark"
								>
									Approved
								</span>
							</div>
							<div
								class="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-xs"
							>
								<div class="flex items-center gap-2">
									<Clock class="h-4 w-4 text-blue" />
									<span class="font-medium text-slate-700">Denial Appeal Overturn Queue</span>
								</div>
								<span class="rounded bg-blue-light px-2 py-0.5 text-[10px] font-bold text-blue">
									Overturned $14.8k
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Metrics Section -->
	<section id="metrics" class="relative bg-navy py-16 text-white">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-12 max-w-3xl text-center">
				<span class="text-xs font-bold tracking-widest text-emerald uppercase"
					>Empirical Performance</span
				>
				<h2 class="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
					Measurable Outcomes Across American Healthcare
				</h2>
				<p class="mt-3 text-base text-slate-300">
					Our executive clinical management delivers transparent results that directly impact your
					practice bottom line.
				</p>
			</div>

			<!-- Grid of 4 Key Metrics -->
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each metrics as metric (metric.label)}
					<div
						class="group rounded-2xl border border-slate-700/60 bg-navy-dark/70 p-6 transition-all hover:border-emerald/50"
					>
						<div
							class="text-4xl font-black tracking-tight text-emerald transition-transform duration-300 group-hover:scale-105 sm:text-5xl"
						>
							{metric.value}
						</div>
						<div class="mt-2 text-lg font-bold text-white">
							{metric.label}
						</div>
						<p class="mt-2 text-xs leading-relaxed text-slate-300">
							{metric.detail}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- 6-Step RCM Engine -->
	<section id="rcm-cycle" class="bg-white py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<span class="text-xs font-bold tracking-widest text-blue uppercase"
					>Systematic Revenue Lifecycle</span
				>
				<h2 class="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
					The 6-Step Precision RCM Cycle
				</h2>
				<p class="mt-3 text-base text-slate-600">
					Every stage of your claim lifecycle is engineered with automated rules and certified human
					audit controls.
				</p>
			</div>

			<!-- 6 Step Cards -->
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each rcmSteps as step (step.stepNumber)}
					<div
						role="group"
						aria-label="Phase {step.stepNumber}: {step.title}"
						class="relative flex flex-col justify-between rounded-2xl border p-7 transition-all {activeStep ===
						step.stepNumber
							? 'border-blue bg-blue-light/20 shadow-md ring-2 ring-blue/20'
							: 'border-slate-200 bg-white hover:border-blue/50'}"
						onmouseenter={() => (activeStep = step.stepNumber)}
					>
						<div>
							<div class="mb-4 flex items-center justify-between">
								<span
									class="flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold {activeStep ===
									step.stepNumber
										? 'bg-blue text-white shadow'
										: 'bg-mint text-navy'}"
								>
									0{step.stepNumber}
								</span>
								<span class="text-xs font-semibold tracking-wider text-slate-400 uppercase"
									>Phase {step.stepNumber}</span
								>
							</div>

							<h3 class="mb-2 text-xl font-bold text-navy">
								{step.title}
							</h3>

							<p class="text-sm leading-relaxed text-slate-600">
								{step.description}
							</p>
						</div>

						<div
							class="mt-6 flex items-center border-t border-slate-100 pt-4 text-xs font-semibold {activeStep ===
							step.stepNumber
								? 'text-blue'
								: 'text-slate-400'}"
						>
							<span>Protocol 0{step.stepNumber} Standard Operating Procedure</span>
							<ChevronRight class="ml-auto h-4 w-4" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Specialties Grid -->
	<section id="specialties" class="border-t border-slate-200/60 bg-slate-50 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 flex flex-col justify-between md:flex-row md:items-end">
				<div>
					<span class="text-xs font-bold tracking-widest text-emerald uppercase"
						>Specialty-Specific Expertise</span
					>
					<h2 class="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
						Tailored Billing for 25+ Clinical Specialties
					</h2>
					<p class="mt-2 max-w-2xl text-base text-slate-600">
						Generic billing firms cost practices thousands in uncollected modifiers. Our teams are
						certified in the unique coding nuances of your clinical discipline.
					</p>
				</div>
				<div class="mt-4 md:mt-0">
					<span
						class="inline-flex items-center gap-1.5 rounded-full border border-mint-dark bg-mint px-3.5 py-1.5 text-xs font-semibold text-navy"
					>
						<Check class="h-3.5 w-3.5 text-emerald" /> Dedicated Sub-Specialty Pods
					</span>
				</div>
			</div>

			<!-- 12 Specialty Cards -->
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{#each specialties as spec (spec.id)}
					{@const IconComponent = iconMap[spec.icon] || Stethoscope}
					<button
						type="button"
						class="flex flex-col justify-between rounded-xl border bg-white p-5 text-left text-slate-800 transition-all {selectedSpecialty?.id ===
						spec.id
							? 'border-navy shadow-md ring-2 ring-navy/10'
							: 'border-slate-200 hover:border-slate-300 hover:shadow-xs'}"
						onclick={() => (selectedSpecialty = spec)}
					>
						<div>
							<div
								class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-navy"
							>
								<IconComponent class="h-5 w-5 text-navy" />
							</div>
							<h3 class="text-base leading-tight font-bold text-navy">
								{spec.name}
							</h3>
							<p class="mt-2 text-xs leading-relaxed text-slate-500">
								{spec.description}
							</p>
						</div>

						<div
							class="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-medium text-blue"
						>
							<span>View Specialty Codes</span>
							<ArrowRight class="h-3.5 w-3.5" />
						</div>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- EHR Partners Ecosystem -->
	<section id="integrations" class="border-y border-slate-200/80 bg-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-10 max-w-2xl text-center">
				<span class="text-xs font-bold tracking-widest text-slate-400 uppercase"
					>Zero-Friction Interoperability</span
				>
				<h2 class="mt-1 text-2xl font-bold text-navy sm:text-3xl">
					Seamless Integration with Your Current EHR &amp; PM
				</h2>
				<p class="mt-2 text-sm text-slate-600">
					We plug directly into your software without migrating your patients or interrupting
					clinical scheduling.
				</p>
			</div>

			<div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
				{#each ehrPartners as partner (partner)}
					<div
						class="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-slate-50 px-6 py-4 shadow-2xs transition-all hover:bg-white hover:shadow-sm"
					>
						<Building2 class="h-5 w-5 text-blue" />
						<span class="text-base font-bold tracking-tight text-navy">{partner}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section id="testimonials" class="bg-slate-50 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-14 max-w-3xl text-center">
				<span class="text-xs font-bold tracking-widest text-emerald uppercase"
					>Physician &amp; Executive Endorsements</span
				>
				<h2 class="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
					Trusted by Clinical Leaders Nationwide
				</h2>
				<p class="mt-2 text-base text-slate-600">
					See how specialty practices gained back their financial independence with RevCycle.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each testimonials as t (t.author)}
					<div
						class="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm"
					>
						<div>
							<div class="mb-4 flex items-center gap-1 text-amber-400">
								{#each [1, 2, 3, 4, 5] as star (star)}
									<Star class="h-4 w-4 fill-amber-400 text-amber-400" />
								{/each}
							</div>
							<p class="mb-6 text-sm leading-relaxed text-slate-700 italic">
								"{t.quote}"
							</p>
						</div>

						<div class="border-t border-slate-100 pt-4">
							<div class="text-sm font-bold text-navy">{t.author}</div>
							<div class="text-xs font-semibold text-blue">{t.role}</div>
							<div class="mt-0.5 text-xs text-slate-500">{t.practice}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Executive Audit CTA Banner -->
	<section id="audit" class="relative overflow-hidden bg-navy py-20 text-white">
		<div
			class="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-blue/15 blur-3xl"
		></div>
		<div class="relative z-10 mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/20 px-3 py-1 text-xs font-semibold text-emerald"
			>
				<Award class="h-3.5 w-3.5" /> 100% Confidential Practice Audit
			</span>

			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
				Uncover Hidden Revenue in Your A/R Within 48 Hours
			</h2>

			<p class="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
				Our certified billing auditors will evaluate your last 90 days of claims, identify
				under-coded CPTs, and show you exactly where revenue is being leaked.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
				<button
					type="button"
					class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-600 sm:w-auto"
				>
					Schedule Executive Audit Conference
					<ArrowRight class="h-5 w-5 text-emerald" />
				</button>
				<button
					type="button"
					class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-navy-dark px-6 py-4 text-base font-semibold text-slate-200 transition-all hover:bg-navy-light sm:w-auto"
				>
					Download Sample Audit Report
				</button>
			</div>

			<div class="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-slate-400">
				<span class="flex items-center gap-1.5"
					><Check class="h-4 w-4 text-emerald" /> No EHR Migration Required</span
				>
				<span class="flex items-center gap-1.5"
					><Check class="h-4 w-4 text-emerald" /> Zero Cost or Obligation</span
				>
				<span class="flex items-center gap-1.5"
					><Check class="h-4 w-4 text-emerald" /> HIPAA Business Associate Agreement</span
				>
			</div>
		</div>
	</section>

