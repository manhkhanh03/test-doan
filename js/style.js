// link
$(document).ready(function () {
    function activeTab(ojb) {
        $('.navbar-btn .list-item').removeClass('active')

        $(ojb).addClass('active')

        let id = $(ojb).find('a').attr('href')

        $('.body').hide();

        $(id).show()
    }

    $('.navbar-btn .list-item').click(function () {
        activeTab(this)
        return false
    })

    activeTab($('.navbar-btn .list-item:first-child'))
})

$(document).ready(function () {
    function activeTab(ojb) {
        $('.list-item-a li').removeClass('active')

        $(ojb).addClass('active')

        let id = $(ojb).find('a').attr('href')

        $('.body').hide();

        $(id).show()
    }

    $('.list-list li').click(function () {
        activeTab(this)
        return false
    })
})

// sticky
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass('sticky');
        }
        else
            $('header').removeClass('sticky');
    })
})

// toggle
$(document).ready(function () {
    $('#toggle').click(function () {
        $('.navbar-btn').slideToggle()
    })
})

//slickSlider
let selling = document.getElementById('best-selling').clientWidth

$(document).ready(function () {
    if (selling >= 1024) {
        $('.autoplay').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    else if (selling >= 920) {
        $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    else if (selling >= 400) {
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    else {
        $('.autoplay').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
});


// singleItem
$(document).ready(function () {
    $('.single-item-rtl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
})

// Navbar
// hover navbar
function unHidden() {
    document.getElementById('list-item').addEventListener('mouseover', function () {
        document.getElementById('list-item').style.overflow = 'unset';
    })
    document.getElementById('list-item').addEventListener('mouseleave', function () {
        document.getElementById('list-item').style.overflow = 'hidden';
    })
}

function unNavHidden() {
    document.getElementById('item-nav').addEventListener('mouseover', function () {
        document.getElementById('item-nav').style.overflow = 'unset';
    })
    document.getElementById('item-nav').addEventListener('mouseleave', function () {
        document.getElementById('item-nav').style.overflow = 'hidden';
    })
}

unHidden();
unNavHidden();

$(document).ready(function () {
    let navbar = document.getElementById('website').clientWidth
    if (navbar <= 1024) {
        $(window).resize(function () {
            console.log(navbar)
            $('.navbar-btn li').click(function () {
                $('.navbar-btn').hide()
            })
        })
    }
    else {
        $(window).resize(function () {
            console.log(navbar)
            document.getElementById('navbar-btn').style.display = 'flex'
        })
    }
})



// bộ lọc
function hiddenFilter() {
    let hidden = document.getElementById('hidden')
    let result = document.getElementById('result-filter')
    let hiddenFilter = document.getElementById('hidden-filter')
    let rightFilter = document.getElementById('right-filter')
    let leftFilter = document.getElementById('left-filter')
    let x = document.getElementById('x')

    if (x.value == '0') {
        hidden.style.display = 'unset';
        result.style.width = '60%';
        hiddenFilter.style.maxWidth = '20%';
        hiddenFilter.style.minWidth = '255.82px';
        rightFilter.style.width = '78%';
        leftFilter.style.display = 'block';
        x.value = '1';
    } else {
        hidden.style.display = 'none';
        result.style.width = '72%';
        hiddenFilter.style.maxWidth = '2%';
        hiddenFilter.style.minWidth = '40px';
        rightFilter.style.width = '100%';
        leftFilter.style.display = 'none';
        x.value = '0';
    }
};

$(document).ready(function () {
    $('.barsButton').click(function () {
        $('.left-filter').slideToggle()
    })
})

$(document).ready(function () {
    $('.close-filter').click(function () {
        $('.left-filter').hide()
    })
})

// Sắp xếp bộ lọc
function sortFilter() {
    if (document.getElementById('down').value == '0') {
        document.getElementById('offer-sort').style.display = 'none';
        document.getElementById('down').value = '1';
    }
    else {
        document.getElementById('offer-sort').style.display = 'block';
        document.getElementById('down').value = '0';
    }
}

// Ẩn phong cách
let minusOne = document.getElementById('minusOne')
let plusOne = document.getElementById('plusOne')
let styleOne = document.getElementById('styleOne')
let minusTwo = document.getElementById('minusTwo')
let plusTwo = document.getElementById('plusTwo')
let styleTwo = document.getElementById('styleTwo')
let minusThree = document.getElementById('minusThree')
let plusThree = document.getElementById('plusThree')
let styleThree = document.getElementById('styleThree')

minusOne.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleOne.style.display = 'none'
    plusOne.style.display = 'block'
})
plusOne.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleOne.style.display = 'flex'
    minusOne.style.display = 'block'
})

minusTwo.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleTwo.style.display = 'none'
    plusTwo.style.display = 'block'
})
plusTwo.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleTwo.style.display = 'flex'
    minusTwo.style.display = 'block'
})

minusThree.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleThree.style.display = 'none'
    plusThree.style.display = 'block'
})
plusThree.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleThree.style.display = 'flex'
    minusThree.style.display = 'block'
})

// Phan trang
let widthPage = document.getElementById('website').clientWidth

let limit;
if (widthPage >= 740 && widthPage <= 1024)
    limit = 12;
else
    limit = 10;

let thisPage = 1;
let list = document.querySelectorAll('.product-product .box-product');

function loadItem() {
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

//heart
let like = document.getElementsByClassName('btn-like')
for (i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('pink');
    })
}
