export default function Log({turnss}){
    console.log(turnss);
return <ol id="log">
    {turnss.map(turn=>
        <li key={`${turn.square.row}${turn.square.col}`}>{turn.Player} Selected {turn.square.row}, {turn.square.col}</li>   
    )}
</ol>
}