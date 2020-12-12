import BodyStyles from '../Styles/body.css'
// import BG from '../Styles/backgroundImage.jpg'
import Resume from '../Resources/SauravRaj_Resume.pdf'
import BG from '../Resources/image.png'
function Body() {
    return (<div className="BodyStyles" >
                <div className="fRight">
                    <h1 className="NameStyle">SAURAV RAJ</h1>
                    <h3 className="NameStyle">Solving business problems for <a target="_blank" className="linkUnderLine" href="https://tekion.com/"><i>Tekion Corp, Bangalore</i></a></h3>
                    <h4 className="h4Color">I build quality applications and like to solve problems.</h4>
                    <br /><br />
                    <h3 className="NameStyle">A quick look at my interests:</h3>
                    <h4 className="h4Color">FullStack Web Development, Solving algorithmic problems</h4>
                    <h2 className="NameStyle"><i className="fa fa-file-pdf-o">&nbsp;&nbsp;&nbsp;</i><a className="linkUnderLine" target="_blank" href={Resume}>Resume</a></h2>
                    <h2 className="NameStyle"><i className="fa fa-envelope-o">&nbsp;&nbsp;&nbsp;</i><a className="linkUnderLine" href="mailto:sauravraj62@gmail.com">sauravraj62@gmail.com</a></h2>
                    <br />
                    <div>
                        <a href="https://www.linkedin.com/in/sauravraj62/" target="_blank"><i className="iconSize NameStyle fa fa-linkedin-square" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i></a>
                        <a href="https://www.instagram.com/iamsraz/" target="_blank"><i className="iconSize NameStyle fa fa-instagram" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i></a>
                        <a href="https://www.facebook.com/iamsraj62/" target="_blank"><i className="iconSize NameStyle fa fa-facebook-square" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i></a>
                        <a href="https://twitter.com/iamsraz/" target="_blank"><i class="iconSize NameStyle fa fa-twitter-square" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i></a>
                    </div>
                </div>
                
                <img className="imageSize" src={BG}></img>

                
            </div>);
}

export default Body;


// style ={ { backgroundImage: `url(${BG})` , backgroundAttachment: "fixed" } }