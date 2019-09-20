class Dessin extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div id="dessin">
                    <img className="planete-g planete" src="/static/samvrombinator/img/Blue_Marble_rotating.gif" />
                    <img id="fusee-b" className="fusee" src="/static/samvrombinator/img/rocket-space-blue.png" />
                    <img id="fusee-r" className="fusee" src="/static/samvrombinator/img/rocket-space-red.png" />
                    <img className="planete-d planete" src="/static/samvrombinator/img/mars_r.gif" />
                </div>)
    }
}
export {Dessin};
