class Lettre extends React.Component {
    constructor(props){
        super(props)
    }

  render() {
    return (

        <span>{ this.props.hide ? '_' : this.props.carac.replace(' ', '\u00A0')} </span>
    );
  }
}
export {Lettre};
