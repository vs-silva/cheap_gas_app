<template>
  <div class="flex flex-col p-2 fuel-types-container" v-if="fuelTypes.length">

    <div class="m-auto">
      <label for="gasStationFuelSelect">Select desired fuel type</label>
    </div>

    <div class="m-auto fuel-types-select-container">
      <select id="gasStationFuelSelect" v-model="selectedFuelType" @change="updateSelectedFuelType" class="text-center fuel-types-select">
        <option v-for="(fuelType) in fuelTypes" :key="fuelType" class="fuel-types-select-option">
          {{fuelType}}
        </option>
      </select>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Eventbus from "@/eventbus";
import {EventTypeConstants} from "@/eventbus/event-type.constants";
import type {GasStationOptionalRequestDTO} from "@/integration/gas-station/business/dtos/gas-station-optional-request.dto";

const props = defineProps({
  fuelTypes: {
    type: Array,
    required: false,
    default: () => []
  }
});

const selectedFuelType = ref(props.fuelTypes[0]);

function updateSelectedFuelType(event: Event) :void {
  event.preventDefault();
  Eventbus.emit(EventTypeConstants.UPDATE_OPTIONAL_STATION_REQUEST, <GasStationOptionalRequestDTO>{
    fuelType: selectedFuelType.value
  });
}

</script>

<style scoped>

</style>
