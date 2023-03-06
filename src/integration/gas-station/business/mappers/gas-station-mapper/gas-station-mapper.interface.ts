import type {GasStationDTO} from "../../../business/dtos/gas-station.dto";

export interface GasStationMapperInterface {
    mapToGasStationDTOCollection(data: object[]):Promise<GasStationDTO[]>;
}
