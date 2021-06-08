import { Medidor } from "../../model/medidorModel";

//Metodo para Obtener todos los medidores
export async function getMedidor() {
  try {
    const eventGetMedidor = await Medidor.findAndCountAll({
      limit:10,
      offset: 0
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Datos encontrados",
        DataInTable: eventGetMedidor.count,
        data: eventGetMedidor.rows,
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({
        err: {
          message: e,
        },
      }),
    };
  }
}

//Metodo para obtener un solo medidor por ID
export async function getMedidorById(event) {
  try {
    let { ID } = event.pathParameters;
    let eventSearchId = await Medidor.findByPk(ID);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Medidor encontrado",
        data: eventSearchId,
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({
        err: {
          message: e,
        },
      }),
    };
  }
}

//Crear nuevo medidor
export async function newMedidor(event) {
  try {
    const { numero_medidor, watts } = JSON.parse(event.body);
    const eventSaveMedidor = await Medidor.create({
      numero_medidor,
      watts,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Medidor Creado",
        data: eventSaveMedidor,
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({
        err: {
          message: e,
        },
      }),
    };
  }
}

//Actualizar medidor por ID
export async function upMedidor(event) {
  try {
    let { ID } = event.pathParameters;
    const body = JSON.parse(event.body);
    const eventUpMedidor = await Medidor.update(
      {
        numero_medidor: body.numero_medidor,
        watts: body.watts,
      },
      {
        where: { id: ID },
      }
    );
    console.log(eventUpMedidor);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Medidor Actualizado",
        data: body,
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({
        err: {
          message: e,
        },
      }),
    };
  }
}

//Eliminar medidor por ID
export async function deleteMedidor(event) {
  try {
    let { ID } = event.pathParameters;
    const eventDestroy = await Medidor.destroy({ where: { id: ID } });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Medidor eliminado",
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({
        err: {
          message: e,
        },
      }),
    };
  }
}
