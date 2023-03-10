import type {GasStationServiceDriverPort} from "./ports/gas-station-service-driver.port";
import type {GasStationServiceDrivenPort} from "./ports/gas-station-service-driven.port";
import type {GasStationRequestDTO} from "./business/dtos/gas-station-request.dto";
import type {GasStationDTO} from "./business/dtos/gas-station.dto";
import type {
    GasStationOptionalRequestDTO
} from "./business/dtos/gas-station-optional-request.dto";
import {RequestMapperService} from "./business/mappers/request-mapper/request-mapper.service";
import {
    GasStationMapperService
} from "./business/mappers/gas-station-mapper/gas-station-mapper.service";

export function GasStationService(reader: GasStationServiceDrivenPort): GasStationServiceDriverPort {

    async function getAllStations(optionalRequestDTO: GasStationOptionalRequestDTO): Promise<GasStationDTO[]> {
        const requestDTO: GasStationRequestDTO = await RequestMapperService.mapToRequestDTO(optionalRequestDTO);
        const response = await reader.get(requestDTO);

        if(!response) {
            return <GasStationDTO[]>[];
        }

        return GasStationMapperService.mapToGasStationDTOCollection(response);
    }

    return {
        getAllStations
    };
}
