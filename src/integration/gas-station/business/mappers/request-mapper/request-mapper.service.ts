import type {
    RequestMapperInterface
} from "@/integration/gas-station/business/mappers/request-mapper/request-mapper.interface";
import type {GasStationRequestDTO} from "@/integration/gas-station/business/dtos/gas-station-request.dto";
import type {
    GasStationOptionalRequestDTO
} from "@/integration/gas-station/business/dtos/gas-station-optional-request.dto";
import {ApiTypeKeyConstants} from "@/integration/gas-station/business/constants/api-type-key.constants";

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
