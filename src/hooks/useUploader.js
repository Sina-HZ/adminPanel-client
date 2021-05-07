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
            // if (file.type === 'application/x-zip-compressed' || file.type === 'application/zip') {
            //     setFileSrc('/assets/icons/attachFile.svg');
            // } else {
            // }
            const imageSrc = URL.createObjectURL(file);
            setFileSrc(imageSrc);
            formData.append('file', file);
            // formData.append('fileId', v4())
            setStatus('uploading');
            // const resultFile = await fileApi.sendFile(formData, (e) => {
            //     setProgress(Math.round((100 * e.loaded) / e.total))
            // });
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
        console.log('file: ',file)
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
