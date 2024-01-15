import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1>value = {counterValue}</h1>
      <Button onClick={increment}> + </Button>
      <Button onClick={decrement}> - </Button>
    </div>
  );
};
