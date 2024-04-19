
var fruitsArray = ["яблоко", "банан", "апельсин", "груша"];
console.log("Длина массива:", fruitsArray.length);
alert("Длина массива: " + fruitsArray.length);
var confirmation = confirm("Хотите удалить один фрукт из массива?");
if (confirmation) {
    fruitsArray.pop(); 
    console.log("Фрукт удален:", fruitsArray);
    alert("Фрукт удален. Теперь массив: " + fruitsArray);
} else {
    console.log("Действие отменено, массив не изменен:", fruitsArray);
    alert("Действие отменено, массив не изменен.");
}

