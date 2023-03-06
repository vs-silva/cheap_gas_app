<template>
  <div class="flex flex-col p-2" v-if="brands.length">
    <div class="m-auto">
      <label for="gasStationBrandSelect">Filter search results by preferred gas station brand</label>
    </div>

    <div class="m-auto brand-select-container">
      <select id="gasStationBrandSelect" v-model="selectedBrand" @change="updateSelectedBrand" class="text-center brand-select">
        <option value="" disabled selected class="brand-select-default-option">Select desired brand</option>
        <option :value="GasStationBrandConstants.ALL" class="brand-select-option">{{GasStationBrandConstants.ALL.toUpperCase()}}</option>
        <option v-for="(brand) in brands" :key="brand" class="brand-select-option">
          {{brand}}
        </option>
      </select>
    </div>

  </div>

</template>

<script setup lang="ts">

import {PropType, ref} from "vue";
import Eventbus from "../../eventbus";
import {EventTypeConstants} from "../../eventbus/event-type.constants";
import {GasStationBrandConstants} from "../../integration/gas-station/business/constants/gas-station-brand.constants";

defineProps({
  brands: {
    type: [] as PropType<string[]>,
    required: false,
    default: () => []
  }
});

const selectedBrand = ref('');

function updateSelectedBrand(event: Event) :void {
  event.preventDefault();
  Eventbus.emit(EventTypeConstants.UPDATE_SELECTED_BRAND, selectedBrand.value);
}

</script>

<style scoped>

</style>
