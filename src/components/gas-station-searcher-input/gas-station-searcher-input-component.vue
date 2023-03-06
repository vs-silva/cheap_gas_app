<template>
  <div class="flex flex-col p-2">

    <div class="m-auto">
      <label for="gasStationDistanceInput">Search Gas Stations in the radius distance of ( kms )</label>
    </div>
    <div class="m-auto">
      <input id="gasStationDistanceInput" type="number"
             v-model="selectedRadius"
             @change="updateSelectedRadius"
             min="0"
             placeholder="insert gas station radius distance"
             class="text-center"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Eventbus from "@/eventbus";
import {EventTypeConstants} from "@/eventbus/event-type.constants";
import type {GasStationOptionalRequestDTO} from "@/integration/gas-station/business/dtos/gas-station-optional-request.dto";

const selectedRadius = ref(0);

function updateSelectedRadius(event: Event) :void {
  event.preventDefault();
  Eventbus.emit(EventTypeConstants.UPDATE_OPTIONAL_STATION_REQUEST, <GasStationOptionalRequestDTO>{
    radius: selectedRadius.value
  });
}

</script>

<style scoped>

</style>
