import React, { FC } from 'react';
import ReactDOM from 'react-dom';

interface propApp {
    today: string;
}

const App: FC<propApp> = ({ today }) => <h1>My React and TypeScript App!!{today}</h1>;

ReactDOM.render(
    <React.StrictMode>
        <App today={"121"} />
    </React.StrictMode>,
    document.querySelector('#root')
);