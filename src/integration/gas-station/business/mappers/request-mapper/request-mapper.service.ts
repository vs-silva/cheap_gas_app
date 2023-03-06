import type {
    RequestMapperInterface
} from "./request-mapper.interface";
import type {GasStationRequestDTO} from "../../dtos/gas-station-request.dto";
import type {
    GasStationOptionalRequestDTO
} from "../../dtos/gas-station-optional-request.dto";
import {ApiTypeKeyConstants} from "../../constants/api-type-key.constants";

async function mapToRequestDTO(optionalRequestDTO: GasStationOptionalRequestDTO): Promise<GasStationRequestDTO> {

    return <GasStationRequestDTO>{
        isOpen: true,
        type: optionalRequestDTO.fuelType,
        rad: optionalRequestDTO.radius,
        sort: optionalRequestDTO.sort,
        apikey: ApiTypeKeyConstants.OPEN_KEY,
        lat: 53,
        lng: 14
    }
}

export const RequestMapperService: RequestMapperInterface = Object.freeze({
    mapToRequestDTO
});
