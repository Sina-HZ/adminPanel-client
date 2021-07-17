import React, { useEffect, useState } from 'react';
import { fileApi } from '../services/api';

const useUploader = () => {
    const [file, setFile] = useState();
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState()
    const [fileId, setFileId] = useState('');
    const [fileSrc, setFileSrc] = useState('');

    let fileHandler = async (file) => {
        try {
            const formData = new FormData();
            const imageSrc = URL.createObjectURL(file);
            setFileSrc(imageSrc);
            formData.append('file', file);
            setStatus('uploading');
            const resultFile = await fileApi.sendFile(formData, (e) => {
                setProgress(Math.round((100 * e.loaded) / e.total))
            });
            setFileId('545454sdsdsw84d');
            setStatus('success');
        } catch (error) {
            setStatus('error');
        }
    }

    useEffect(() => {
        if (file) {
            fileHandler(file)
        } else {
            setStatus(undefined);
            setFileSrc('');
        }
    }, [file])


    return ({
        file,
        setFile,
        options: {
            progress,
            status,
            fileId,
            fileSrc,
        }
    })
}

export default useUploader
