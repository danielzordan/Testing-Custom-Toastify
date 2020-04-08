import React from 'react';
import { toast } from 'react-toastify';
import { Container, Buttons } from './styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

function Main() {
    
    function handleDefault() {
        toast(<div style={{color: "#292929" , display: "flex", alignItems: "center" }}>
            <ModeCommentIcon style={{ marginLeft: 15 }}/>
            <span style={{ marginLeft: 30}}>Default message</span>
            </div> , 
            {className: 'toast_custom'});
    }

    function handleError() {
        toast.error(<div style={{color: "#292929" , display: "flex", alignItems: "center" }}>
            <ErrorOutlineIcon style={{ marginLeft: 15 }}/>
            <span style={{ marginLeft: 30}}>Error message</span>
            </div> , 
            {className: 'toast_custom'});
    }

    function handleSuccess() {
        toast.success(<div style={{color: "#292929" , display: "flex", alignItems: "center" }}>
            <CheckCircleOutlineIcon style={{ marginLeft: 15 }}/>
            <span style={{ marginLeft: 30}}>Success message</span>
            </div> , 
             {className: 'toast_custom'});
    }

    function handleInfo() {
        toast.info(<div style={{color: "#292929" , display: "flex", alignItems: "center" }}>
            <InfoIcon style={{ marginLeft: 15 }}/>
            <span style={{ marginLeft: 30}}>Information message</span>
            </div> , 
             {className: 'toast_custom'});
    }

    function handleWarn() {
        toast.warn(<div style={{color: "#292929" , display: "flex", alignItems: "center" }}>
            <WarningIcon style={{ marginLeft: 15 }}/>
            <span style={{ marginLeft: 30}}>Warning message</span>
            </div> , 
             {className: 'toast_custom'});
    }
    
    return (
        <Container>
            <Buttons>
                <button type="button" onClick={handleDefault}>KKKKK</button>
                <button type="button" onClick={handleError}>Error</button>
                <button type="button" onClick={handleSuccess}>Success</button>
                <button type="button" onClick={handleWarn}>Warn</button>
                <button type="button" onClick={handleInfo}>Info</button>
            </Buttons>
        </Container>    
    );
}
export default Main;
