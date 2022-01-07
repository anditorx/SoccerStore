import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'Soccer Store',
  host: '192.168.1.4',
}).useReactNative();

if (reactotron) {
  reactotron.connect();
  reactotron.clear();
}
export default reactotron;
console.tron = reactotron;
