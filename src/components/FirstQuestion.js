import React from 'react';
import { useState } from 'react';

function FirstQuestion (props) {
    const [answer, setAnswer] = useState('');
	
	return (<>
		<label><b>{props.question}</b></label>
		<input type="text" value={answer} onChange={(event) => {
		  setAnswer(event.target.value);
		  props.onChange(event.target.value);
		}} />
		<br/>
		<p>
			<b>Zvolili jste:</b> {answer}
		</p>
		<hr/>
	</>);
}

export default FirstQuestion;

