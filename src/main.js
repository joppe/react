import React from 'react';

import {Clock as ClockModel} from 'Clock/model'
import {Clock as DigitalClock} from 'Clock/digital';
import {Clock as AnalogClock} from 'Clock/analog';

let c = new ClockModel();

React.render(
    <div>
        <input type="button" onClick={() => c.run()} value="start" />
        <input type="button" onClick={() => c.stop()} value="stop" />

        <DigitalClock clock={c} />
        <AnalogClock r={100} clock={c} />
    </div>,
    document.body
);

c.run();