import { useState } from 'react';

function useAlert() {
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false);
    const [alertFail, setAlertFail] = useState<boolean>(false);

    function showAlertSuccess (){
        setAlertSuccess(true);
        setTimeout(() => {
            setAlertSuccess(false);
        }, 5000);
    }

    const showAlertFail = () => {
        setAlertFail(true);
        setTimeout(() => {
            setAlertFail(false);
        }, 5000); 
    };

    const AlertComponent = () => {
        return (
            <>
                {alertSuccess && (
                    <div role="alert" className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Post Successful</span>
                    </div>
                )}
                {alertFail && (
                    <div role="alert" className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Post Fail</span>
                    </div>
                )}
            </>
        );
    };

    return { showAlertSuccess, showAlertFail, AlertComponent };
}

export default useAlert;