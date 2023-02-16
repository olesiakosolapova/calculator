import React from 'react';
import { useState } from 'react';

function SecondQuestion (props) {

const [answer, setAnswer] = useState('');
	
return (
<>
	<label><b>{props.question}</b></label>
	<select value={answer} onChange={(event) => {
		setAnswer(event.target.value);
		props.onChange(event.target.value);
	}}>
		<option>Kojenec</option>
		<option>Dítě 1-3 roky</option>
		<option>Dítě 4-6 let</option>
		<option>Dítě 7-9 let</option>
		<option>Dítě od 10 let</option>
		<option>Dospělý</option>
	</select>
	<p>
		<b>Zvolili jste:</b> {answer}
	</p>
	<hr/>
</>
);
}

export default SecondQuestion;

