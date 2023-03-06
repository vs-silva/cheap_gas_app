import type {GasStationDTO} from "@/integration/gas-station/business/dtos/gas-station.dto";

export async function shareGasStation(gasStation: GasStationDTO):Promise<void> {

    const shareContent = {
        title: `Gas Station: ${gasStation.name}`,
        text: `
      Name: ${gasStation.name}
      Brand: ${gasStation.brand}
      Distance: ${gasStation.distance}KMs
      --
      Price(s)
      ${gasStation.dieselPrice ? `Diesel Price: ${gasStation.dieselPrice}` : ''}
      ${gasStation.e10Price ? `E10 Price: ${gasStation.e10Price}` : ''}
      ${gasStation.e5Price ? `E5 Price: ${gasStation.e5Price}` : ''}
      ${gasStation.price ? `Price: ${gasStation.price}` : ''}
      --
      Address
      Street: ${gasStation.street}
      Place: ${gasStation.place}
       ${gasStation.houseNumber ? `House Number: ${gasStation.houseNumber}` : ''}
      Post Code: ${gasStation.postCode}
      --
      Coordinates
      Latitude: ${gasStation.street}
      Longitude: ${gasStation.street}
    `
    };

    if(navigator.share){
        await navigator.share({
            title: shareContent.title,
            text: shareContent.text,
            url: 'http://localhost:5174/'
        });

        return;
    } else if(navigator.clipboard && navigator.clipboard.writeText){
       await navigator.clipboard.writeText(`${shareContent.title} - ${shareContent.text}`);
    }

}
