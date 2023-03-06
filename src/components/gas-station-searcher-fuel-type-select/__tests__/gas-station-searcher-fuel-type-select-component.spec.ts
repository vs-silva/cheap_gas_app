import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import {faker} from "@faker-js/faker";
import GasStationSearcherFuelTypeSelectComponent from '../gas-station-searcher-fuel-type-select-component.vue';

describe('Gas Station Fuel Type Select Component tests', () => {

    it('It should not render select if list items is not provided', () => {
        const wrapper = mount(GasStationSearcherFuelTypeSelectComponent, {props: { fuelTypes: [] }});
        expect(wrapper.element.children).toBeUndefined();
        wrapper.unmount();
    });

    it('It should render select if list of fuel types is provided', () => {

        const fuelTypes: string[] = [
            faker.random.word(),
            faker.random.word()
        ];

        const wrapper = mount(GasStationSearcherFuelTypeSelectComponent, {props: { fuelTypes: fuelTypes }});
        expect(wrapper.element.children.length).toBeGreaterThan(0);

        const container = wrapper.find('.fuel-types-container');
        const selectContainer = wrapper.find('.fuel-types-select-container');
        const select = wrapper.find('.fuel-types-select');
        const selectOption = wrapper.find('.fuel-types-select-option');

        expect(container.exists()).toBe(true);
        expect(selectContainer.exists()).toBe(true);
        expect(select.exists()).toBe(true);
        expect(selectOption.exists()).toBe(true);

        select.trigger('change');

        wrapper.unmount();
    });
});
