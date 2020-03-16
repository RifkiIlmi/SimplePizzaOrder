import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Badge } from 'react-bootstrap';

export function PizzaCard({data, setOrdered}) {
    return(
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={data.gambar} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.nama}</Card.Title>
                </div>
                <Card.Text className="text-secondary">{data.deskripsi}</Card.Text>
                <Badge pill className="mb-1" variant="warning">
                        Rp.{data.harga}
                    </Badge>
                <Button
                    onClick={()=>setOrdered()}
                    className="mt-auto font-weigth-bold"
                    variant="success"
                    block
                >
                    Order Pizza 
                </Button>
            </Card.Body>
        </Card>
    )
}