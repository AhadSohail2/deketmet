import { useEffect } from 'react';
import { initGA, logPageView } from './ga'


function Google() {
    useEffect(() => {
        initGA();
        logPageView();
    }, []);

    return null
}

export default Google