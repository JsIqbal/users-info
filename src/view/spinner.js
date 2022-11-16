import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

function Spin() {
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            setLoading(false);
        }, 3000)
    }, []);

    return (
        <div>
            {
                loading ? 
                    <div className="col-lg-6 text-center ms-auto me-auto bar-loader">
                        <BarLoader color="red" loading={loading} size={150} /> 
                    </div> 
                : 
                <>
                    <h1>Hello Wolrd!</h1>
                </>
            }
        </div>
    );
}

export default Spin;