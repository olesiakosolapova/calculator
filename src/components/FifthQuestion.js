import React from 'react';
import { useState } from 'react';

function FifthQuestion (props) {
    const [answer, setAnswer] = useState('');
	
return (<>
		<label><b>{props.question}</b></label>
		<select value={answer} onChange={(event) => {
		  setAnswer(event.target.value);
		  props.onChange(event.target.value);
		}}>
			<option>Denně piju 1 kávu</option>
			<option>Denně piju 2 kávy</option>
			<option>Denně piju 3 kávy</option>
			<option>Denně piju 4 kávy</option>
		</select>
		<p>
			<b>Zvolili jste:</b> {answer}
		</p>
		<hr/>
</>);
}

export default FifthQuestion;
