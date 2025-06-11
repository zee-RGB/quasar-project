<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-slide-item
          @left="onLeft"
          @right="onRight"
          v-for="entry in entries"
          :key="entry.id"
          left-color="positive"
          right-color="negative"
        >
          <template v-slot:left>
            <q-icon name="done" />
          </template>
          <template v-slot:right>
            <q-icon name="delete" />
          </template>

          <q-item>
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
        </q-slide-item>
      </q-list>
    </div>

    <q-footer class="bg-transparent">
      <div class="row q-px-md q-py-sm shadow-up-3 q-mb-sm">
        <div class="col text-weight-bold text-h6 text-grey-7">Balance:</div>

        <div
          class="col text-weight-bold text-h6 text-right"
          :class="useAmountColor(balance)"
        >
          {{ useCurrencify(balance) }}
        </div>
      </div>

      <q-form
        @submit="addEntry"
        class="row q-px-sm q-pb-sm row q-col-gutter-sm bg-primary"
      >
        <div class="col">
          <q-input
            v-model="newEntry.name"
            ref="nameRef"
            outlined
            label="Name Input"
            bg-color="white"
            dense
          />
        </div>
        <div class="col">
          <q-input
            v-model.number="newEntry.amount"
            outlined
            label="Amount Input"
            bg-color="white"
            dense
            type="number"
            step="0.01"
          />
        </div>

        <div class="col col-auto">
          <q-btn round color="blue" dense icon="add" type="submit" />
        </div>
      </q-form>
    </q-footer>
  </q-page>
</template>

<script setup>
import { uid } from "quasar";
import { useAmountColor } from "src/use/useAmountColor";
import { useCurrencify } from "src/use/useCurrencify";
import { computed, reactive, ref } from "vue";

// refs
const nameRef = ref(null);

// reactive entries
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

// computed balance
const balance = computed(() => {
  return entries.value.reduce(
    (accumulator, { amount }) => accumulator + amount,
    0
  );
});

// default entry form
const defaultEntryForm = {
  name: "",
  amount: null,
};

// new entry
const newEntry = reactive({
  ...defaultEntryForm,
});

// reset new entry form
const resetForm = () => {
  Object.assign(newEntry, defaultEntryForm);
  nameRef.value.focus();
};

// adds new entry
const addEntry = () => {
  if (!newEntry.name || newEntry.amount === null) {
    return;
  }

  entries.value.push({ id: uid(), ...newEntry });

  // reset form
  resetForm();
};
</script>
