import { useState } from 'react';
import './styles.css';

const calcData = [
  { id: 'clear', value: 'AC' },
  { id: 'one', value: 1 },
  { id: 'two', value: 2 },
  { id: 'three', value: 3 },
  { id: 'four', value: 4 },
  { id: 'five', value: 5 },
  { id: 'six', value: 6 },
  { id: 'seven', value: 7 },
  { id: 'eight', value: 8 },
  { id: 'nine', value: 9 },
  { id: 'zero', value: 0 },
  { id: 'add', value: '+' },
  { id: 'multiply', value: 'x' },
  { id: 'subtract', value: '-' },
  { id: 'divide', value: '/' },
  { id: 'equals', value: '=' },
  { id: 'decimal', value: '.' },
  { id: 'clear', value: 'AC' },
];

const operators = ['AC', '/', '-', '+', '=', 'x'];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Display = ({ input, output }) => {
  <div className='output'>
    <span className='result'>{output}</span>
    <span id='display' className='input'>
      {input}
    </span>
  </div>;
};

const Key = ({ keyData: { id, value }, handleInput }) => {
  <button id={id} onClick={() => handleInput(value)}>
    {value}
  </button>;
};

const Keyboard = ({ handleInput }) => {
  <div className='keys'>
    {calcData.map((key) => {
      <Key key={key.id} keyData={key} handleInput={handleInput} />;
    })}
  </div>;
};

function App() {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');

  const handleInput = () => {};

  return (
    <div className='container'>
      <div className='calculator'>
        <Display input={input} output={output} />
        <Keyboard handleInput={handleInput} />
      </div>
    </div>
  );

  // return (
  //   <div className='calculator-grid'>
  //     <div className='output' id='display'>
  //       <div className='previous-operand'></div>
  //       <div className='current-operand'></div>
  //     </div>
  //     <button className='span-two' id='clear'>
  //       AC
  //     </button>
  //     <button>DEL</button>
  //     {/* <OperationButton id='divide'>÷</OperationButton> */}
  //     <button id='one'>1</button>
  //     <button id='two'>2</button>
  //     <button id='three'>3</button>
  //     {/* <OperationButton id='multiply'>*</OperationButton> */}
  //     <button id='four'>4</button>
  //     <button id='five'>5</button>
  //     <button id='six'>6</button>
  //     {/* <OperationButton id='add'>+</OperationButton> */}
  //     <button id='seven'>7</button>
  //     <button id='eight'>8</button>
  //     <button id='nine'>9</button>
  //     {/* <OperationButton id='subtract'>-</OperationButton> */}
  //     <button id='decimal'>.</button>
  //     <button id='zero'>0</button>
  //     <button className='span-two' id='equals'>
  //       =
  //     </button>
  //   </div>
  // );
}

export default App;
