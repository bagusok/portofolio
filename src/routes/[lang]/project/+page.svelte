<script lang="ts">
	import type { Dictionary, Locale } from '$lib/i18n/types';

	let { data }: { data: { locale: Locale; baseUrl: string; dictionary: Dictionary } } = $props();

	const locale = $derived(data.locale);
	const t = $derived(data.dictionary);
	const currentUrl = $derived(`${data.baseUrl}/${locale}/project`);
	const previewImage = '/portfolio-desktop-reference.png';
</script>

<svelte:head>
	<title>{t.seo.project.title}</title>
	<meta name="description" content={t.seo.project.description} />
	<meta name="keywords" content={t.seo.project.keywords} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={currentUrl} />
	<link rel="alternate" hreflang="id" href={`${data.baseUrl}/id/project`} />
	<link rel="alternate" hreflang="x-default" href={`${data.baseUrl}/id/project`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={t.seo.project.title} />
	<meta property="og:description" content={t.seo.project.description} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:locale" content={t.seo.project.ogLocale} />
	<meta property="og:image" content={`${data.baseUrl}${previewImage}`} />
</svelte:head>

<main class="min-h-screen bg-[#f5f6f7] text-[#2c2f30]">
	<div class="mx-auto max-w-7xl px-8 py-16">
		<div class="mb-10 flex flex-wrap items-center justify-between gap-4">
			<div>
				<h1 class="headline text-4xl font-extrabold tracking-tight">{t.projects.title}</h1>
				<p class="mt-2 text-slate-600">{t.projects.subtitle}</p>
			</div>
			<div class="flex items-center gap-2">
				<a
					href={`/${locale}`}
					class="rounded-full bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700">Home</a
				>
			</div>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each t.projects.items as project (project.name)}
				<article
					class="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="relative aspect-video overflow-hidden">
						<img
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							src={project.image}
							alt={project.name}
						/>
						{#if project.githubUrl || project.liveUrl}
							<div
								class="absolute inset-0 flex items-start justify-end bg-black/25 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<div class="flex flex-wrap justify-end gap-2">
									{#if project.githubUrl}
										<button
											type="button"
											onclick={() =>
												window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
											class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-800 transition hover:bg-slate-100"
										>
											{t.projects.githubCta}
										</button>
									{/if}
									{#if project.liveUrl}
										<button
											type="button"
											onclick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
											class="rounded-full bg-[#ffd709] px-3 py-1 text-xs font-semibold text-[#5b4b00] transition hover:brightness-95"
										>
											{t.projects.liveCta}
										</button>
									{/if}
								</div>
							</div>
						{/if}
					</div>
					<div class="space-y-3 p-5">
						<div class="text-xs font-bold tracking-widest text-[#6c5a00] uppercase">
							{project.period}
						</div>
						<h2 class="headline text-lg leading-snug font-bold">{project.name}</h2>
						<p class="text-sm text-slate-600">{project.description}</p>
						<p class="text-xs leading-relaxed text-slate-500">{project.stack}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</main>

<style>
	.headline {
		font-family: 'Plus Jakarta Sans', sans-serif;
	}
</style>
