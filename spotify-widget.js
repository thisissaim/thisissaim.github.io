// ============================================================
//  SPOTIFY WIDGET (via Last.fm)
//  Shows what's playing now / last played, under the name in the header.
//
//  Setup:
//  1. Link Spotify to Last.fm: last.fm → Settings → Applications → Spotify
//  2. Get a free API key: https://www.last.fm/api/account/create
//  3. Fill in the three values below.
//  The widget stays hidden until LASTFM_USER and LASTFM_API_KEY are set.
// ============================================================

const SPOTIFY_WIDGET = {
    LASTFM_USER: 'thisissaim',          // your Last.fm username
    LASTFM_API_KEY: 'e5dd9e2d59233e6d052a6997365d855b',       // Last.fm API key (read-only, safe to publish)
    SPOTIFY_PROFILE: 'https://open.spotify.com/user/ee61wyxqpz5o2vkudvq1lf775',
    RECENT_COUNT: 3,          // tracks shown under the main one
    POLL_SECONDS: 30
};

(function () {
    var cfg = SPOTIFY_WIDGET;
    var root = document.getElementById('spotify-widget');
    if (!root || !cfg.LASTFM_USER || !cfg.LASTFM_API_KEY) return;

    // Last.fm's grey star placeholder, returned when it has no album art
    var NO_ART = '2a96cbd8b46e442fc41c2b86b821562f';
    var lastKey = '';

    function esc(str) {
        return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function art(track) {
        var imgs = track.image || [];
        var best = (imgs[2] || imgs[imgs.length - 1] || {})['#text'] || '';
        return best && best.indexOf(NO_ART) === -1 ? best : '';
    }

    function spotifyLink(track) {
        return 'https://open.spotify.com/search/' +
            encodeURIComponent(track.name + ' ' + track.artist['#text']);
    }

    function ago(uts) {
        var s = Math.max(0, Date.now() / 1000 - Number(uts));
        if (s < 60) return 'just now';
        if (s < 3600) return Math.floor(s / 60) + 'm ago';
        if (s < 86400) return Math.floor(s / 3600) + 'h ago';
        return Math.floor(s / 86400) + 'd ago';
    }

    function isPlaying(track) {
        return !!(track['@attr'] && track['@attr'].nowplaying === 'true');
    }

    function statusText(track) {
        return isPlaying(track)
            ? 'now playing'
            : 'last played' + (track.date ? ' · ' + ago(track.date.uts) : '');
    }

    function render(tracks) {
        if (!tracks.length) return;
        var now = tracks[0];
        var playing = isPlaying(now);
        var recent = tracks.slice(1, 1 + cfg.RECENT_COUNT);

        // Only rebuild when something changed, so the record keeps spinning smoothly
        var key = [playing, now.name, now.artist['#text']]
            .concat(recent.map(function (t) { return t.name; })).join('|');
        if (key === lastKey) {
            root.querySelector('.mw-status').textContent = statusText(now);
            return;
        }
        lastKey = key;

        var cover = art(now);
        root.classList.toggle('is-playing', playing);
        root.innerHTML =
            '<a class="mw-now" href="' + esc(spotifyLink(now)) + '" target="_blank" rel="noopener">' +
              '<span class="mw-disc" aria-hidden="true">' +
                (cover ? '<img src="' + esc(cover) + '" alt="">' : '') +
              '</span>' +
              '<span class="mw-meta">' +
                '<span class="mw-line"><span class="mw-track">' + esc(now.name) + '</span>' +
                '<span class="mw-artist"> — ' + esc(now.artist['#text']) + '</span></span>' +
                '<span class="mw-sub">' +
                  '<span class="mw-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
                  '<span class="mw-status">' + esc(statusText(now)) + '</span>' +
                '</span>' +
              '</span>' +
            '</a>' +
            (recent.length || cfg.SPOTIFY_PROFILE
              ? '<div class="mw-panel">' +
                  (recent.length
                    ? '<div class="mw-panel-label">recently</div><ul>' + recent.map(function (t) {
                        return '<li><a href="' + esc(spotifyLink(t)) + '" target="_blank" rel="noopener">' +
                          '<span class="mw-r-track">' + esc(t.name) + '</span>' +
                          '<span class="mw-r-artist"> — ' + esc(t.artist['#text']) + '</span></a></li>';
                      }).join('') + '</ul>'
                    : '') +
                  (cfg.SPOTIFY_PROFILE
                    ? '<a class="mw-profile" href="' + esc(cfg.SPOTIFY_PROFILE) + '" target="_blank" rel="noopener">my profile ↗</a>'
                    : '') +
                '</div>'
              : '');
        root.hidden = false;
    }

    function load() {
        var url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks' +
            '&user=' + encodeURIComponent(cfg.LASTFM_USER) +
            '&api_key=' + encodeURIComponent(cfg.LASTFM_API_KEY) +
            '&format=json&limit=' + (cfg.RECENT_COUNT + 1);
        fetch(url)
            .then(function (r) { return r.json(); })
            .then(function (data) {
                var t = data && data.recenttracks && data.recenttracks.track;
                render(Array.isArray(t) ? t : t ? [t] : []);
            })
            .catch(function () { /* keep showing the last good state */ });
    }

    // Tap toggles the recent list on touch screens
    root.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        root.classList.toggle('is-open');
    });
    document.addEventListener('click', function (e) {
        if (!root.contains(e.target)) root.classList.remove('is-open');
    });

    load();
    setInterval(function () { if (!document.hidden) load(); }, cfg.POLL_SECONDS * 1000);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) load(); });
})();
