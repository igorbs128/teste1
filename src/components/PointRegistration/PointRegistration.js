import React from "react";
import {
    Form,
    Card,
    Input,
    Dropdown,
    Button,
    Item,
    PlaceholderParagraph
} from "semantic-ui-react";
import { DateInput, TimeInput } from "semantic-ui-calendar-react";
import { useSelector, useDispatch } from "react-redux";

export default function PointRegistration() {
    const stateData = useSelector(state => state.user);
    const dispatch = useDispatch();

    const namedrop = stateData.user.map(item => {
        return { key: item.id, value: item.name, text: item.name };
    });

    const option = [
        { key: 0, value: "enter", text: "Entrada" },
        { key: 1, value: "enter_lunch", text: "Inicio do Almoço" },
        { key: 2, value: "exit_lunch", text: "Fim do Almoço" },
        { key: 3, value: "exit", text: "Saída" }
    ];

    const handlechange = (e, { value, placeholder }) => {
        console.log(namedrop);

        switch (placeholder) {
            case "Nome":
                return dispatch({
                    type: "ADD_TEMP_DATE",
                    name: value
                });
            case "Selecionar":
                return dispatch({
                    type: "ADD_TEMP_DATE",
                    register: value
                });
            case "Selecionar Dia":
                return dispatch({
                    type: "ADD_TEMP_DATE",
                    date: value
                });
            case "Selecionar Hora":
                return dispatch({
                    type: "ADD_TEMP_DATE",
                    hour: value
                });
        }
    };
    const reg = () => {
        if (stateData.registreDate.registre === 'enter') {
            dispatch({
                type: 'ADD_TO_DATE',
                registreData: '',
                name: stateData.registreDate.name,
                date: stateData.registreDate.date,
                enter: stateData.registreDate.hour
            })
        }
        if (stateData.registreDate.registre === 'enterlunch') {
            dispatch({
                type: 'ADD_TO_DATE',
                registroDate: '',
                name: stateData.registreDate.name,
                date: stateData.registreDate.date,
                enterlunch: stateData.registreDate.hour
            })
        }
        if (stateData.registreDate.registre === 'exitlunch') {
            dispatch({
                type: 'ADD_TO_DATE',
                registroDate: '',
                name: stateData.registreDate.name,
                date: stateData.registreDate.date,
                exitlunch: stateData.registreDate.hour
            })
        }
        if (stateData.registreDate.registre === 'exit') {
            dispatch({
                type: 'ADD_TO_DATE',
                registroDate: '',
                name: stateData.registreDate.name,
                date: stateData.registreDate.date,
                exit: stateData.registreDate.hour,

            })
        }

    };

    return (
        <Card centered>
            <Card.Content>
                <Card.Header>Registro do Ponto</Card.Header>
                <Card.Description>
                    <Form>
                        <Form.Field>
                            <label>Nome</label>
                            <Dropdown
                                fluid
                                placeholder="Nome"
                                onChange={handlechange}
                                options={namedrop}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                                onChange={handlechange}
                                fluid
                                placeholder="Selecionar"
                                options={option}
                            />
                        </Form.Field>
                        <Form.Field>
                            <DateInput
                                placeholder="Selecionar Dia"
                                onChange={handlechange}
                            ></DateInput>
                        </Form.Field>
                        <Form.Field>
                            <TimeInput
                                placeholder="Selecionar Hora"
                                onChange={handlechange}
                            ></TimeInput>
                        </Form.Field>
                        <Form.Field>
                            <Button fluid onClick={reg}>
                                Registrar
              </Button>
                        </Form.Field>
                    </Form>
                </Card.Description>
            </Card.Content>
        </Card>
    );
}