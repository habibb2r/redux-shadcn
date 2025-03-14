import { decrement, increment } from "@/redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";


const Counter = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state=>state.counter)

    console.log(count)
    const handleIncrement = (amount: number)=>{
        dispatch(increment(amount))
    }
    const handleDecrement = ()=>{
        dispatch(decrement())
    }
    return (
        <div className="pt-10 text-center">
            <Button onClick={()=>handleIncrement(5)}>Increment 5</Button>
            <Button onClick={()=>handleIncrement(1)}>Increment 1</Button>
            <h1>{count}</h1>
            <Button onClick={handleDecrement}>Decrement</Button>
        </div>
    );
};

export default Counter;