import { useSelector } from "react-redux";

function Counter () {
    const count = useSelector(state => state.counterSlice.num);
    console.log(count);
    return (
        <>
            <div className="row">
                <div className="col-lg-6 me-auto ms-auto text-center">
                    {count}
                </div>
            </div>
        </>
    );
}

export default Counter;