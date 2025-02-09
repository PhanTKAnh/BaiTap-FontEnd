import { drawProduct } from "./drawProduct.js";
import { buttonSearch, filter, inputSearch, pagiNext, pagiNum, pagiPre, params } from "./variable.js";

drawProduct();


// search


const search = () => {
    params.q = inputSearch.value;
    drawProduct();

}

buttonSearch.addEventListener("click", function () {
    search();
});

inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        search();
    }

});


// end search

// filter


filter.addEventListener("change", function (e) {
    switch (e.target.value) {
        case "mac-dinh":
            params.sort = "";
            params.order = "";
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            params.order = "asc";
            break;
        case "gia-cao-den-thap":
            params.sort = "price";
            params.order = "desc";
            break;
        case "giam-gia-nhieu":
            params.sort = "discountPercentage";
            params.order = "desc";
            break;
        default:
            break;
    }
    drawProduct();
});

// end filter

// pagination


pagiNext.addEventListener("click", function () {
    params.page = params.page + 1;
    pagiNum.innerHTML = params.page;
    drawProduct();
});

pagiPre.addEventListener("click", function () {
    if (params.page > 1) {
        params.page = params.page - 1;
        pagiNum.innerHTML = params.page;
        drawProduct();
    }
});


// end pagination