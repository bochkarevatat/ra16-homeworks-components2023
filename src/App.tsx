import ShopItemFunc from './components/ShopItemFunc.tsx';
import './App.css';

// const item = {
//   brand: 'Tiger of Sweden',
//   title: 'Leonard coat',
//   description: 'Minimalistic coat in cotton-blend',
//   descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
//   price: 399,
//   currency: '£'
// }

const item2 ={
  brand: 'Полосатый усатый в Москве',
  title: 'Плащ мужской',
  description: 'Плащ мужской для прогулок по вечерам',
  descriptionFull: 'Сделано в России под заказ. Хороший выбор для настоящего мужчины',
  price: 9999,
  currency: '₽ '
}

const App = ()=> {
  return (
    <div className='container'>
      <div className='background-element'></div>
      <div className='highlight-window'>
        <div className='highlight-overlay'></div>
      </div>
      <div className='window'>
        <ShopItemFunc item={item2} />
      </div>
    </div>
  );
}

export default App;