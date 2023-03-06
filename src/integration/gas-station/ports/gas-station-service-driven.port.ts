import type {GasStationRequestDTO} from "../business/dtos/gas-station-request.dto";

export interface GasStationServiceDrivenPort {
    get(requestParams: GasStationRequestDTO): Promise<object[]>;
}
