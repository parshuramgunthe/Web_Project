const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchIcon = document.querySelector("#searchIcon");
const searchInput = document.querySelector("#searchInput");

searchIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.add("change");
    searchInputWrapper.classList.add("change");

    setTimeout(() => {
        searchInput.focus();
    }, 1000);
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performGoogleSearch();
    }
});

function performGoogleSearch() {
    const query = searchInput.value;
    if (query.trim() !== "") {
        searchIcon.parentElement.classList.remove("change");
        searchInputWrapper.classList.remove("change");

        setTimeout(() => {
            const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = googleSearchURL;
        }, 1000);
    }
}



















// const searchInputWrapper=document.querySelector(".search-input-wrapper");

// const searchIcon=document.querySelector(".search-icon i");

// const searchInput=document.querySelector(".search-input input");

// const closeIcon=document.querySelector(".search-input i");

// searchIcon.addEventListener("click",() =>
// {
//     searchIcon.parentElement.classList.add("change");
//     searchInputWrapper.classList.add("change");

//     setTimeout(() =>
//     {
//        searchInput.focus();
//     },1000);

// });

// closeIcon.addEventListener("click",() =>
// {
//     searchIcon.parentElement.classList.remove("change");
//     searchInputWrapper.classList.remove("change");
// });