import { Modal } from "react-bootstrap"
import styles from "./Alerts.module.css"
import { useEffect, useState } from "react";

export default function  Alerts(props){
   

    let [show,setShow]=useState(true);
    let [modalStyle,setModalstyle]=useState();

    useEffect(()=>{
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 1200);

      setModalstyle({
        backgroundColor:props.popUpObj.bgColor,
      })
        
    },[props])
   



    return (
      <>
        {modalStyle && (
          <Modal show={show} className={styles.modal}>
            <Modal.Body className={styles.modalBody} style={modalStyle}>
              <p>
                <i className={props.popUpObj.icon}></i> {" "}
                {props.popUpObj.message}
              </p>
            </Modal.Body>
          </Modal>
        )}
      </>
    );

}