import Realm from 'realm'

class Ponto {
  //static get () { return realm.objects(Ponto.schema.name) }
  static schema = {
    name: 'Ponto',
    primaryKey: 'id',
    properties: {
      id: {type: 'int'},
      data: {type: 'date'}
    }
  }
}


// Creates a new Ponto
export const createPonto = (value, horario_ponto) => {
  realm.write(() => {
    realm.create(Ponto.schema.name, {
      id: value,
      data: horario_ponto
    });
  });
}

export const getPontos = () => {
  let pontos = [realm.objects('Ponto')] // retrieves all Pontos from the Realm
  return pontos
}

// Create Realm DB
const realm = new Realm({schema: [Ponto]})
