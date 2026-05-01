import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'

const studentAPI = mande('api/students')

// arrow notation takes the output of the function and feeds it into the '()' of the object that calls it
export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        {name: 'A. Student', starID: 'aa1234aa', present: false}, //array of dicts to store each student and their status
        {name: 'B. Student', starID: 'bb1234bb', present: false}
    ])

    const mostRecentStudent = ref( {} ) // empty object

    function getAllStudents() {
        // make an API request to get all students and save in store - studentList
        studentAPI.get().then( student => { // students is the JSON response from the API
            studentList.value = student
        })
    }

    function addNewStudent(student) {
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student
        })
    }

    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })

    const studentCount = computed( () => {
        return studentList.value.length
    })

    return { // the below returned data can be accessed by the parent or other components.
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        getAllStudents,
        addNewStudent,
        deleteStudent,

        // compute properties
        sortedStudents,
        studentCount,
    }
})