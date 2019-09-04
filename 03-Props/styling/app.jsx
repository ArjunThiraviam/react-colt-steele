class App extends React.Component {
    render() {
        return(
            <div>
                <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Slot Machine</h1>
                <Machine s1="X" s2="Y" s3="Z" />
                <Machine s1="X" s2="X" s3="X" />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));