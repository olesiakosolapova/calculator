import React from 'react';
import { useState } from 'react';

function ThirdQuestion (props) {
	const [answer, setAnswer] = useState('');
	
return (<>
		<label><b>{props.question}</b></label>
		<select value={answer} onChange={(event) => {
		  setAnswer(event.target.value);
		  props.onChange(event.target.value);
		}}>
			<option>Mám vcelku optimální váhu</option>
			<option>Mám do 10 kg nadváhy</option>
			<option>Mám do 20 kg nadváhy</option>
			<option>Mám do 30 kg nadváhy</option>
      		<option>Mám do 40 kg nadváhy</option>
      		<option>Mám do 50 kg nadváhy</option>
		</select>
		<p>
			<b>Zvolili jste:</b> {answer}
		</p>
		<hr/>
</>);
}

export default ThirdQuestion;
