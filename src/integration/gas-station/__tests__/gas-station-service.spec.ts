import {describe, it, vi, expect} from "vitest";
import {FuelTypeConstants} from "../business/constants/fuel-type.constants";
import {SortTypeConstants} from "../business/constants/sort-type.constants";
import type {GasStationDTO} from "../business/dtos/gas-station.dto";
import type {GasStationOptionalRequestDTO} from "../business/dtos/gas-station-optional-request.dto";
import GasStation from "../index";

describe('Gas Station service Tests', () => {

    const timeout:number = 60 * 1000;

    describe('Gas Station service driver port tests', () => {

        it('getAllStations should return a list of gas stations available', async () => {

            const requestDTO: GasStationOptionalRequestDTO = {
                radius: 30,
                fuelType: FuelTypeConstants.ALL,
                sort: SortTypeConstants.BY_DISTANCE
            };

            const spy = vi.spyOn(GasStation, 'getAllStations');
            const result = await GasStation.getAllStations(requestDTO);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(requestDTO);
            expect(result.length).toBeGreaterThan(0);


            expect(result).toEqual(expect.arrayContaining(<GasStationDTO[]>[
                expect.objectContaining(<GasStationDTO>{
                    id: expect.any(String),
                    name: expect.any(String),
                    brand: expect.any(String),
                    street: expect.any(String),
                    houseNumber: expect.any(Number),
                    place: expect.any(String),
                    postCode: expect.any(Number),
                    isOpen: expect.any(Boolean),
                    distance: expect.any(Number),
                    lat: expect.any(Number),
                    lng: expect.any(Number),
                    dieselPrice: expect.any(Number),
                    e5Price: expect.any(Number),
                    e10Price: expect.any(Number)
                })
            ]));

            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

            for (const station of result) {
                expect(station.id).toMatch(uuidRegex);
            }

        }, { timeout });

    });


    describe('Gas Station service driven port tests', () => {

        it.todo('sample');

    });

});
