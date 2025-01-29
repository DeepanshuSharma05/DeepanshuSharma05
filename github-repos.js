// github-repos.js
class GitHubProjects {
    constructor(username) {
        this.username = username;
        this.projectsContainer = document.getElementById('projectsGrid');
    }

    async fetchRepositories() {
        try {
            const response = await fetch(`https://api.github.com/users/${this.username}/repos?sort=updated&direction=desc`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                }
            });

            if (!response.ok) throw new Error('Failed to fetch repositories');

            const repos = await response.json();
            return repos;
        } catch (error) {
            console.error('Error fetching repositories:', error);
            return [];
        }
    }

    createProjectCard(repo) {
        return `
            <article class="card-3d neo-brutalism rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2" 
                    data-aos="fade-up" 
                    data-repo-name="${repo.name}"
                    data-tilt
                    data-tilt-max="15"
                    data-tilt-speed="400"
                    data-tilt-glare
                    data-tilt-max-glare="0.5">
                <div class="relative overflow-hidden group h-48">
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 opacity-90"></div>
                    <div class="relative h-full p-6 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-white mb-2">${repo.name}</h3>
                            <p class="text-white/80 text-sm line-clamp-3">${repo.description || 'No description available'}</p>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-white/60">
                            <i class="fas fa-clock"></i>
                            <span>Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
                <div class="p-6 bg-opacity-50 backdrop-blur-sm">
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${repo.language ? `
                            <span class="px-3 py-1 bg-purple-600/80 rounded-full text-sm backdrop-blur-sm">
                                ${repo.language}
                            </span>
                        ` : ''}
                        <span class="px-3 py-1 bg-purple-600/80 rounded-full text-sm backdrop-blur-sm">
                            <i class="fas fa-star mr-1"></i>${repo.stargazers_count}
                        </span>
                        <span class="px-3 py-1 bg-purple-600/80 rounded-full text-sm backdrop-blur-sm">
                            <i class="fas fa-code-branch mr-1"></i>${repo.forks_count}
                        </span>
                    </div>
                    <div class="flex justify-between items-center">
                        <a href="${repo.html_url}" target="_blank" 
                           class="inline-flex items-center px-4 py-2 rounded-lg neo-brutalism hover:text-purple-500 transition-colors">
                            <i class="fab fa-github mr-2"></i> View Code
                        </a>
                        ${repo.homepage ? `
                            <a href="${repo.homepage}" target="_blank" 
                               class="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors">
                                <i class="fas fa-external-link-alt mr-2"></i> Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </article>
        `;
    }

    createSkeletonLoader() {
        return `
            <article class="neo-brutalism rounded-xl overflow-hidden p-6">
                <div class="animate-pulse">
                    <div class="h-32 bg-gray-700/20 rounded-lg mb-4"></div>
                    <div class="h-4 bg-gray-700/20 rounded w-3/4 mb-2"></div>
                    <div class="h-4 bg-gray-700/20 rounded w-1/2"></div>
                </div>
            </article>
        `;
    }

    async initialize() {
        // Show loading state
        this.projectsContainer.innerHTML = Array(6).fill(this.createSkeletonLoader()).join('');

        // Fetch repositories
        const repos = await this.fetchRepositories();

        if (repos.length === 0) {
            this.projectsContainer.innerHTML = `
                <div class="col-span-full text-center py-10">
                    <p class="text-lg text-gray-500">No repositories found.</p>
                </div>
            `;
            return;
        }

        // Display repositories
        const projectsHTML = repos
            .filter(repo => !repo.fork) // Filter out forked repositories
            .map(repo => this.createProjectCard(repo))
            .join('');

        this.projectsContainer.innerHTML = projectsHTML;

        // Initialize Tilt.js
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });
    }
}