class RandomNumber extends React.Component {
    render() {
        var num = Math.floor(Math.random() * 10);
        return(
            <div>
                <h1>Hello World!!!</h1>
                <p>{num}</p>
                <div>{ num >= 7 ? <p>you are lucky</p> : <p>Try again</p>}</div> 
                {
                    num >=7 ?
                    <img src="http://2.bp.blogspot.com/-919AZkQmDnM/TjA98CLzW2I/AAAAAAAADLk/uOZgtfyasIg/s1600/yes.gif" />:
                    null
                }               
            </div>

        );
    }
}

// ReactDOM.render(<RandomNumber/>, document.getElementById('root'));