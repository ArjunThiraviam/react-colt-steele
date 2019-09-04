class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    from="Arjun" 
                    to="Aravind" 
                    bangs="4"
                />
                <Hello 
                    to="Hero"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));