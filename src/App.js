import { useState } from 'react';
import './styles.css';

function App() {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
  };

  const calculate = () => {
    setAnswer(eval(expression));
  };

  const allClear = () => {};

  return (
    <div className='calculator-grid'>
      <div className='output' id='display'>
        <input
          type='text'
          value={expression}
          placeholder='0'
          className='previous-operand'
          disabled
        />
        <div className='total'>{answer}</div>
      </div>
      <button onClick={allClear} className='span-two' id='clear'>
        AC
      </button>
      <button>DEL</button>
      <button onClick={() => display('/')} id='divide'>
        /
      </button>
      <button onClick={() => display('/')} id='one'>
        1
      </button>
      <button onClick={() => display('/')} id='two'>
        2
      </button>
      <button onClick={() => display('/')} id='three'>
        3
      </button>
      <button onClick={() => display('/')} id='multiply'>
        *
      </button>
      <button onClick={() => display('/')} id='four'>
        4
      </button>
      <button onClick={() => display('/')} id='five'>
        5
      </button>
      <button onClick={() => display('/')} id='six'>
        6
      </button>
      <button onClick={() => display('/')} id='add'>
        +
      </button>
      <button onClick={() => display('/')} id='seven'>
        7
      </button>
      <button onClick={() => display('/')} id='eight'>
        8
      </button>
      <button onClick={() => display('/')} id='nine'>
        9
      </button>
      <button onClick={() => display('/')} id='subtract'>
        -
      </button>
      <button onClick={() => display('/')} id='decimal'>
        .
      </button>
      <button onClick={() => display('/')} id='zero'>
        0
      </button>
      <button onClick={() => display('/')} className='span-two' id='equals'>
        =
      </button>
    </div>
  );
}

export default App;
