<script lang="ts">
	import { resolve } from '$app/paths';
	import { serviceNav } from '$lib/data/services';
	import { Activity, ShieldCheck } from '@lucide/svelte';
</script>

<footer class="border-t border-slate-800 bg-navy-dark py-14 text-xs text-slate-400">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 border-b border-slate-800 pb-10 md:grid-cols-2 lg:grid-cols-4">
			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white">
						<Activity class="h-5 w-5 text-emerald" />
					</div>
					<span class="text-xl font-bold text-white">Rev<span class="text-blue">Cycle</span></span>
				</div>
				<p class="text-xs leading-relaxed text-slate-400">
					Hospital-grade revenue cycle management and medical billing services for specialty practices
					nationwide. Operated by Beeline Medical LLC, State of Missouri.
				</p>
			</div>

			<div>
				<h4 class="mb-3 text-sm font-bold text-white">Services</h4>
				<ul class="space-y-2">
					{#each serviceNav as item (item.slug)}
						<li>
							<a
								href={resolve(item.href as '/services/revenue-cycle-management')}
								class="transition-colors hover:text-white"
							>
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="mb-3 text-sm font-bold text-white">Company</h4>
				<ul class="space-y-2">
					<li>
						<a href={resolve('/about')} class="transition-colors hover:text-white">About Beeline Medical</a>
					</li>
					<li>
						<a href={resolve('/privacy-policy')} class="transition-colors hover:text-white"
							>Privacy Policy &amp; HIPAA</a
						>
					</li>
					<li>
						<a href="{resolve('/')}#specialties" class="transition-colors hover:text-white"
							>Clinical Specialties</a
						>
					</li>
					<li>
						<a href="{resolve('/')}#integrations" class="transition-colors hover:text-white"
							>EHR Integrations</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="mb-3 text-sm font-bold text-white">Compliance &amp; Legal</h4>
				<ul class="space-y-2">
					<li class="flex items-center gap-1.5">
						<ShieldCheck class="h-4 w-4 text-emerald" /> HIPAA Omnibus Compliant
					</li>
					<li class="flex items-center gap-1.5">
						<ShieldCheck class="h-4 w-4 text-emerald" /> SOC 2 Type II Certified
					</li>
					<li>
						<a href={resolve('/privacy-policy')} class="transition-colors hover:text-white"
							>Notice of Privacy Practices</a
						>
					</li>
					<li>
						<span class="text-slate-400">Missouri Entity: Beeline Medical LLC</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="flex flex-col items-center justify-between gap-4 pt-8 text-slate-500 sm:flex-row">
			<p>&copy; {new Date().getFullYear()} Beeline Medical LLC d/b/a RevCycle. All rights reserved.</p>
			<p>Draft A — Executive Clinical SaaS Architecture</p>
		</div>
	</div>
</footer>
