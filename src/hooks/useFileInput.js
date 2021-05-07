import { useState } from "react"


const useFileInput = () => {

    const [fileInputError, setFileInputError] = useState({
        type: {
            hasError: false,
            text: 'فایل باید از نوع ( png, jpeg, jpg ) باشد.'
        },
        size: {
            hasError: false,
            text: 'فایل نباید از ۲ مگابایت بیشتر شود'
        }
    })

    return [fileInputError, setFileInputError]
}

export default useFileInput;