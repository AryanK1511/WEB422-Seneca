/*********************************************************************************
*  WEB422 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Aryan Khurana Student ID: 145282216 Date: 23 may 2023
*
********************************************************************************/ 

// Selecting elements
let paginationControls = document.querySelector(".pagination");
let tableBody = document.querySelector('#moviesTable tbody');
let currentPageNumber = document.getElementById("curr-page");
const modalTitle = document.querySelector("#detailsModal .modal-title");
const modalBody = document.querySelector("#detailsModal .modal-body");


// This will keep track of the current page that the user is viewing.  
let page = 1;
// This will be a constant value that we will use to reference how many movie items we wish to view on each page of our application.  
const perPage = 10;

// Implements the functionality of the website
function loadMovieData(title = null) {
    // Fetches the movies by making API calls
    fetchMovieData(null, title) // The first param is null as we are not filtering using ID
    .then(response => {
        let movieRows = `${response.map(movie => (
            `<tr data-id=${movie._id} class="movie-row hover-shadow">
                <td>${movie.year}</td>
                <td>${movie.title}</td>
                <td>${movie.plot}</td>
                <td>${(movie.rated === undefined) ? "N/A" : movie.rated}</td>
                <td>${Math.floor(movie.runtime / 60)}:${(movie.runtime % 60).toString().padStart(2, '0')}</td>
            </tr>`
        )).join('')}`;
        tableBody.innerHTML = movieRows;
        currentPageNumber.textContent = page;
        // Adding click events to all the movie rows to display modals for each one of them
        addClickEvents(document.querySelectorAll(".movie-row"));
    })
    .catch((error) => {
        console.log(error);
    });
}

// This function makes a call to our moviesAPI and returns a promise that resolves with the fetched data
function fetchMovieData(id = null, title = null) {
    return new Promise((resolve, reject) => {
        let url;
        // Check if the ID is null. If it is null, that means that we want to access all movies
        if (id === null) {
            // Filtering by the title (case sensitive)
            if (title !== null) {
                url = `https://dull-jade-badger-vest.cyclic.app/api/movies?page=${page}&perPage=${perPage}&title=${title}`;
                paginationControls.classList.add("d-none");
            } else {
                // Getting all movies
                url = `https://dull-jade-badger-vest.cyclic.app/api/movies?page=${page}&perPage=${perPage}`;
                paginationControls.classList.remove("d-none");
            }
    
            // Making the API call
            fetch(url)
            .then(response => {
                resolve(response.json());
            })
            .catch((error) => {
                reject(error);
            });
        }
        else {
            // If the ID is provided, we get the movie by filtering by ID
            fetch(`https://dull-jade-badger-vest.cyclic.app/api/movies/${id}`)
            .then(response => {
                resolve(response.json());
            })
            .catch(error => {
                reject(error);
            })
        }
    });
}

// This function adds a click event to each row so that a modal can be displayed
function addClickEvents(rows) {
    rows.forEach(row => {
        row.addEventListener("click", () => {
            // If a row id clicked, the movie is fetched by the movie ID
            fetchMovieData(row.getAttribute("data-id"))
            .then((movie) => {
                // Modal pops up on the screen which is customized according to the movie clicked
                generateCustomModal(movie);
            })
            .catch((error) => {
                console.log(error);
            })
        })
    });
}

// Customisez the modal as per the movie
function generateCustomModal(movie) {
    modalTitle.textContent = movie.title;
    modalBody.innerHTML = `
        ${movie.poster ? `<img class="img-fluid w-100" alt="movie picture" src="${movie.poster}"><br><br>` : ''}
        <strong>Directed By:</strong> ${movie.directors.join(", ")}<br><br>
        <p>${movie.fullplot}</p>
        <strong>Cast:</strong> ${movie.cast.length > 0 ? movie.cast.join(", ") : "N/A"}<br><br>
        <strong>Awards:</strong> ${movie.awards.text}<br>
        <strong>IMDB Rating:</strong> ${movie.imdb.rating} (${movie.imdb.votes} votes)
    `;

    // Show the modal
    let detailsModal = new bootstrap.Modal(document.getElementById('detailsModal'), {
        backdrop: 'static', // default true - "static" indicates that clicking on the backdrop will not close the modal window
        keyboard: false, // default true - false indicates that pressing on the "esc" key will not close the modal window
        focus: true, // default true - this instructs the browser to place the modal window in focus when initialized
      });
    detailsModal.show();
}

// Events occur when rest of the DOM content is loaded
window.addEventListener("DOMContentLoaded", (event) => {
    // Calls the funtion to populate the table
    loadMovieData()

    // Click event for the "previous page" pagination button
    document.getElementById("prev-page").addEventListener("click", () => {
        (page > 1) ? page-- : page;
        loadMovieData();
    });

    // Click event for the "next page" pagination button
    document.getElementById("next-page").addEventListener("click", () => {
        page++;
        loadMovieData();
    });

    // Displays the movies which correspond to the name in the search bar
    document.getElementById("searchForm").addEventListener("submit", (event) => {
        event.preventDefault();
        loadMovieData(document.getElementById("title").value);
    });

    // Clears the form
    document.getElementById("clearForm").addEventListener("click", () => {
        document.getElementById("title").value = "";
        loadMovieData();
    });
});
