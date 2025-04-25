// podcast.js - Dynamically loads podcast episodes from Supabase for podcast.html

document.addEventListener('DOMContentLoaded', function() {
    const supabaseUrl = 'https://cbopynuvhcymbumjnvay.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib3B5bnV2aGN5bWJ1bWpudmF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5OTUxNzMsImV4cCI6MjA1OTU3MTE3M30.UZElMkoHugIt984RtYWyfrRuv2rB67opQdCrFVPCfzU';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    async function loadPodcasts() {
        const podcastGrid = document.getElementById('podcastGrid');
        if (!podcastGrid) return;
        let { data: episodes, error } = await supabase
            .from('podcast_episodes')
            .select('*')
            .order('published_at', { ascending: false });
        if (error) {
            podcastGrid.innerHTML = '<div class="error">Failed to load podcast episodes.</div>';
            return;
        }
        podcastGrid.innerHTML = '';
        episodes.forEach(ep => {
            const card = document.createElement('article');
            card.className = 'podcast-card fade-in';
            const audioMarkup = ep.audio_url ? `<audio controls src="${ep.audio_url}"></audio>` : '';
            const imgSrc = ep.image_url ? ep.image_url : 'img/podcast/default-podcast.jpg';
            const date = ep.published_at ? new Date(ep.published_at).toLocaleDateString() : '';
            card.innerHTML = `
                <img src="${imgSrc}" alt="${ep.title}" class="podcast-img">
                <div class="podcast-info">
                    <h3>${ep.title}</h3>
                    <p>${ep.description || ''}</p>
                    ${audioMarkup}
                    <div class="podcast-meta">${date}</div>
                    <a href="#" class="btn btn-secondary">Listen Now</a>
                </div>`;
            podcastGrid.appendChild(card);
        });
    }
    loadPodcasts();
});
