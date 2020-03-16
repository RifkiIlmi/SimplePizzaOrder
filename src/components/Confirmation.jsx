import React from 'react';
import {Toast} from 'react-bootstrap';


export function Confirmation({  toggle }) {
    return(
        <Toast onClose={()=> toggle(false)} >
            <Toast.Header>
                <strong className="mr-auto">Pesanan kamu sedang di Oven</strong>
                <small>Baru saja</small>
            </Toast.Header>
            <Toast.Body>
                Pesanan kamu akan datang 30  menit lagi!
            </Toast.Body>
        </Toast>
    );
}