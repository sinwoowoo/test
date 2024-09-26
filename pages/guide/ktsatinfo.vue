<template>
  <main>
    <layoutPageTitle />
      <PageMaintab label="kt특장점" :tabs="tabs" />     
  </main>

</template>

<script setup lang="ts">
  import Merit from "./ktsatinfo/ktsat_merit.vue";
  import Wi from "./ktsatinfo/ktsat_wi.vue";

  const tabs = [
    { name: "merit", label: "KTsat특장점", component: Merit },
    { name: "wi", label: "위성서비스", component: Wi },
  ];

</script>
