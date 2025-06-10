<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-item v-for="entry in entries" :key="entry.id">
          <q-item-section
            class="text-weight-bold"
            :class="useAmountColor(entry.amount)"
          >
            {{ entry.name }}
          </q-item-section>

          <q-item-section
            side
            class="text-weight-bold"
            :class="useAmountColor(entry.amount)"
          >
            {{ useCurrencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>

      <q-item>
        <q-item-section class="text-weight-bold"> Balance: </q-item-section>
        <q-item-section side class="text-weight-bold">
          {{ useCurrencify(total) }}
        </q-item-section>
      </q-item>
    </div>

    <q-footer>
      <div class="row q-pa-sm row q-col-gutter-sm">
        <div class="col">
          <q-input outlined label="Name Input" bg-color="white" dense />
        </div>
        <div class="col">
          <q-input
            outlined
            label="Amount Input"
            bg-color="white"
            dense
            type="number"
            step="0.01"
          />
        </div>

        <div class="col col-auto">
          <q-btn round color="blue" dense icon="add" />
        </div>
      </div>
    </q-footer>
  </q-page>
</template>

<script setup>
import { useAmountColor } from "src/use/useAmountColor";
import { useCurrencify } from "src/use/useCurrencify";
import { ref } from "vue";

const entries = ref([
  {
    id: "1",
    name: "Salary",
    amount: 4000.0,
  },

  {
    id: "2",
    name: "Rent",
    amount: -999,
  },

  {
    id: "3",
    name: "Phone",
    amount: -120.0,
  },
  {
    id: "4",
    name: "Groceries",
    amount: -100.0,
  },

  {
    id: "5",
    name: "Unknown",
    amount: 0,
  },
]);

const total = ref(entries.value.reduce((acc, entry) => acc + entry.amount, 0));
</script>
