const search = document.getElementById('search-bar');
const matchList = document.getElementById('match-list');

const searchStates = async searchText => {
    const res = await fetch('data/states.json');
    const states = await res.json();

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex)
    });

    if(searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
};

const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
    <div class="card card-body mb-1">
    <a href="${match.long}">
        <h4>${match.name}<span class="text-primary"></span></h4>
    </a>
    </div>
    `
        )
        .join('');

    matchList.innerHTML = html;
}
}

search.addEventListener('input', () => searchStates(search.value));