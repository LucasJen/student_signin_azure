<script setup>
// Code goes here

import { useStudentStore } from '../stores/StudentsStore';

import { storeToRefs } from 'pinia';

const studentStore = useStudentStore()

// adding the { } pulls just the object not everything from studentStore
const { studentList } = storeToRefs(studentStore)

</script>

<template>
<!-- HTML Template here -->

<div id="student-list-table" class="card m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <h5>{{ studentCount }} students in class.</h5>
    <div id="student-table">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>StarID</th>
                    <th>Present?</th>
                </tr>
            </thead>

            <tbody>
                <!-- TODO create table rows 
                Each row will have a checkbox, bound to the app's data 
                When the checkbox is checked/unchecked, 
                the student will be signed in/out -->
                
                <tr v-for="student in studentList" v-bind:class="{present: student.present, absent: !student.present }">
                    <td>{{ student.name }}</td>
                    <td>{{ student.starID }}</td>
                    <td>
                        <input type="checkbox" v-model="student.present" v-on:change="arrivedOrLeft(student)">
                        <span v-if="student.present" class="mx-3">Here!</span>
                        <span v-else class="mx-3">Not present</span>

                    </td>
                    <td>
                        <button v-on:click="deleteStudent(student)" class="btn btn-danger">
                            <i class="bi bi-trash-fill"></i> Delete
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</div>

</template>

<style scoped>
/* CSS for this component */

#student-table {
    max-height: 400px;
    overflow: scroll;
}

th, tr {
    width: 25%;
}

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}


</style>