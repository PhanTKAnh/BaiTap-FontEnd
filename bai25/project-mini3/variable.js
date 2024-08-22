export let params = {
    q: "",
    sort: "",
    order:"",
    page: 1,
    limit: 10,
    category: ""
};
export const inputSearch = document.querySelector("#searchInput");

export const buttonSearch = document.querySelector("#buttonSearch");

export const filter = document.querySelector("#filter");

export const pagiPre = document.querySelector("#paginationPre");
export const pagiNext = document.querySelector("#paginationNext");
export const pagiNum = document.querySelector("#paginationNum");
export const divProduct = document.querySelector("#product");
export const divCategory = document.querySelector(".row");