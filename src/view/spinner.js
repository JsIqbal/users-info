import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

export default function Spin({ children }) {
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            setLoading(false);
        }, 3000)
    }, []);

    return (
        <>
            {
                loading ? 
                    <div className="col-lg-6 text-center ms-auto me-auto bar-loader">
                        <BarLoader color="red" loading={loading} size={150} /> 
                    </div> 
                : 
                <>
                    {children}
                </>
            }
        </>
    );
};