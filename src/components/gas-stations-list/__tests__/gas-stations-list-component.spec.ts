import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import GasStationsListComponent from '../gas-stations-list-component.vue';
import type {GasStationDTO} from "../../../integration/gas-station/business/dtos/gas-station.dto";
import {faker} from "@faker-js/faker";

describe('Gas Station List Component Tests', () => {

    it('Gas station list should not render list items if empty array is provided ', () => {
        const wrapper = mount(GasStationsListComponent, {props: { gasStations: [] }});
        expect(wrapper.element.children).toBeUndefined();
        wrapper.unmount();
    });

    it('Gas station list should render list items if array is provided and a share button that should handle click event ', () => {

        const gasStations: GasStationDTO[] = [{
            id: faker.datatype.uuid(),
            name: faker.name.firstName(),
            place: faker.address.county(),
            street: faker.address.streetAddress(),
            postCode: parseInt(faker.address.zipCode()),
            houseNumber: parseInt(faker.random.alphaNumeric(2)),
            isOpen: true,
            brand: faker.random.word(),
            e5Price: parseInt(faker.random.alphaNumeric(2)),
            e10Price: parseInt(faker.random.alphaNumeric(2)),
            dieselPrice: parseInt(faker.random.alphaNumeric(2)),
            price: parseInt(faker.random.alphaNumeric(2)),
            lat: parseInt(faker.address.latitude()),
            lng: parseInt(faker.address.longitude()),
            distance: parseInt(faker.random.alphaNumeric())
        }];

        const wrapper = mount(GasStationsListComponent, {props: { gasStations: gasStations }});
        const listContainer = wrapper.find('#gasStationListContainer');
        const gasStationListItem = wrapper.find('.gas-station-list-item');
        const shareButton = wrapper.find('.gas-station-list-item-share-button');

        expect(wrapper.element.children.length).toBeGreaterThan(0);
        expect(listContainer.exists()).toBe(true);
        expect(gasStationListItem.exists()).toBe(true);
        expect(shareButton.exists()).toBe(true);

        shareButton.trigger('click');

        wrapper.unmount();
    });

});
