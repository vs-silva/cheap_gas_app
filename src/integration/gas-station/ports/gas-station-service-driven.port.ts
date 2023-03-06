import type {GasStationRequestDTO} from "@/integration/gas-station/business/dtos/gas-station-request.dto";

export interface GasStationServiceDrivenPort {
    get(requestParams: GasStationRequestDTO): Promise<object[]>;
}
