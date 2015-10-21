import React from 'react';

import {Clock as ClockModel} from 'Clock/model'
import {Clock as ClockView} from 'Clock/view';

let c = new ClockModel();

React.render(
    <div>
        <input type="button" onClick={() => c.run()} value="start" />
        <input type="button" onClick={() => c.stop()} value="stop" />

        <ClockView clock={c} />
    </div>,
    document.body
);

c.run();