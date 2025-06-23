
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';

import { FaRegArrowAltCircleRight } from "react-icons/fa";

import HttpClient from '../../api/default';

const API_URL = import.meta.env.VITE_API_URL



const Prompt = () => {

  const [text, setText] = useState('');
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPrompt = (question : string) => {
    setIsLoading(true);
    HttpClient.get(`${API_URL}/prompt/`, {prompt: question})
    .then(api_data => {
      setText(text + `you: ${api_data.prompt}\nassistant: ${api_data.answer}\n`);
    }).finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <Container style={{marginTop: '20px'}}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control value={text} as="textarea" rows={3} disabled style={{minHeight : '300px'}}/>
          </Form.Group>
          <InputGroup style={{marginTop: '10px'}}>
            <Form.Control onChange={(e) => { setQuestion(e.target.value) }} value={question} placeholder="Write a question about name or planet..." />
            <InputGroup.Text onClick={() => { getPrompt(question) }} style={{cursor: 'pointer'}}>
              <FaRegArrowAltCircleRight />
            </InputGroup.Text>
          </InputGroup>
          <Form.Label style={{width : '100%', textAlign : 'left', marginTop : '5px'}}>
            <b>TIP:</b> Use "planet" or "name" in your sentence
          </Form.Label>
        </Col>
      </Row>
    </Container>
  );
};

export default Prompt;