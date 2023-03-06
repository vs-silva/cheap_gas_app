import {defineStore} from "pinia";
import {StoreIdentifierConstants} from "@/store/constants/store-identifier.constants";
import {GasStationStore} from "@/store/sub-stores/gas-station.store";

export default {
    useGasStationStore: defineStore(StoreIdentifierConstants.GAS_STATION_STORE, GasStationStore)
};
