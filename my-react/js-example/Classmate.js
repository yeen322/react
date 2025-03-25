let group;

// 일반 함수
// group = {
//     class : "1반",
//     students: ["예은","지수","은현"],
//
//     showList() {
//         group.students.forEach(
//             function(student) {
//                 console.log(this.class +" : " + student)
//             }
//         );
//     }
// };

group = {
    class : "1반",
    students: ["예은","지수","은현"],

    showList() {
        group.students.forEach((student) => {
            console.log(this.class + " : " + student);
        })
    }
}
group.showList();



