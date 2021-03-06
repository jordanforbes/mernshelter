import React from 'react';
import '../styles/keyboard.css';

const Keyboard =props=>{

    return(
        <div class="keyboardContainer keyboard animated">
				<div class="blackKeyContainer">

		{/* <!-- first octave --> */}
			
					<div class="cnote lowC abs0 leftSideBorder blackKeySpace key" id="0"><div class="noteB"></div></div>
					<div class="cnote lowC abs0 blackKeySpace key" id="0"><div class="noteB"></div></div>
					<div class="csnote blackKey abs1 lowCSharp key" id="1"><div class="noteB lowCSharpDisp displayAbs1">C&#9839 - D&#9837</div></div>
					<div class="dnote lowD abs2 blackKeySpace key" id="2"><div class="noteB"></div></div>
					<div class="dsnote blackKey abs3 lowDSharp key" id="3"><div class="noteB lowDSharpDisp displayAbs3">D&#9839 - E&#9837</div></div>
					<div class="enote lowE abs4 blackKeySpace key" id="4"><div class="noteB"></div></div>
					<div class="enote lowE abs4 rightSideBorder blackKeySpace key" id="4"><div class="noteB"></div></div>
					<div class="fnote lowF abs5 leftSideBorder blackKeySpace key" id="5"><div class="noteB"></div></div>
					<div class="fnote lowF abs5 blackKeySpace key" id="5"><div class="noteB"></div></div>
					<div class="fsnote blackKey abs6 lowFSharp key" id="6"><div class="noteB lowFSharpDisp displayAbs6">F&#9839 - G&#9837</div></div>
					<div class="gnote lowG abs7 blackKeySpace key" id="7"><div class="noteB"></div></div>
					<div class="gsnote blackKey abs8 lowGSharp key" id="8"><div class="noteB lowGSharpDisp displayAbs8">G&#9839 - A&#9837</div></div>
					<div class="anote lowA abs9 blackKeySpace key" id="9"><div class="noteB"></div></div>
					<div class="asnote blackKey abs10 lowASharp key" id="10"><div class="noteB lowASharpDisp displayAbs10">A&#9839 - B&#9837</div></div>
					<div class="bnote lowB abs11 blackKeySpace key" id="11"><div class="noteB"></div></div>
					<div class="bnote lowB rightSideBorder abs11 blackKeySpace key" id="11"><div class="noteB"></div></div>

		{/* <!-- second octave --> */}

					<div class="cnote midC leftSideBorder abs12 blackKeySpace key" id="12"><div class="noteB"></div></div>
					<div class="cnote midC abs12 blackKeySpace key" id="12"><div class="noteB"></div></div>
					<div class="csnote blackKey abs13 midCSharp key" id="13"><div class="noteB midCSharpDisp displayAbs13">C&#9839 - D&#9837</div></div>
					<div class="dnote highD abs14 blackKeySpace key" id="14"><div class="noteB"></div></div>
					<div class="dsnote blackKey abs15 highDSharp key" id="15"><div class="noteB highDSharpDisp displayAbs15">D&#9839 - E&#9837</div></div>
					<div class="enote highE abs16 blackKeySpace key" id="16"><div class="noteB"></div></div>
					<div class="enote highE rightSideBorder abs16 blackKeySpace key" id="16"><div class="noteB"></div></div>
					<div class="fnote highF leftSideBorder abs17 blackKeySpace key" id="17"><div class="noteB"></div></div>
					<div class="fnote highF abs17 blackKeySpace key" id="17"><div class="noteB"></div></div>
					<div class="fsnote blackKey abs18 highFSharp key" id="18"><div class="noteB highFSharpDisp displayAbs18">F&#9839 - G&#9837</div></div>
					<div class="gnote highG abs19 blackKeySpace key" id="19"><div class="noteB"></div></div>
					<div class="gsnote blackKey abs20 highGSharp key" id="20"><div class="noteB highGSharpDisp displayAbs20">G&#9839 - A&#9837</div></div>
					<div class="anote highA abs21 blackKeySpace key" id="21"><div class="noteB"></div></div>
					<div class="asnote blackKey abs22 highASharp key" id="22"><div class="noteB highASharpDisp displayAbs22">A&#9839 - B&#9837</div></div>
					<div class="bnote highB abs23 blackKeySpace key" id="23"><div class="noteB"></div></div>
					<div class="bnote highB rightSideBorder abs23 blackKeySpace key" id="24"><div class="noteB"></div></div>
				</div>



				
				<div class="whiteKeyContainer">
					<div class="cnote lowC abs0 whiteKey key" id="0"><div class="noteW lowCDisp displayAbs0">C</div></div>
					<div class="dnote lowD abs2 whiteKey key" id="2"><div class="noteW lowDDisp displayAbs2">D</div></div >
					<div class="enote lowE abs4 whiteKey key" id="4"><div class="noteW lowEDisp displayAbs4">E</div></div>
					<div class="fnote lowF abs5 whiteKey key" id="5"><div class="noteW lowFDisp displayAbs5">F</div></div>
					<div class="gnote lowG abs7 whiteKey key" id="7"><div class="noteW lowGDisp displayAbs7">G</div></div>
					<div class="anote lowA abs9 whiteKey key" id="9"><div class="noteW lowADisp displayAbs9">A</div></div>
					<div class="bnote lowB abs11 whiteKey key" id="11"><div class="noteW lowBDisp displayAbs11">B</div></div>
					<div class="cnote midC abs12 whiteKey key" id="12"><div class="noteW midCDisp displayAbs12">C</div></div>
					<div class="dnote highD abs14 whiteKey key" id="14"><div class="noteW highDDisp displayAbs14">D</div></div>
					<div class="enote highE abs16 whiteKey key" id="16"><div class="noteW highEDisp displayAbs16">E</div></div>
					<div class="fnote highF abs17 whiteKey key" id="17"><div class="noteW highFDisp displayAbs17">F</div></div>
					<div class="gnote highG abs19 whiteKey key" id="19"><div class="noteW highGDisp displayAbs19">G</div></div>
					<div class="anote highA abs21 whiteKey key" id="21"><div class="noteW highADisp displayAbs21">A</div></div>
					<div class="bnote highB abs23 whiteKey key" id="23"><div class="noteW highBDisp displayAbs23">B</div></div>
				</div>
			</div>
				



    )
}

export default Keyboard;