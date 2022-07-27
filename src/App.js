import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Counter from './components/counter/counter';
import React from 'react';
import Person from './components/person/person';

function App() {
  const person = {
    name: 'Fran',
    age: 30,
    address: {
      city: 'Madrid',
    }
  };
  const state = React.useState(person);
  const personValue = state[0];
  const personValueSetter = state[1];

  // Formato abreviado
  // const [personValue, personValueSetter] = React.useState({
  //   name: 'Fran',
  //   age: 30,
  // });

  const makePersonOlder = () => {
    personValueSetter({
      ...personValue,
      age: personValue.age + 1,
    });
  }

  return (
    <>
      <Header></Header>
      <Counter></Counter>
      <Person makeOlderCallback={makePersonOlder} person={personValue}></Person>
      <Footer></Footer>
    </>
  );
}

export default App;
