class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const slotColor = {backgroundColor: '#eee', fontSize:'40px'};
        return (
            <div className="machine">
                <p style={slotColor}>
                    {s1} {s2} {s3}
                </p>
                <p className={winner ? 'win' : 'lost'}>{winner ? 'You Won!' : 'You Lost'}</p>
            </div>
        )
    }
}