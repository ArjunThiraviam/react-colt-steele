class App extends React.Component {
    render() {
        return(
            <div>
                <Hello 
                to="Aravind" 
                from="Arjun"
                bangs={4}
                img="https://phase1design.com/wp-content/uploads/2019/03/Hello-300x300.jpg"
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));