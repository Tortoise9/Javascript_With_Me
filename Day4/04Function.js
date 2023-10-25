function fruit(apples ,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} Apples and ${oranges} Oranges`;
    return juice;
}

let sentence = fruit(5,0);
console.log(sentence);
console.log(fruit(3,10));
