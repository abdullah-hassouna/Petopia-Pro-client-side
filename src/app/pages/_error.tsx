import ErrorPrinter from '@/ErrorText/ErrorPrinter';
import React from 'react';



interface ErrorPageProps {
    statusCode?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }) => {
    return (
        <div>
            <h1>{statusCode}</h1>
            <p>
                {ErrorPrinter(statusCode)}
            </p>
        </div>
    );
};


export default ErrorPage;