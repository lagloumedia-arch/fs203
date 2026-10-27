function Lstnt(props){

    
    return (<div>
    <ul>
        { props.notes.map((nt)=><li style={{color : nt<props.moyad?
            "red" : "black"}}>{nt}{nt=>props.moyad? "admis" : "na"}</li>) }
    </ul>

    <ul>
        { props.notes.map((nt)=><li>{nt} { <span style={{color : nt<props.moyad?
        "red" : "black"}} >
        {nt=>props.moyad? "admis" : "na"}</span>}</li>) }
    </ul>

    <ul>
        { props.notes.filter((nt)=>nt>props.min).map( (nt)=><li>(nt)</li>)}
    </ul>

    </div>)

} export default Lstnt;
function Tabnt(props){

    return(<div>
        <table>
            {props.notes.map((nt,i)=>
            <
        </table>
    </div>)
}