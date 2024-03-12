import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const pessoa = { nome: 'Tamires', idade: 23, cidade: 'Rio de janeiro', avatar: require('./assets/icon.png')};

function SaudacaoPersonalizada({ saudacao = "Olá", nome = "Usuário", style}) {
  return (
  <View style={[styles.saudacaoContainer, style]}>
    <Text>{saudacao}, {nome}!</Text>
    </View>
  );
}
function getHora() {
  const horaAtual = new Date().getHours();

  if (horaAtual >=5 && horaAtual < 12) {
    return 'Bom dia';
  } else if (horaAtual >=12 && horaAtual < 18){
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
}
const Saudacao = ({nome}) =>{
  return (
    <View style={styles.container}>
      <Text>Olá sr(a)., {nome}!</Text>
    </View>
  );
};

const ExibirPessoa = ({nome, idade, cidade}) => {
  return(
    <View style={styles.container}>
      <Image source={pessoa.avatar} styles={styles.avatar}/>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Cidade: {cidade}</Text>
    </View>
  );
};
export default function App() {
  const [saudacao, setSaudacao] = useState('');

  useEffect(() => {
    setSaudacao(getHora());
  }, []);

  return (
    <View style={styles.appContainer}>
      <SaudacaoPersonalizada saudacao={saudacao} nome={pessoa.nome}
style={styles.SaudacaoPersonalizada} />
      <ExibirPessoa {...pessoa} />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saudacaoContainer: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  SaudacaoPersonalizada: {
    backgroundColor :'lightblue',
    padding: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar:{
    height:50,
    width:50,
  }
});
