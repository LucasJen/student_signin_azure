<!-- App.vue serves as the container or parent for the components -->

<script setup>
// Code goes here
import { onMounted } from 'vue'

import NewStudentForm from './components/NewStudentForm.vue';
import StudentTable from './components/StudentTable.vue';
import StudentMessage from './components/StudentMessage.vue';

import { useStudentStore } from './stores/StudentsStore';

const studentStore = useStudentStore()

onMounted ( () => {
  // what is in here will run when the component is first displayed
  studentStore.getAllStudents()
})






</script>

<template>
  <!-- HTML Template here -->

  <NewStudentForm></NewStudentForm>

  <StudentTable></StudentTable>

  <StudentMessage></StudentMessage>


</template>

<style scoped>
/* CSS for this component */


</style>