

function getTopStudents (students,N){
    if (Array.isArray(students) || typeof N!=='number' ){
        const sortedStudents = students.sort((a,b) => b.grade-a.grade);
    const topNStudents = sortedStudents.slice(0,N);
    return addAllStudents(topNStudents);}
    else{
        return name_result= [];
};

function addAllStudents (students){
    return students.map(students => `name: ${students.name}`)
}
}

var students = [{name: 'Alice', grade: 85},{name: 'Bob', grade: 92}];

    console.log(getTopStudents(students,100)); 