let marks = 100
if (marks >= 33 && marks < 40) {
    console.log("Result : D");  
}
else if(marks >=40 && marks <50){
    console.log("Result : C");
}
else if(marks >=50 && marks <60){
    console.log("Result : B");
}
else if(marks >=60 && marks <70){
    console.log("Result : A-");
}
else if(marks >=70 && marks <80){
    console.log("Result : A");
}
else if(marks >=80 && marks <=100){
    console.log("Result : A+");
}
else{
    console.log("Result : Fail");
}