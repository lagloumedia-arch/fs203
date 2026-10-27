function Compnpm({ nom, age, sexe, message, couleur, retour1 }) {
    return (
        <div>
            <h3 style={{ color: couleur }}>
                {message ? message : "Bienvenue"}{" "}
                {sexe === "F" ? "Mme " : "Mr "}
                {nom}
            </h3>

            {retour1 && <br />}

            <h3>Votre age : {age}</h3>
        </div>
    );
}
function Compnpm1(props) {
    return (<div>
        <h3>bienvenue {props.nom}</h3>
        <h3>votre age:{props.age}</h3>
    </div>);

}
export { Compnpm, Compnpm1 };