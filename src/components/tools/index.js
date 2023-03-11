import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tools () {
        return(
            <div className='tools-box' style={{dipslay: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px 20px'}}>
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-react" />
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-square-js" />
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-css3-alt" />
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-html5" />
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-node" />
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-git-alt" />
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-npm" />
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-figma" />
                <FontAwesomeIcon style={{width: 60, height: 60}} icon="fa-brands fa-bootstrap" />
            </div>
        )
}

export default Tools;