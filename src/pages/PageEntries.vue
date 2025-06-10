<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-item v-for="entry in entries" :key="entry.id">
          <q-item-section> {{ entry.name }} </q-item-section>

          <q-item-section side> {{ entry.amount }} </q-item-section>
        </q-item>

        <q-item>
          <q-item-section> Total $: </q-item-section>
          <q-item-section side> {{ total }} </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const entries = ref([
  {
    id: "id: 1",
    name: "Salary",
    amount: 4000.0,
  },

  {
    id: "id: 2",
    name: "Rent",
    amount: -999,
  },

  {
    id: "id: 3",
    name: "Phone",
    amount: -120.0,
  },
  {
    id: "id: 4",
    name: "Groceries",
    amount: -100.0,
  },

  {
    id: "id: 5",
    name: "Unknown",
    amount: 0,
  },
]);

const total = ref(entries.value.reduce((acc, entry) => acc + entry.amount, 0));
</script>
