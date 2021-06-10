import { Address } from '../../model/addressModel';

export async function newAddress(event) {
    try {
        const { colonia, calle, codigoPostal, numeroExterior, numeroInterior } = JSON.parse(event.body);
        const eventAddress = await Address.create({
            colonia,
            calle,
            codigoPostal,
            numeroExterior,
            numeroInterior
        });
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Se creo correctamente la dirección',
                data: eventAddress
            })
        }
    } catch (e) {
        console.log(e);
        return {
            statusCode: 400,
            body: JSON.stringify({
                err: {
                    message: e.message
                }
            })
        }
    }
}