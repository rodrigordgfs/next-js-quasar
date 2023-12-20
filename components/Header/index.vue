<template>
  <div id="Header">
    <q-toolbar class="bg-grey-9 text-white">
      <q-btn flat round dense>
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title> Toolbar </q-toolbar-title>
      <q-btn flat round dense>
        <q-icon name="more_vert" />
      </q-btn>
    </q-toolbar>
  </div>
</template>

<script setup>
    const route = useRoute();
    console.log(route);
</script>

<style lang="scss" scoped></style>
