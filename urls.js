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