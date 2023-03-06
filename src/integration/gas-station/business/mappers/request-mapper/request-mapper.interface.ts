import type {GasStationOptionalRequestDTO} from "../../../business/dtos/gas-station-optional-request.dto";
import type {GasStationRequestDTO} from "../../../business/dtos/gas-station-request.dto";

export interface RequestMapperInterface {
    mapToRequestDTO(optionalRequestDTO: GasStationOptionalRequestDTO):Promise<GasStationRequestDTO>;
}
