import React from 'react';
import { useState } from 'react';

function SixQuestion (props) {
    const [answer, setAnswer] = useState('');
	
return (<>
		<label><b>{props.question}</b></label>
		<select value={answer} onChange={(event) => {
		  setAnswer(event.target.value);
		  props.onChange(event.target.value);
		}}>
			<option>Dnes je venku horké počasí</option>
			<option>Není horko</option>
		</select>
		<p>
			<b>Zvolili jste:</b> {answer}
		</p>
		<hr/>
</>);
}

export default SixQuestion;