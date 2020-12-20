import NavigationStyle from '../Styles/navigation.css'
function NavigationBar() {
    return (
        <div className="blackBackground">
            <ul>
                <a href="/"><li><i className="fa fa-fw fa-home" />  <span>Home</span></li></a>
                <a href="/tour"><li><i className="fa fa-location-arrow" /> <span>Tour</span></li></a>
                <a href="https://github.com/sauravraj62" target="_blank" className="floatRight"><li><i className="fa fa-github" /> <span>GitHub</span></li></a>
            </ul>
            
        </div>
    );
}

export default NavigationBar;