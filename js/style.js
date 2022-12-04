// link
$(document).ready(function () {
    function activeTab(ojb) {
        $('.navbar-btn li').removeClass('active')

        $(ojb).addClass('active')

        let id = $(ojb).find('a').attr('href')

        $('.body').hide();

        $(id).show()
    }

    $('.navbar-btn li').click(function () {
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

$(document).ready(function () {
    function activeTab(ojb) {
        $('.banner li').removeClass('active')

        $(ojb).addClass('active')

        let id = $(ojb).find('a').attr('href')

        $('.body').hide();

        $(id).show()
    }

    $('.banner li').click(function () {
        activeTab(this)
        return false
    })
}
)
$(document).ready(function () {
    function activeTab(ojb) {
        $('.brand-brand li').removeClass('active')

        $(ojb).addClass('active')

        let id = $(ojb).find('a').attr('href')

        $('.body').hide();

        $(id).show()
    }

    $('.brand-brand li').click(function () {
        activeTab(this)
        return false
    })
})



// focus input
function focusInput(windowWidth) {
    if (windowWidth <= 520) {
        console.log('wd:' + windowWidth)
        $('.search').focusin(function () {
            $('.focus-input').hide()
        })
        $('.search').focusout(function () {
            $('.focus-input').show()
        })
    } else
        $('.search').focusin(function () {
            $('.focus-input').show()
        })

}

// hien thi thanh navbar
function grow(windowWidth) {
    if (windowWidth > 1024)
        document.getElementById('navbar-btn').style.display = 'flex'
    else {
        document.getElementById('navbar-btn').style.display = 'none'
    }
}

function onclick(windowWidth) {
    $(document).ready(function () {
        if (windowWidth <= 1024) {
            $('.navbar li').click(function () {
                document.getElementById('navbar-btn').style.display = 'none'
            })
        }
        else {
            $('.navbar li').click(function () {
                document.getElementById('navbar-btn').style.display = 'flex'
            })
        }
    })
}

let windowWidth = document.getElementById('website').clientWidth
focusInput(windowWidth)
grow(windowWidth)
onclick(windowWidth)

$(document).ready(function () {
    $(window).resize(function () {
        windowWidth = document.getElementById('website').clientWidth
        focusInput(windowWidth)
        grow(windowWidth)
        onclick(windowWidth)
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
let selling

$(document).ready(function () {
    selling = document.getElementById('best-selling').clientWidth
    console.error(selling)
    if (selling >= 1024) {
        $('.autoplay').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
    else if (selling >= 740) {
        $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    else if (selling >= 320) {
        console.log(selling)
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    else {
        console.warn(selling)
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

// bo loc
$(document).ready(function () {
    var x = $('.x').toArray()
    var hidden = $('.hidden').toArray()
    var resultFilter = $('.result-filter').toArray()
    var hiddenFilter = $('.hidden-filter').toArray()
    var leftFilter = $('.left-filter').toArray()
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener('click', function () {
            if (x[i].value == '0') {
                hidden[i].style.display = 'unset'
                resultFilter[i].style.width = '60%';
                hiddenFilter[i].style.maxWidth = '20%';
                hiddenFilter[i].style.minWidth = '255.82px';
                leftFilter[i].style.display = 'block';
                x[i].value = '1'
            } else {
                hidden[i].style.display = 'none';
                resultFilter[i].style.width = '72%';
                hiddenFilter[i].style.maxWidth = '2%';
                hiddenFilter[i].style.minWidth = '40px';
                leftFilter[i].style.display = 'none';
                x[i].value = '0';
            }
        })
    }
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
$(document).ready(function () {
    var more = $('.more').toArray()
    var style = $('.style').toArray()

    for (let i = 0; i < more.length; i++) {
        // minus.addClass('block')
        more[i].addEventListener('click', function () {
            if (more[i].value == '0') {
                console.log('manh')
                more[i].value = '1'
                style[i].style.display = 'flex'
                more[i].classList.remove('fa-plus')
                more[i].classList.add('fa-minus')
            }
            else {
                console.log('khanh')
                more[i].value = '0'
                style[i].style.display = 'none'
                more[i].classList.remove('fa-minus')
                more[i].classList.add('fa-plus')
            }
        })
    }
})

