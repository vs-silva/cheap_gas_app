import {GasStationService} from "@/integration/gas-station/gas-station.service";
import {GasStationApiClientAdapter} from "@/integration/gas-station/adapters/gas-station-api-client.adapter";

export default GasStationService(GasStationApiClientAdapter());
