document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
});

async function fetchNews() {
    const apiKey = '4366420042f844258a61db19017dd9c8';
    const category = document.getElementById('category').value;
    const country = document.getElementById('country').value;
    const searchQuery = document.getElementById('searchQuery').value;

    let apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;
    if (category) apiUrl += `&category=${category}`;
    if (country) apiUrl += `&country=${country}`;
    if (searchQuery) apiUrl += `&q=${encodeURIComponent(searchQuery)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (data.articles.length === 0) {
            displayEmptyState();
        } else {
            displayNews(data.articles);
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        displayErrorState(error);
    }
}

// async function fetchNews() {
//     const apiKey = '4366420042f844258a61db19017dd9c8';
//     // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
//     // const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
//     const apiUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;
//     // const apiUrl = `https://newsapi.org/v2/everything?q=Apple&from=2024-04-26&sortBy=popularity&apiKey=${apiKey}`;
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         if (data.articles.length === 0) {
//             displayEmptyState();
//         } else {
//             displayNews(data.articles);
//         }
//     } catch (error) {
//         console.error('Error fetching news:', error);
//         displayErrorState(error);
//     }
// }

function displayNews(articles) {
    const newsContainer = document.getElementById('news-articles');
    newsContainer.innerHTML = articles.map(article => `
        <div class="col-md-4 news-item">
            <div class="card">
                <img src="${article.urlToImage || 'https://via.placeholder.com/400'}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description || 'No description available.'}</p>
                    <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>
                </div>
            </div>
        </div>
    `).join('');
}

function displayEmptyState() {
    document.getElementById('news-articles').innerHTML = '<div class="col-12"><p class="text-center">No news articles are available at the moment.</p></div>';
}

function displayErrorState(error) {
    document.getElementById('news-articles').innerHTML = `<div class="col-12"><p class="text-center">Failed to fetch news: ${error.message}</p></div>`;
}
