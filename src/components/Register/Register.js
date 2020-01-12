import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Form, Button, Dropdown, Input } from "semantic-ui-react";

export default function Register() {
  const stateData = useSelector(state => state.user);
  const dispatch = useDispatch();
  const cad = () => {
    
      dispatch({
        type: "ADD_TO_USER",
        cadUser: "",
        id: stateData.user.length, 
        name: stateData.cadUser,
        compay: "Inflor"
      })
      
      
  };
  const PgNome = (e, { value }) => {
    
    dispatch({
      type: 'ADD_TEMP_USER',
      cadUser: value
    })
  };
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>Cadastro Usuário </Card.Header>
        <Card.Description>
          <Form>
            <Form.Field>
              <label>Nome Funcionário</label>
              <Input placeholder="Nome Funcionário" value={stateData.cadUser} onChange={PgNome} />
            </Form.Field>
            <Button type="submit" onClick={cad}>Submit</Button>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}