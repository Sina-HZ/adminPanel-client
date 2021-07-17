import React from 'react'
import { useSnackbar} from 'notistack';
import { TransitionRight } from '../components/SnackBarTransitions';

const useSnack = () => {
    const { enqueueSnackbar } = useSnackbar();
    const defaultSnack = (message, variant) => {
        return enqueueSnackbar(
            message,
            {
                variant,
                anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                TransitionComponent: TransitionRight
            }
        );
    }

    return ({
        enqueueSnackbar,
        defaultSnack
    })
}

export default useSnack;