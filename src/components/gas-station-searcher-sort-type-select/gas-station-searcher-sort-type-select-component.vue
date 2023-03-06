<template>
  <div class="flex flex-col p-2 sort-types-container" v-if="sortTypes.length">

    <div class="m-auto">
      <label for="gasStationSortSelect">Sort Gas Station by</label>
    </div>

    <div class="m-auto">
      <select id="gasStationSortSelect" v-model="selectedSortType" @change="updateSelectedFuelType" class="text-center sort-types-select">
        <option v-for="(sortType) in sortTypes" :key="`${sortType}`" class="sort-types-select-option">
          {{sortType}}
        </option>
      </select>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Eventbus from "../../eventbus";
import {EventTypeConstants} from "../../eventbus/event-type.constants";
import type {GasStationOptionalRequestDTO} from "../../integration/gas-station/business/dtos/gas-station-optional-request.dto";

const props = defineProps({
  sortTypes: {
    type: Array,
    required: false,
    default: () => []
  }
});

const selectedSortType = ref(props.sortTypes[0]);

function updateSelectedFuelType(event: Event) :void {
  event.preventDefault();
  Eventbus.emit(EventTypeConstants.UPDATE_OPTIONAL_STATION_REQUEST, <GasStationOptionalRequestDTO>{
    sort: selectedSortType.value
  });
}

</script>

<style scoped>

</style>
