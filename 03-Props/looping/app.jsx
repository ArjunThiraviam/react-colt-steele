class App extends React.Component {
    render() {
        return (
            <div>
                <Brothers
                    name="Aravind"
                    hobbies={['Reading', 'Exercising', 'Dancing']} 
                />
                <Brothers
                    name="Vicky"
                    hobbies={['Reading', 'Cooking']} 
                />
                <Brothers
                    name="Suriya"
                    hobbies={['Cooking', 'Reading']} 
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));