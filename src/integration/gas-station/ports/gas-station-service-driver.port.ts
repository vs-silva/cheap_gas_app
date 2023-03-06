import type {GasStationDTO} from "../business/dtos/gas-station.dto";
import type { GasStationOptionalRequestDTO
} from "../business/dtos/gas-station-optional-request.dto";

export interface GasStationServiceDriverPort {
    getAllStations(optionalRequestDTO: GasStationOptionalRequestDTO): Promise<GasStationDTO[]>
}
