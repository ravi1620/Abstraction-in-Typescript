import React from 'react';

import './App.css';
import Lion from './classes/Lion';
import Deer from './classes/Deer';

function App() {

// let one = new Animal();
let wildLion = new Lion();
let one = new Deer();
wildLion.runningBehaviour();
  return (
    <div className="App">
<h1 className='h1'><u>Abstraction in Typescript</u></h1>
<p className='p'><strong>(Abstraction in TypeScript)</strong><br></br>
Abstraction is a method of modelling objects in a system that separates the responsibilities of the class or type from the code that inherits it. As we'll see later in this blog, it is also a mechanism to enforce a concept known as contract-based development</p>

<img src=''></img>
    </div>
  );
}

export default App;
