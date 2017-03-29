//import Realm from 'realm';
var Realm = require('realm');


class Pink extends Realm.Object {}

Pink.schema = {
    name: 'Pink',
    properties: {
      data: {type: 'string'}
    }
}

// Creates a new Ponto
createPonto = (horario_ponto) => {
  Pink.write(() => {
    Pink.create('Pink', {
      data: horario_ponto,
    });
  });
}

getPontos = () => {
  let pontos = Pink.objects('Pink').sorted('data'); // retrieves all Pontos from the Realm
  return pontos
}

// Create Realm DB
export default new Realm({schema: [Pink], schemaVersion: 7})
//const realm = new Realm({schema: [Ponto], schemaVersion: 4})
