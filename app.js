const Header = () =>{
    return <h1>Commence Dashboard Creation!</h1>
}


//Player Component
const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div>
            <ul className = "list">
                <li><h3>Widget</h3></li>
                <br></br>
                <br></br>
                <li><h3>Reviews</h3></li>
                <br></br>
                <br></br>
                <li><h3>Customers</h3></li>
                <br></br>
                <br></br>
                <li><h3>Online Analysis</h3></li>
                <br></br>
                <br></br>
                <li><h3>Settings</h3></li>
               
            </ul>
            </div>
        </div>
    )
}

//Player Component
const Info = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h1>{props.cont}</h1>
        </div>
    )
}

const Content = () => {
    return(
        <div className="content">
            <div className="info">
                <Info name="Reviews" cont="1,281"/>
                <Info name="Average Rating" cont="4.6"/>
                <Info name="Sentiment Analysi" cont="916"/>
            </div>
            <div className="visitors">
                <h3>Website Visitors</h3>
                <h3>821</h3>
                <div></div>
            </div>
        </div>
    )
}

// App Component
class App extends React.Component {
    render() {
        return (
        
        <div className="container">
            
            <Dashboard/>
            <Content/>
           
        </div>    
        )
        
    }
}



ReactDOM.render(<App />,
    document.querySelector('main')
  );