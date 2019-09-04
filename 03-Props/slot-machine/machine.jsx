class Machine extends React.Component {
    render() {
        var s1 = this.props.s1, 
            s2 = this.props.s2,
            s3 = this.props.s3;

        return(
            <div>
            <p>{s1} {s2} {s3}</p>
            { (s1 == s2 && s2 == s3) ? "You Won" : "You Lost" }
            </div>

        );
    }

}