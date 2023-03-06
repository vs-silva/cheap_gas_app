import {GasStationService} from "./gas-station.service";
import {GasStationApiClientAdapter} from "./adapters/gas-station-api-client.adapter";

export default GasStationService(GasStationApiClientAdapter());
