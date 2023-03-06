<template>
  <div class="flex justify-center" id="gasStationListContainer" v-if="gasStations.length">
    <ul class="w-96">
      <li v-for="(gasStation) in gasStations" :key="gasStation.id" :id="gasStation.id"
          class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-100 gas-station-list-item"
      >
        <div class="mb-2">
          <h3 class="font-bold">Gas Station<span v-if="gasStation.name"> - {{gasStation.name}}</span></h3>
          <p v-if="gasStation.brand"><span class="mr-2">Brand</span>{{gasStation.brand}}</p>
          <p v-if="gasStation.distance"><span class="mr-2">Distance</span>{{gasStation.distance}}km</p>
        </div>
        <div class="mb-2">
          <h4 class="font-semibold">Price(s)</h4>
          <p v-if="gasStation.dieselPrice"><span class="mr-2">Diesel</span>{{gasStation.dieselPrice}}€</p>
          <p v-if="gasStation.e10Price"><span class="mr-2">E10</span>{{gasStation.e10Price}}€</p>
          <p v-if="gasStation.e5Price"><span class="mr-2">E5</span>{{gasStation.e5Price}}€</p>
          <p v-if="gasStation.price">{{gasStation.price}}€</p>
        </div>
        <div class="mb-2">
          <h4 class="font-semibold">Address</h4>
          <p v-if="gasStation.street"><span class="mr-2">Street</span>{{gasStation.street}}</p>
          <p v-if="gasStation.place"><span class="mr-2">Place</span>{{gasStation.place}}</p>
          <p v-if="gasStation.houseNumber"><span class="mr-2">House Number</span>{{gasStation.houseNumber}}</p>
          <p v-if="gasStation.postCode"><span class="mr-2">Post Code</span>{{gasStation.postCode}}</p>
        </div>
        <div class="mb-2">
          <h4 class="font-semibold">Coordinates</h4>
          <p><span class="mr-2">Latitude</span>{{gasStation.lat}}</p>
          <p><span class="mr-2">Longitude</span>{{gasStation.lng}}</p>
        </div>
        <div>
          <button type="button" @click="shareGasStation(gasStation)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full gas-station-list-item-share-button">Share</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {shareGasStation} from "./utils/gas-stations-list-component.utils";
import type {GasStationDTO} from "../../integration/gas-station/business/dtos/gas-station.dto";
import {PropType} from "vue";

defineProps({
  gasStations: {
    type: [] as PropType<GasStationDTO[]>,
    required: false,
    default: () => <GasStationDTO[]>[]
  }
});

</script>

<style scoped>

</style>
