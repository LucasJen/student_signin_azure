<script setup>
// Code goes here
import { ref } from 'vue'
import { useStudentStore } from '../stores/StudentsStore'

const studentStore = useStudentStore()

const newStudentName = ref('')
const newStarID = ref('')

const formErrors = ref([])

function addStudent() {

    formErrors.value = []

    if (newStudentName.value.length == 0){
        formErrors.value.push('Student name must be entered')
    }

    if (newStarID.value.length == 0) {
        formErrors.value.push('StarID must be entered')
    }

    // if there are no errors - is the form valid
    if (formErrors.value.length == 0) {
        let student = {
            name: newStudentName.value,
            starID: newStarID.value,
            present: false
        }

        // TODO - How to add student?

        studentStore.addNewStudent(student) // calls the function to add students to the store from StudentStore

        newStudentName.value = ""
        newStarID.value = ""
    }
}

</script>

<template>
<!-- HTML Template here -->

<div id="new-student-form-errors" class="m-2">
    <!-- TODO show errors from form validation -->
        <div v-if="formErrors.length > 0" class="alert alert-danger">
        <li v-for="error in formErrors">
            {{ error }}
        </li>
        </div>
</div>


<div id="new-student-form" class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>

    <div class="form-group mb-3">
        <label for="name">Name</label>
        <!-- TODO v-model newStudentName -->
        <input v-model.trim="newStudentName" id="name" class="form-control">
    </div>

    <div class="form-group mb-3">
        <label for="starID">Star ID</label>
            <!-- TODO v-model newStarID -->
        <input v-model.trim="newStarID" id="starID" class="form-control">
    </div>

    <!-- TODO v-on:click event handler -->
    <button v-on:click="addStudent" class="btn btn-primary">Add</button>
</div>

</template>

<style scoped>
/* CSS for this component */


</style>