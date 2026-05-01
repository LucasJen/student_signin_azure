<!-- App.vue serves as the container or parent for the components -->

<script setup>
// Code goes here

import NewStudentForm from './components/NewStudentForm.vue';
import StudentTable from './components/StudentTable.vue';
import StudentMessage from './components/StudentMessage.vue';






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