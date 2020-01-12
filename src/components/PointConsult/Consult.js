import React from "react";
import {
    Form,
    Card,
    Input,
    Button
} from "semantic-ui-react";

import { useSelector, useDispatch } from "react-redux";

export default function Consult(){
    const stateData = useSelector(state => state.user);
    const dispatch = useDispatch();

    /*const handleconsult = (e, { value }) => {
    dispatch({
          type: 'ADD_TEMP_USER',
          cadUser: value
        })
      };*/
    const consult = () => {
        /*if(cadUser === stateData.user.name){

        }*/

    }
    const handleconsult = (e, { value }) => {
    
        dispatch({
          type: 'ADD_TEMP_PUSER',
          pesUser: value
        })
      };
    return(
        <Card centered>
            <Card.Content>
                <Card.Header>Consulta de Saldo</Card.Header>
                <Card.Description>
                    <Form>
                        <Form.Field>
                            <label>Nome do Funcinário</label>
                            <Input placeholder="Nome Funcionário" value={stateData.pesUser} onChange={handleconsult} />
                        </Form.Field>
                        <Button type="submit" onClick={consult}>Pesquisar</Button>
                    </Form>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}