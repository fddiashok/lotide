const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
passingGrades=function (params) {
  console.log(params.filter(marks => marks>70));
}

passingGrades(grades)