import { Address } from '../../model/addressModel';

export async function getAddress(event) {
    try {
        let AddressInDB = await Address.findAndCountAll({
            limit: 10
        });
        if(AddressInDB) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Direcciones encontradas',
                    dataInDB: AddressInDB.count,
                    data: AddressInDB.rows
                })
            }
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