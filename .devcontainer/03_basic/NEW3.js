function filterStudents (students,passingGrade){
    let result = students.find( students => students.grade>=passingGrade);
    return result.name;
};

var students = [
    { name: 'Alice', age: 18, grade: 85 },
    { name: 'Bob', age: 19, grade: 92 },
    { name: 'Charlie', age: 17, grade: 78 },
    ];

    console.log(filterStudents(students,90));