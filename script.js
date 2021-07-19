let fruits = ["Apple", "Mango", "Banana"];

let sayHello = function () {
    console.log("Hello apple lover!")
};
function printFirstFruit() {
    let favFruit = fruits[0];
    console.log(fruits[0]);
    
    function printFavFruit() {
        
        //of the top three
        let leastFav = fruits[2];
        
        console.log(favFruit);
    }
    
    printFavFruit();
    
};

printFirstFruit();
sayHello();