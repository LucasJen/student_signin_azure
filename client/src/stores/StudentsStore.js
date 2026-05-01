import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'

const studentAPI = mande('api/students')

// arrow notation takes the output of the function and feeds it into the '()' of the object that calls it
export const useStudentStore = defineStore('students', () => {

    const sortedStudents = ref([])
    const mostRecentStudent = ref( {} ) // empty object

    const addNewStudentErrors = ref ({})

    function getAllStudents() {
        // make an API request to get all students and save in store - studentList
        studentAPI.get().then( student => { // students is the JSON response from the API
            sortedStudents.value = student
        })
    }

    function addNewStudent(student) {
        // make api call to to add a new student
        // call getAllStudents to re-request the list of students from the api server
        studentAPI.post(student).then ( () => {
            getAllStudents()
        }).catch( err => {
            addNewStudentErrors.value = err.body
        })
    }

    function deleteStudent(studentToDelete) { // TODO make api request
        // TODO make api request
    }

    function arrivedOrLeft(student) {
        // todo make api request
    }

    const studentCount = computed( () => {
        return sortedStudents.value.length
    })

    return { // the below returned data can be accessed by the parent or other components.
        // reactive data
        sortedStudents,
        addNewStudentErrors,
        mostRecentStudent,

        // functions
        getAllStudents,
        addNewStudent,
        deleteStudent,

        // compute properties

        studentCount,
    }
})