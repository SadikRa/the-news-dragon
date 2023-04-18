import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with google</Button>
      <Button variant="outline-secondary"><FaGithub /> Login with github</Button>
      <div>
        <h2>Fine us One</h2>
        <ListGroup>
      <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
      
    </ListGroup>
      </div>
      <QZone></QZone>
      <div className='text-center rounded'>
        <img src={bg} alt="" srcset="" />
      </div>
        </div>
    );
};

export default RightNav;