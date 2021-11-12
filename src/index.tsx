import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import './test.scss'
interface propApp {
    today: string;
}

const App: FC<propApp> = ({ today }) => <h1 className="text">My React and TypeScript App!!{today}</h1>;

ReactDOM.render(
    <React.StrictMode>
        <App today={"121"} />
    </React.StrictMode>,
    document.querySelector('#root')
);