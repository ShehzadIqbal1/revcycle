<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		ShieldCheck,
		Activity,
		ArrowRight,
		CheckCircle2,
		Award,
		Target,
		Compass,
		HeartHandshake,
		Building,
		Scale,
		FileSpreadsheet
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>About Us | Beeline Medical LLC &amp; RevCycle RCM</title>
	<meta
		name="description"
		content="Learn about Beeline Medical LLC, Missouri-based revenue cycle management and medical billing leaders. Discover our mission, core values, certified team, and nationwide provider solutions."
	/>
</svelte:head>

	<!-- Hero Header -->
	<section
		class="relative overflow-hidden bg-gradient-to-b from-white via-mint/20 to-slate-50 py-16 md:py-24"
	>
		<div class="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-mint px-3.5 py-1.5 text-xs font-semibold text-navy shadow-2xs"
			>
				<Building class="h-3.5 w-3.5 text-emerald" /> Headquartered in the State of Missouri &bull; Serving
				Practices Nationwide
			</div>
			<h1
				class="text-4xl leading-tight font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl"
			>
				Strategic Financial Architecture <br />
				<span class="text-blue">For Modern Healthcare Providers</span>
			</h1>
			<p class="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
				Beeline Medical LLC operates as the high-precision revenue cycle engine for clinical
				practices across the United States. We transform convoluted reimbursement structures into
				predictable, accelerated cash flow.
			</p>
		</div>
	</section>

	<!-- Who We Are Section -->
	<section class="border-y border-slate-200/80 bg-white py-16">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
				<div class="space-y-6 lg:col-span-6">
					<span class="text-xs font-bold tracking-widest text-emerald uppercase"
						>Our Identity &amp; Heritage</span
					>
					<h2 class="text-3xl font-extrabold text-navy sm:text-4xl">
						Who We Are at Beeline Medical
					</h2>
					<p class="text-base leading-relaxed text-slate-600">
						Founded and registered in the State of Missouri, <strong>Beeline Medical LLC</strong> (dba
						RevCycle) is an interdisciplinary revenue cycle management firm built to solve the administrative
						overload paralyzing independent practitioners, ambulatory centers, and specialty networks.
					</p>
					<p class="text-base leading-relaxed text-slate-600">
						Unlike generic billing clearinghouses that merely push electronic claims through
						automated pipes, we embed certified clinical coders and billing attorneys directly into
						your specialty workflow. We advocate aggressively on your behalf, capturing rightful
						revenue from stubborn third-party commercial payers and government programs alike.
					</p>

					<div class="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
						<div class="rounded-xl border border-slate-100 bg-slate-50 p-4">
							<div class="text-2xl font-bold text-navy">Midwest</div>
							<div class="mt-1 text-xs font-medium text-slate-500">
								Headquarters &amp; Executive Oversight
							</div>
						</div>
						<div class="rounded-xl border border-slate-100 bg-slate-50 p-4">
							<div class="text-2xl font-bold text-emerald">50 States</div>
							<div class="mt-1 text-xs font-medium text-slate-500">
								Multi-Specialty Clinical Compliance
							</div>
						</div>
					</div>
				</div>

				<div class="lg:col-span-6">
					<div class="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
						<div class="flex items-center gap-3 border-b border-slate-200 pb-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
								<Scale class="h-5 w-5 text-emerald" />
							</div>
							<div>
								<div class="text-base font-bold text-navy">Clinical Governance &amp; Ethics</div>
								<div class="text-xs text-slate-500">
									Unwavering compliance with OIG, CMS &amp; HIPAA
								</div>
							</div>
						</div>

						<ul class="space-y-3.5 text-sm text-slate-700">
							<li class="flex items-start gap-3">
								<CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
								<span
									><strong>Zero Outsourcing Shortcuts:</strong> Every chart audit and appeal is handled
									by verified credentialed personnel.</span
								>
							</li>
							<li class="flex items-start gap-3">
								<CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
								<span
									><strong>EHR Agnostic Architecture:</strong> Native bi-directional integration with
									Epic, Cerner, AthenaHealth, Kareo, and all major PMs.</span
								>
							</li>
							<li class="flex items-start gap-3">
								<CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
								<span
									><strong>Transparent Daily Accounting:</strong> Real-time financial dashboards with
									zero hidden withholding or obscure fees.</span
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Mission & Vision -->
	<section class="bg-slate-50 py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<!-- Mission -->
				<div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
					<div class="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-navy">
						<Target class="h-6 w-6 text-navy" />
					</div>
					<h3 class="text-2xl font-bold text-navy">Our Mission</h3>
					<p class="text-sm leading-relaxed text-slate-600">
						To deliver transparent, surgically precise, and technologically resilient medical
						billing solutions that liberate healthcare providers from reimbursement anxiety,
						empowering physicians to focus wholeheartedly on clinical patient care while we secure
						their financial foundation.
					</p>
				</div>

				<!-- Vision -->
				<div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
					<div
						class="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-light text-blue"
					>
						<Compass class="h-6 w-6 text-blue" />
					</div>
					<h3 class="text-2xl font-bold text-navy">Our Vision</h3>
					<p class="text-sm leading-relaxed text-slate-600">
						To stand as the gold-standard revenue cycle partner for American medicine—recognized
						across all 50 states for blending certified human clinical coding acumen, innovative
						pre-claim artificial intelligence, and absolute ethical transparency.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Core Values -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<span class="text-xs font-bold tracking-widest text-blue uppercase"
					>The Tenets That Guide Us</span
				>
				<h2 class="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
					Our Foundational Core Values
				</h2>
				<p class="mt-3 text-base text-slate-600">
					Every claim submitted, every payer dialogue, and every clinical audit is anchored in five
					essential commitments.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<!-- Value 1 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-slate-50 p-7 transition-all hover:border-blue/50"
				>
					<div
						class="flex items-center gap-2 text-xl font-bold text-navy transition-colors group-hover:text-blue"
					>
						<ShieldCheck class="h-5 w-5 text-emerald" /> Uncompromising Integrity
					</div>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">
						We uphold the highest ethical standards across healthcare accounting. Honest appraisals,
						fair contracts, and complete compliance safeguard your practice license and reputation.
					</p>
				</div>

				<!-- Value 2 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-slate-50 p-7 transition-all hover:border-blue/50"
				>
					<div
						class="flex items-center gap-2 text-xl font-bold text-navy transition-colors group-hover:text-blue"
					>
						<FileSpreadsheet class="h-5 w-5 text-emerald" /> Clinical Accuracy
					</div>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">
						From CPT modifiers to ICD-10 medical necessity linkage, our coding rigor ensures 98%+
						first-pass clean acceptance rates, eliminating costly payer kickbacks.
					</p>
				</div>

				<!-- Value 3 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-slate-50 p-7 transition-all hover:border-blue/50"
				>
					<div
						class="flex items-center gap-2 text-xl font-bold text-navy transition-colors group-hover:text-blue"
					>
						<Activity class="h-5 w-5 text-emerald" /> Radical Transparency
					</div>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">
						You retain 100% visibility into your cash receipts, unbilled encounters, and aging
						receivables. Monthly executive reconciliation conferences ensure no numbers are hidden.
					</p>
				</div>

				<!-- Value 4 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-slate-50 p-7 transition-all hover:border-blue/50"
				>
					<div
						class="flex items-center gap-2 text-xl font-bold text-navy transition-colors group-hover:text-blue"
					>
						<Award class="h-5 w-5 text-emerald" /> Operational Excellence
					</div>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">
						We continuously optimize claim pipelines, refine electronic scrubbing algorithms, and
						aggressively pursue denied claims within 48 business hours.
					</p>
				</div>

				<!-- Value 5 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-slate-50 p-7 transition-all hover:border-blue/50"
				>
					<div
						class="flex items-center gap-2 text-xl font-bold text-navy transition-colors group-hover:text-blue"
					>
						<HeartHandshake class="h-5 w-5 text-emerald" /> Client-Centric Success
					</div>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">
						We measure our achievement exclusively by your practice's bottom-line vitality. When
						your collections expand and days in A/R plunge, our partnership succeeds.
					</p>
				</div>

				<!-- Team Callout -->
				<div class="flex flex-col justify-between rounded-2xl bg-navy p-7 text-white">
					<div>
						<div class="text-xl font-bold text-emerald">Credentialed Human Talent</div>
						<p class="mt-2 text-xs leading-relaxed text-slate-300">
							Technology accelerates billing, but certified human expertise closes the loop. Meet
							the certified professionals managing your revenue cycle.
						</p>
					</div>
					<div class="mt-4 border-t border-slate-700 pt-3 text-xs font-semibold text-slate-300">
						AAPC &bull; AHIMA &bull; HFMA Certified
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- The Team Section -->
	<section class="border-t border-slate-200/80 bg-slate-50 py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-14 max-w-3xl text-center">
				<span class="text-xs font-bold tracking-widest text-emerald uppercase"
					>Interdisciplinary Specialists</span
				>
				<h2 class="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
					The Minds Behind Your Financial Health
				</h2>
				<p class="mt-3 text-base text-slate-600">
					Our multi-disciplinary team brings decades of combined healthcare revenue management
					experience, spanning hospital departments and independent specialty clinics.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-4">
				<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-2xs">
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mint text-lg font-bold text-navy"
					>
						CPC
					</div>
					<h4 class="text-base font-bold text-navy">Certified Professional Coders</h4>
					<p class="mt-2 text-xs text-slate-500">
						Specialty-accredited coders applying precise ICD-10, CPT, and HCPCS modifiers to capture
						full clinical value.
					</p>
				</div>

				<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-2xs">
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-light text-lg font-bold text-blue"
					>
						CPB
					</div>
					<h4 class="text-base font-bold text-navy">Revenue Cycle Billers</h4>
					<p class="mt-2 text-xs text-slate-500">
						Clearinghouse and EDI 837 transmission experts ensuring uninterrupted batching and
						electronic validation.
					</p>
				</div>

				<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-2xs">
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mint text-lg font-bold text-navy"
					>
						APP
					</div>
					<h4 class="text-base font-bold text-navy">Denial Appeals Unit</h4>
					<p class="mt-2 text-xs text-slate-500">
						Tenacious advocates reviewing explanation of benefits (EOBs) to overturn wrongful payer
						denials in under 48 hours.
					</p>
				</div>

				<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-2xs">
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-light text-lg font-bold text-blue"
					>
						HIPAA
					</div>
					<h4 class="text-base font-bold text-navy">Compliance Directors</h4>
					<p class="mt-2 text-xs text-slate-500">
						Dedicated privacy officers auditing data safeguarding, BAA mandates, and federal OIG
						documentation integrity.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Audit CTA Banner -->
	<section class="relative overflow-hidden bg-navy py-20 text-center text-white">
		<div class="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/20 px-3 py-1 text-xs font-semibold text-emerald"
			>
				<Award class="h-3.5 w-3.5" /> Direct Consultation with Beeline Medical Leadership
			</span>
			<h2 class="text-3xl font-extrabold sm:text-4xl">
				Ready to Fortify Your Practice's Financial Future?
			</h2>
			<p class="mx-auto max-w-2xl text-base text-slate-300">
				Request a complimentary, confidential 90-day revenue cycle assessment with our Missouri
				leadership team.
			</p>
			<div class="pt-2">
				<a
					href="{resolve('/')}#audit"
					class="inline-flex items-center gap-2 rounded-xl bg-blue px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-600"
				>
					Schedule Your Executive Practice Audit
					<ArrowRight class="h-5 w-5 text-emerald" />
				</a>
			</div>
		</div>
	</section>

