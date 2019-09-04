class App extends React.Component {
    render() {
        var val  = ["x", "y", "z"];
        return(
            <div>
                <Machine  
                    s1={val[Math.floor(Math.random() * 3)]}
                    s2={val[Math.floor(Math.random() * 3)]}
                    s3={val[Math.floor(Math.random() * 3)]}
                />
                <Machine 
                    s1={val[Math.floor(Math.random() * 3)]}
                    s2={val[Math.floor(Math.random() * 3)]}
                    s3={val[Math.floor(Math.random() * 3)]}
                />
                <Machine 
                    s1={val[Math.floor(Math.random() * 3)]}
                    s2={val[Math.floor(Math.random() * 3)]}
                    s3={val[Math.floor(Math.random() * 3)]}
                />
            </div>

        );

    }
    
}

ReactDOM.render(<App/> , document.getElementById('root'));