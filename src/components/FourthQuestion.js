import React from 'react';
import { useState } from 'react';

function FourthQuestion (props) {
    const [answer, setAnswer] = useState('');
	
return (<>
		<label><b>{props.question}</b></label>
		<select value={answer} onChange={(event) => {
		  setAnswer(event.target.value);
		  props.onChange(event.target.value);
		}}>
			<option>Čeká mě 30 min aktivity</option>
			<option>Čeká mě 90 min aktivity</option>
			<option>Čeká mě 120 min aktivity</option>
			<option>Čeká mě 150 min aktivity</option>
      		<option>Čeká mě 180 min aktivity</option>
		</select>
		<p>
			<b>Zvolili jste:</b> {answer}
		</p>
		<hr/>
</>);
}

export default FourthQuestion;

