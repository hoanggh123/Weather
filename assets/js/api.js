/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright HoangDev 2023 All rights reserved
 * @author HoangDev <hoangdhps24957@fpt.edu.vn>
 */
"use strict";
const api_key = "eaaeec78d0b05e3a9d010f6ab3749d23";
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};
