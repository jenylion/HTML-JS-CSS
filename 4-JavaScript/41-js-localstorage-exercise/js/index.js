window.onload = function(){
    // get HTML elements
    let coursesList = document.querySelector('#coursesList')
    let studentGradeInp = document.querySelector('#studentGradeInp')
    let addGradeBtn = document.querySelector('#addGradeBtn')
    let gradeListElement = document.querySelector('#gradeListElement')
    let saveStudentBtn = document.querySelector('#saveStudentBtn')
    let studentNameInp = document.querySelector('#studentNameInp')
    let body = document.querySelector('body')

    // declare empty array to save grade OBJECTS
    let gradesArr = []
    // declare students array to save students
    let studentsArr = []
    addGradeBtn.addEventListener('click', function (e) {
        //console.log(coursesList.selectedIndex);
        //console.log(coursesList.options[coursesList.selectedIndex].value);
        let selectedCourse = coursesList.options[coursesList.selectedIndex].value
        let grade = studentGradeInp.value
        if(selectedCourse !== '' && grade.trim() !== ''){
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse + ': ' + grade + '%'
            gradeListElement.append(listItem)
            studentGradeInp.value = ''
            // create grade object to push it in gradesArr
            let gradeObj = {}
            // if(selectedCourse == 'Math'){
            //     gradeObj.math = grade
            // }
            // if(selectedCourse == 'English'){
            //     gradeObj.english = grade
            // }
            // if(selectedCourse == 'computer science1'){
            //     gradeObj.computer_science1 = grade
            // }
            // if(selectedCourse == 'java'){
            //     gradeObj.java = grade
            // }
            gradeObj[selectedCourse.replace(/ /g, "_")] = grade
            gradesArr.push(gradeObj)
            console.log(gradesArr);
            
        }
      })
      saveStudentBtn.addEventListener('click', function (e) {
          
          if(studentNameInp.value.trim()){
            let studentObj = {}
            studentObj.name = studentNameInp.value
            studentObj.grades = gradesArr
            studentsArr.push(studentObj)
            localStorage.setItem('students', JSON.stringify(studentsArr))
            gradeListElement.innerHTML = ''
            studentGradeInp.value = ''
            studentNameInp.value = ''
            gradesArr = []
          }
          
        })

        // my code is here to bring data from local storage and render it
        let storageData = localStorage.getItem('students')
        console.log(storageData);
        if(storageData){
            let dataObj = JSON.parse(storageData)
            console.log(dataObj);
            // create container div and add it to the body
            let containerDiv = document.createElement('div')
            body.append(containerDiv)
            dataObj.forEach(element => {
                console.log(element);
                let nameH3 = document.createElement('h3')
                nameH3.innerText = element.name
                containerDiv.append(nameH3)
                element.grades.forEach(grade => {
                    console.log(Object.keys(grade));
                    // create ul for the grades and append it to containerDiv
                    let gradeUl = document.createElement('ul')
                    containerDiv.append(gradeUl)
                    Object.keys(grade).forEach(key =>{
                        console.log(key);
                        console.log(grade[key]);
                        let gradeLi = document.createElement('li')
                        gradeLi.innerText = key + ": " + grade[key] + "%"
                        gradeUl.append(gradeLi)
                        
                    })
                    
                })
            });
            
        }
        
        

}

// 1 == "1"  true check only the value
// 1 === "1" falsecheck type and value

// Homeworks
// first
// show the  student  and its grades at the end of the page on  save student click

// second
// load the students from the local storage to studentsArr so we keep them in the temp mempry 
// to save them again instead of losing the data and overwrite the data in the local storage





