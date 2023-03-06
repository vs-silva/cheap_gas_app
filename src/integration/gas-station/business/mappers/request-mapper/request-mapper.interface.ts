import type {GasStationOptionalRequestDTO} from "@/integration/gas-station/business/dtos/gas-station-optional-request.dto";
import type {GasStationRequestDTO} from "@/integration/gas-station/business/dtos/gas-station-request.dto";

export interface RequestMapperInterface {
    mapToRequestDTO(optionalRequestDTO: GasStationOptionalRequestDTO):Promise<GasStationRequestDTO>;
}
