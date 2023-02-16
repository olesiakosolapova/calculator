import React from 'react';
import { useState } from 'react';
import './App.css';
import FirstQuestion from './components/FirstQuestion';
import SecondQuestion from './components/SecondQuestion';
import ThirdQuestion from './components/ThirdQuestion';
import FourthQuestion from './components/FourthQuestion';
import FifthdQuestion from './components/FifthQuestion';
import SixQuestion from './components/SixQuestion';


function App() {

  const [weight, setWeight] = useState('');
  const [category, setCategory] = useState('');
  const [nadvaha, setNadvaha] = useState('');
  const [activity, setActivity] = useState('');
  const [coffee, setCoffee] = useState('');
  const [weather, setWeather] = useState(''); 
  const [total, setTotal] = useState(0);

  function calculateWaterRegime() {

    const waterIntake = {
      'Kojenec': 110,
      'Dítě 1-3 roky': 95,
      'Dítě 4-6 let': 75,
      'Dítě 7-9 let': 60,
      'Dítě od 10 let': 40
    };
  
    const nadvahaIntake = {
      'Mám vcelku optimální váhu': 0,
      'Mám do 10 kg nadváhy': 250,
      'Mám do 20 kg nadváhy': 500,
      'Mám do 30 kg nadváhy': 750,
      'Mám do 40 kg nadváhy': 1000
    };
  
    const activityIntake = {
      'Čeká mě 30 min aktivity': 400,
      'Čeká mě 90 min aktivity': 1200,
      'Čeká mě 120 min aktivity': 1600,
      'Čeká mě 150 min aktivity': 2000
    };
  
    const coffeeIntake = {
      'Denně piju 1 kávu': 150,
      'Denně piju 2 kávy': 300,
      'Denně piju 3 kávy': 450
    };
  
    let baseIntake = parseInt(weight) * waterIntake[category] || 35;
    let additionalIntake = nadvahaIntake[nadvaha] || 1250;
    additionalIntake += activityIntake[activity] || 2400;
    additionalIntake += coffeeIntake[coffee] || 600;
  
    if (weather === 'Dnes je venku horké počasí') {
      additionalIntake *= 1.1;
    }
  
    const total = (baseIntake + additionalIntake) / 1000;
    setTotal(total);
  }
  
	return (
  <>
    <h1 className='App'>Kalkulačka pitného režimu</h1>
    <FirstQuestion question="1. Zadejte vaši váhu (na celá kila): " onChange={setWeight} />
    <SecondQuestion question="2. Vyberte si vaši kategorii: " onChange={setCategory} />
    <ThirdQuestion question="3. Máte nadváhu? " onChange={setNadvaha} />
    <FourthQuestion question="4. lánujete dnes pohybovou aktivitu? " onChange={setActivity} />
    <FifthdQuestion question="5. Pijete kávu? " onChange={setCoffee} />
    <SixQuestion question="6. Jaké je dnes počasí? " onChange={setWeather} />
    <button onClick={calculateWaterRegime}>Poslat!</button>
    <p>Dnes byste měli vypít {total} L vody!</p>
	</>
  );
}

export default App;

