import type {GasStationDTO} from "@/integration/gas-station/business/dtos/gas-station.dto";
import type { GasStationOptionalRequestDTO
} from "@/integration/gas-station/business/dtos/gas-station-optional-request.dto";

export interface GasStationServiceDriverPort {
    getAllStations(optionalRequestDTO: GasStationOptionalRequestDTO): Promise<GasStationDTO[]>
}
