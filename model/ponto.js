var Realm = require('realm');

class Ponto extends Realm.Object {}

Ponto.schema = {
    name: 'Ponto',
    properties: {
      data: {type: 'string'}
    }
}

// Creates a new Ponto
export function createPonto(horario_ponto){
  pontoDB.write(() => {
    pontoDB.create('Ponto', {data: horario_ponto});
  });
}

export function getPontos() {
  let pontos = pontoDB.objects('Ponto').sorted('data'); // retrieves all Pontos from the Realm
  return pontos
}

//export function onChangedDB(ds){
  //pontoDB.addListener('change', () => {
    //this.setState({dataSource: ds.cloneWithRows(getPontos())});
  //});
//}

// Create Realm DB
let pontoDB = new Realm({schema: [Ponto], schemaVersion: 14});
export default pontoDB;
