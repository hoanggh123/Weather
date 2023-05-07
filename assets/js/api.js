/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright HoangDev 2023 All rights reserved
 * @author HoangDev <hoangdhps24957@fpt.edu.vn>
 */

'use strict';

const api_key = "eaaeec78d0b05e3a9d010f6ab3749d23";
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
  },
  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
  },
  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
  },
  /**
   * @param {string} query Search query e.g.: "London", "New York"
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
  }
}




// import { fetchData, url } from "./api.js";
// import * as module from "./module.js";
// const addEventOnElements = function (elements, eventType, callback) {
//   for (const element of elements) element.addEventListener(eventType, callback);
// }
// const searchView = document.querySelector("[data-search-view]");
// const searchTogglers = document.querySelectorAll("[data-search-toggler]");
// const toggleSearch = () => searchView.classList.toggle("active");
// addEventOnElements(searchTogglers, "click", toggleSearch);
// const searchField = document.querySelector("[data-search-field]");
// const searchResult = document.querySelector("[data-search-result]");
// let searchTimeout = null;
// const serachTimeoutDuration = 500;

// searchField.addEventListener("input", function () {

//   searchTimeout ?? clearTimeout(searchTimeout);
//   if (!searchField.value) {
//     searchResult.classList.remove("active");
//     searchResult.innerHTML = "";
//     searchField.classList.remove("searching");
//   } else {
//     searchField.classList.add("searching");
//   }
//   if (searchField.value) {
//     searchTimeout = setTimeout(() => {
//       fetchData(url.geo(searchField.value), function (locations) {
//         searchField.classList.remove("searching");
//         searchResult.classList.add("active");
//         searchResult.innerHTML = `
//           <ul class="view-list" data-search-list></ul>
//         `;

//         const /** {NodeList} | [] */ items = [];

//         for (const { name, lat, lon, country, state } of locations) {
//           const searchItem = document.createElement("li");
//           searchItem.classList.add("view-item");

//           searchItem.innerHTML = `
//             <span class="m-icon">location_on</span>

//             <div>
//               <p class="item-title">${name}</p>

//               <p class="label-2 item-subtitle">${state || ""} ${country}</p>
//             </div>

//             <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" aria-label="${name} weather" data-search-toggler></a>
//           `;

//           searchResult.querySelector("[data-search-list]").appendChild(searchItem);
//           items.push(searchItem.querySelector("[data-search-toggler]"));
//         }

//         addEventOnElements(items, "click", function () {
//           toggleSearch();
//           searchResult.classList.remove("active");
//         })
//       });
//     }, serachTimeoutDuration);
//   }

// });


// const container = document.querySelector("[data-container]");
// const loading = document.querySelector("[data-loading]");
// const currentLocationBtn = document.querySelector("[data-current-location-btn]");
// const errorContent = document.querySelector("[data-error-content]");