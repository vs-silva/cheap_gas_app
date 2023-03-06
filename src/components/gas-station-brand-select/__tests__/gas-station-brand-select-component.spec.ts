import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import {faker} from "@faker-js/faker";
import GasStationBrandSelect from '../gas-station-brand-select-component.vue';

describe('Gas Station Brand select options tests', () => {

    it('It should not render select if list items is not provided', () => {
        const wrapper = mount(GasStationBrandSelect, {props: { brands: [] }});
        expect(wrapper.element.children).toBeUndefined();
        wrapper.unmount();
    });

    it('It should render select if list of brand is provided', () => {

        const brands: string[] = [
            faker.random.word(),
            faker.random.word(),
            faker.random.word(),
            faker.random.word(),
            faker.random.word(),

        ];

        const wrapper = mount(GasStationBrandSelect, {props: { brands: brands }});

        const selectContainer = wrapper.find('.brand-select-container');
        const select = wrapper.find('.brand-select');
        const selectDefaultOption = wrapper.find('.brand-select-default-option');
        const selectOptions = wrapper.find('.brand-select-option');

        expect(wrapper.element.children.length).toBeGreaterThan(0);
        expect(selectContainer.exists()).toBe(true);
        expect(select.exists()).toBe(true);
        expect(selectDefaultOption.exists()).toBe(true);
        expect(selectOptions.exists()).toBe(true);

        expect(select.element.children.length).toEqual(7);

        select.trigger('change');


        wrapper.unmount();
    });

});
