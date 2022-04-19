import { useReducer } from 'react';
import './styles.css';

function reducer(state, action) {}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className='calculator-grid'>
      <div className='output' id='display'>
        <div className='previous-operand'>{previousOperand}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two' id='clear'>
        AC
      </button>
      <button>DEL</button>
      <OperationButton id='divide'>÷</OperationButton>
      <button id='one'>1</button>
      <button id='two'>2</button>
      <button id='three'>3</button>
      <OperationButton id='multiply'>*</OperationButton>
      <button id='four'>4</button>
      <button id='five'>5</button>
      <button id='six'>6</button>
      <OperationButton id='add'>+</OperationButton>
      <button id='seven'>7</button>
      <button id='eight'>8</button>
      <button id='nine'>9</button>
      <OperationButton id='subtract'>-</OperationButton>
      <button id='decimal'>.</button>
      <button id='zero'>0</button>
      <button className='span-two' id='equals'>
        =
      </button>
    </div>
  );
}

export default App;
