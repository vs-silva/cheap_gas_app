import type {GasStationDTO} from "@/integration/gas-station/business/dtos/gas-station.dto";

export interface GasStationMapperInterface {
    mapToGasStationDTOCollection(data: object[]):Promise<GasStationDTO[]>;
}
