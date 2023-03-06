import type {
    GasStationMapperInterface
} from "./gas-station-mapper.interface";
import type {GasStationDTO} from "../../../business/dtos/gas-station.dto";
import {
    GasStationRequestedFieldsConstants
} from "../../../business/constants/gas-station-requested-fields.constants";

async function mapToGasStationDTOCollection(data: object[]): Promise<GasStationDTO[]> {

    // @ts-ignore
    return data.filter((station) => station.isOpen === true)
        .map((item:object) => (<GasStationDTO>{
        // @ts-ignore
        id: item[`${GasStationRequestedFieldsConstants.ID}`],
        // @ts-ignore
        name: item[`${GasStationRequestedFieldsConstants.NAME}`],
        // @ts-ignore
        brand: item[`${GasStationRequestedFieldsConstants.BRAND}`],
        // @ts-ignore
        street: item[`${GasStationRequestedFieldsConstants.STREET}`],
        // @ts-ignore
        place: item[`${GasStationRequestedFieldsConstants.PLACE}`],
        // @ts-ignore
        lat: item[`${GasStationRequestedFieldsConstants.LAT}`],
        // @ts-ignore
        lng: item[`${GasStationRequestedFieldsConstants.LNG}`],
        // @ts-ignore
        distance: item[`${GasStationRequestedFieldsConstants.DIST}`],
        // @ts-ignore
        dieselPrice: item[`${GasStationRequestedFieldsConstants.DIESEL}`],
        // @ts-ignore
        e5Price: item[`${GasStationRequestedFieldsConstants.E5}`],
        // @ts-ignore
        e10Price: item[`${GasStationRequestedFieldsConstants.E10}`],
        // @ts-ignore
        price: item[`${GasStationRequestedFieldsConstants.PRICE}`],
        // @ts-ignore
        isOpen: item[`${GasStationRequestedFieldsConstants.IS_OPEN}`],
        // @ts-ignore
        houseNumber: parseInt(item[`${GasStationRequestedFieldsConstants.HOUSE_NUMBER}`]),
        // @ts-ignore
        postCode: item[`${GasStationRequestedFieldsConstants.POST_CODE}`],
    }));
}

export const GasStationMapperService: GasStationMapperInterface = {
  mapToGasStationDTOCollection
};
