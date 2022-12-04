
// Phan trang
let limit = 0;
let thisPage = 1;
let list = document.querySelectorAll('.product-product .box-product');
function checkLimit(widthPage) {
    if (widthPage >= 400 && widthPage <= 1024){
        limit = 12;
        loadItem()
    }
    else {
        limit = 10;
        loadItem()
    }
}
let widthPage = document.getElementById('website').clientWidth
checkLimit(widthPage)
$(document).ready(function () {
    $(window).resize(function () {
        widthPage = document.getElementById('website').clientWidth
        checkLimit(widthPage)
    })
})

function loadItem() {
    console.log('limit: ' + limit)
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet)
            item.style.display = 'block';
        else
            item.style.display = 'none';
    })
    listPage();
}
loadItem();

function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    // prev
    if (thisPage >= 1) {
        let prev = document.createElement('li');
        prev.classList.add('fa-solid', 'fa-chevron-left');
        if (thisPage > 1) {
            prev.setAttribute('onclick', 'changePage(' + (thisPage - 1) + ')');
            document.querySelector('.listPage').appendChild(prev);
        }
        else {
            document.querySelector('.listPage').appendChild(prev);
        }
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage)
            newPage.classList.add('active');
        newPage.setAttribute('onclick', 'changePage(' + i + ')');
        document.querySelector('.listPage').appendChild(newPage);
    }

    // next
    if (thisPage <= count) {
        let next = document.createElement('li');
        next.classList.add('fa-solid', 'fa-chevron-right');
        if (thisPage < count) {
            next.setAttribute('onclick', 'changePage(' + (thisPage + 1) + ')');
            document.querySelector('.listPage').appendChild(next);
        }
        else
            document.querySelector('.listPage').appendChild(next);
    }
}

function changePage(i) {
    thisPage = i;
    loadItem();
}

