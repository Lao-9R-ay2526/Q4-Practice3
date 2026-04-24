// Main

function display(){
    let category = document.getElementById("cat").value;

    // Variables

    switch (category) {
        case "C":
            document.getElementById("showcase").innerHTML = "Category: Clothing";
            break;
        
        case "E":
            document.getElementById("showcase").innerHTML = "Category: Electronics";
            break;
        
        case "B":
            document.getElementById("showcase").innerHTML = "Category: Books";
            break;
        

        default:
            window.alert("Invalid Category");
    }
}
