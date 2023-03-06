import type {GasStationServiceDrivenPort} from "../ports/gas-station-service-driven.port";
import type {GasStationRequestDTO} from "../business/dtos/gas-station-request.dto";
import ApiEngine from "../../../apiengine";
import settings from "../../../settings";


export function GasStationApiClientAdapter(): GasStationServiceDrivenPort {

    const endpoint: string = settings.api_base_url;

    async function get(requestParams: GasStationRequestDTO): Promise<object[]> {
        const response = await ApiEngine.get(`${endpoint}`, { params: requestParams });
        const data = response['data'];
        return data['stations'];
    }

    return {
      get
    };
}
