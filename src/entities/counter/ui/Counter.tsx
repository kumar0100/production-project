import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/button/Button"
import { counterActions } from "../model/slice/counterSlice";
import { StateSchema } from "app/providers/store-provider/config/StateSchema";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter)

    const increment = () => {
        dispatch(counterActions.increment());
        console.log(counterActions.increment)
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    console.log(counterValue)
    return (
        <div>
            <h1 data-testid='text'>Value = {counterValue.value}</h1>

            <Button data-testid='btnincr' onClick={increment}>
                increment
            </Button>
            <Button data-testid='btndecr' onClick={decrement}>
                decrement
            </Button>
        </div>
    )
}