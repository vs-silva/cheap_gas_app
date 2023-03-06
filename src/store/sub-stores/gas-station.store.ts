import {ref} from "vue";
import type {GasStationDTO} from "../../integration/gas-station/business/dtos/gas-station.dto";
import GasStation from "../../integration/gas-station";
import type {GasStationOptionalRequestDTO} from "../../integration/gas-station/business/dtos/gas-station-optional-request.dto";
import {FuelTypeConstants} from "../../integration/gas-station/business/constants/fuel-type.constants";
import {SortTypeConstants} from "../../integration/gas-station/business/constants/sort-type.constants";
import {GasStationBrandConstants} from "../../integration/gas-station/business/constants/gas-station-brand.constants";

export function GasStationStore () {

    const requestOptionalDTO = ref(<GasStationOptionalRequestDTO>{ })
    const gasStations = ref(<GasStationDTO[]>[]);
    const filteredGasStations = ref(<GasStationDTO[]>[]);
    const gasStationBrands = ref(<string[]>[]);
    const fuelTypes = ref(<string[]>[
        FuelTypeConstants.ALL,
        FuelTypeConstants.DIESEL,
        FuelTypeConstants.E10,
        FuelTypeConstants.E5
    ]);
    const sortTypes = ref(<string[]>[
        SortTypeConstants.BY_DISTANCE,
        SortTypeConstants.BY_PRICE
    ]);

    async function getAllStations(requestDTO?: GasStationOptionalRequestDTO):Promise<void> {

        const reqPayload: GasStationOptionalRequestDTO = {
            radius: 30,
            fuelType: FuelTypeConstants.ALL,
            sort: SortTypeConstants.BY_DISTANCE
        };

        if(requestDTO && Object.keys(requestDTO).length) {
            Object.assign(reqPayload, requestDTO);
        }

        const result = await GasStation.getAllStations(reqPayload);
        gasStations.value = result;
        filteredGasStations.value = result;
        // @ts-ignore
        gasStationBrands.value = [...new Set(result.map(station => (station.brand)))];
    }

    function filterGasStations(requestedBrand: string): void {

        if(requestedBrand.toLowerCase().trim() === GasStationBrandConstants.ALL.toLowerCase().trim()) {
            filteredGasStations.value = gasStations.value;
            return;
        }

        filteredGasStations.value = gasStations.value.filter(gasStation => gasStation.brand.toLowerCase().trim() === requestedBrand.toLowerCase().trim());
    }

    return {
        requestOptionalDTO,
        gasStationBrands,
        filteredGasStations,
        fuelTypes,
        sortTypes,
        getAllStations,
        filterGasStations
    };
}
