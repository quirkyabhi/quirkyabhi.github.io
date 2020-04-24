function trigger(elee) {
    var name = elee.id;
    console.log("yo");
    window.localStorage.setItem("name",elee.id);
}

function clickk() {
    var n=window.localStorage.getItem("name");
    // console.log("wew")
    if (n =="grocerieslink1") {
        document.getElementById("Groceries").click();
    }
    if (n =="grocerieslink2") {
        document.getElementById("Groceries").click();
    }
    if (n =="grocerieslink3") {
        document.getElementById("Groceries").click();
    }
    if (n=="todaysdealslink1") {
        document.getElementById("Today's Deals").click();
    }
    if (n=="todaysdealslink2") {
        document.getElementById("Today's Deals").click();
    }
    if (n=="todaysdealslink3") {
        document.getElementById("Today's Deals").click();
    }
    if (n=="bestsellerslink1") {
        document.getElementById("Best Sellers").click();
    }
    if (n=="bestsellerslink2") {
        document.getElementById("Best Sellers").click();
    }
    if (n=="bestsellerslink3") {
        document.getElementById("Best Sellers").click();
    }
    if (n=="electronicslink1") {
        document.getElementById("Electronics").click();
    }
    if (n=="electronicslink2") {
        document.getElementById("Electronics").click();
    }
    if (n=="electronicslink3") {
        document.getElementById("Electronics").click();
    }
    if (n=="clothinglink1") {
        document.getElementById("Clothing").click();
    }
    if (n=="clothinglink2") {
        document.getElementById("Clothing").click();
    }
    if (n=="clothinglink3") {
        document.getElementById("Clothing").click();
    }
    if (n=="bookslink1") {
        document.getElementById("Books").click();
    }
    if (n=="bookslink2") {
        document.getElementById("Books").click();
    }
    if (n=="bookslink3") {
        document.getElementById("Books").click();
    }
    if (n=="newreleaseslink1") {
        document.getElementById("New Releases").click();
    }
    if (n=="newreleaseslink2") {
        document.getElementById("New Releases").click();
    }
    if (n=="newreleaseslink3") {
        document.getElementById("New Releases").click();
    }
    
}

function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value + " +";
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}
// function counter(counterr) {
//     var idd= counterr.id;
//     if (idd=="customercount") {
//         animateValue(idd, 0, 99999, 5000);
//     }
//     if (idd=="sellercount") {
//         animateValue(idd, 0, 9999, 5000);
//     }
//     if (idd=="partnercount") {
//         animateValue(idd, 0, 999, 5000);
//     }
// }
function counter() {
        animateValue("customercount", 0, 8374, 5000);
    
        animateValue("sellercount", 0, 472, 5000);
    
        animateValue("partnercount", 0, 37, 5000);
}


// counter trigger

// var element_position = $('#scroll-to').offset().top;
// var screen_height = $(window).height();
// var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
// var activation_point = element_position - (screen_height * activation_offset);
// var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
// $(window).on('scroll', function() {
//     // var y_scroll_pos = window.pageYOffset;
//     var y_scroll_pos = window.pageYOffset +200;


//     // var element_in_view = y_scroll_pos > activation_point;
//     // var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;
//     var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos;

    
//     // if(element_in_view || has_reached_bottom_of_page) {
//     if(has_reached_bottom_of_page) {

//         //Do something
//         counter();
//     }
// });

