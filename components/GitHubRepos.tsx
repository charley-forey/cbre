import Link from "next/link";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

export async function GitHubRepos() {
  const res = await fetch(
    "https://api.github.com/users/Charley-Forey-AI/repos?sort=updated&per_page=10&type=owner",
    {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "cbre-interview-landing",
      },
    },
  );

  if (!res.ok) {
    return (
      <p className="text-sm text-zinc-500">
        Repositories could not be loaded.{" "}
        <Link
          href="https://github.com/Charley-Forey-AI?tab=repositories"
          className="font-medium text-cbre-muted underline-offset-4 hover:text-cbre-bright hover:underline"
        >
          Open GitHub
        </Link>
        .
      </p>
    );
  }

  const repos = (await res.json()) as Repo[];

  if (repos.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        No public repositories listed.{" "}
        <Link
          href="https://github.com/Charley-Forey-AI"
          className="font-medium text-cbre-muted underline-offset-4 hover:text-cbre-bright hover:underline"
        >
          View profile
        </Link>
        .
      </p>
    );
  }

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {repos.map((repo) => (
        <li key={repo.id}>
          <Link
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-left ring-1 ring-white/[0.03] transition hover:border-cbre/35 hover:bg-zinc-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
          >
            <span className="font-mono text-sm font-semibold text-cbre-bright">
              {repo.name}
            </span>
            {repo.description ? (
              <span className="mt-1 line-clamp-2 text-xs leading-snug text-zinc-500">
                {repo.description}
              </span>
            ) : null}
            <span className="mt-2 flex flex-wrap items-center gap-x-2 text-[11px] text-zinc-600">
              {repo.language ? (
                <span className="text-zinc-500">{repo.language}</span>
              ) : null}
              {repo.language ? <span aria-hidden>·</span> : null}
              <span>{repo.stargazers_count} stars</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
