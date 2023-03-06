import {defineStore} from "pinia";
import {StoreIdentifierConstants} from "./constants/store-identifier.constants";
import {GasStationStore} from "./sub-stores/gas-station.store";

export default {
    useGasStationStore: defineStore(StoreIdentifierConstants.GAS_STATION_STORE, GasStationStore)
};
