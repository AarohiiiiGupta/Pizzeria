menu_list_array = ["Veg Margherita Pizza", 
"Cheeseburger pizza", 
"Ultimate Pepperoni pizza", 
"Chicken Taco pizza",
 "Philly Cheese Steak pizza", 
 "Pacific Veggie pizza",
  "Spinach & Feta pizza"];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>";
    for (var o = 0; o < menu_list_array.length; o++) {
        htmldata = htmldata + '<li>' + menu_list_array[o] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;

}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>";
    for (var p = 0; p < menu_list_array.length; p++) {
        htmldata = htmldata + '<div class="cards">' + '<img src="pizzaimage.png">' + menu_list_array[p];
    }
    htmldata = htmldata + "</section>";
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top() {
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}