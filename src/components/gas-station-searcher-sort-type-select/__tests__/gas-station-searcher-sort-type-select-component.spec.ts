import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import {faker} from "@faker-js/faker";
import GasStationSearcherSortTypeSelectComponent from '../gas-station-searcher-sort-type-select-component.vue';

describe('Gas Station Sort Type Select Component tests', () => {

    it('It should not render select if list items is not provided', () => {
        const wrapper = mount(GasStationSearcherSortTypeSelectComponent, {props: { sortTypes: [] }});
        expect(wrapper.element.children).toBeUndefined();
        wrapper.unmount();
    });

    it('It should render select if list of sort types is provided', () => {

        const sortOptions: string[] = [
          faker.random.word(),
          faker.random.word()
        ];

        const wrapper = mount(GasStationSearcherSortTypeSelectComponent, {props: { sortTypes: sortOptions }});
        const sortTypesSelect = wrapper.find('.sort-types-select');
        const sortTypesSelectOptions = wrapper.find('.sort-types-select-option');

        expect(wrapper.element.children.length).toBeGreaterThan(0);
        expect(sortTypesSelect.exists()).toBe(true);
        expect(sortTypesSelectOptions.exists()).toBe(true);
        expect(sortTypesSelect.element.children.length).toEqual(2);

        sortTypesSelect.trigger('change');

        wrapper.unmount();
    });

});
