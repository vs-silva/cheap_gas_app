<template>
  <div>
    <LoaderComponent />

    <div>
      <GasStationSearcherInputComponent />
      <GasStationSearcherFuelTypeSelectComponent :fuelTypes=fuelTypes />
      <GasStationSearcherSortTypeSelectComponent :sortTypes=sortTypes />
    </div>

    <div>
      <GasStationBrandSelectComponent :brands="gasStationBrands" />
      <GasStationsListComponent :gas-stations="filteredGasStations" />
    </div>

  </div>
</template>

<script setup lang="ts">
import Store from "@/store";
import { storeToRefs } from 'pinia';
import GasStationSearcherInputComponent
  from "@/components/gas-station-searcher-input/gas-station-searcher-input-component.vue";
import GasStationSearcherFuelTypeSelectComponent
  from "@/components/gas-station-searcher-fuel-type-select/gas-station-searcher-fuel-type-select-component.vue";
import GasStationSearcherSortTypeSelectComponent
  from "@/components/gas-station-searcher-sort-type-select/gas-station-searcher-sort-type-select-component.vue";
import Eventbus from "@/eventbus";
import {EventTypeConstants} from "@/eventbus/event-type.constants";
import type {
  GasStationOptionalRequestDTO
} from "@/integration/gas-station/business/dtos/gas-station-optional-request.dto";
import {onMounted} from "vue";
import GasStationBrandSelectComponent
  from "@/components/gas-station-brand-select/gas-station-brand-select-component.vue";
import LoaderComponent from "@/components/loader/loader-component.vue";
import GasStationsListComponent from "@/components/gas-stations-list/gas-stations-list-component.vue";

const gasStationStore = Store.useGasStationStore();
const { requestOptionalDTO, gasStationBrands, filteredGasStations, fuelTypes, sortTypes} = storeToRefs(gasStationStore);

onMounted(() => {
  gasStationStore.getAllStations();
});

Eventbus.on(EventTypeConstants.UPDATE_OPTIONAL_STATION_REQUEST, (payload) => {
  Object.assign(requestOptionalDTO.value, payload as GasStationOptionalRequestDTO);
  gasStationStore.getAllStations(requestOptionalDTO.value);
});

Eventbus.on(EventTypeConstants.UPDATE_SELECTED_BRAND, (payload) => {
  gasStationStore.filterGasStations(payload as string);
});





</script>

<style scoped>

</style>
