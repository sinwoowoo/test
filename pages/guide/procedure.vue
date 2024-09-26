<template>
  <main>
    <layoutPageTitle />
      <PageMaintab label="이용절차" :tabs="tabs" />    
  </main>
</template>

<script setup lang="ts">
import Using from "./procedure/Using.vue";
import Subscription from "./procedure/Subscription.vue";

const tabs = [
  { name: "using", label: "이용 절차", component: Using },
  { name: "subscription", label: "청약 절차", component: Subscription },
];
</script>