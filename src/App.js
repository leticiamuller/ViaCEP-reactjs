import React, {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import './App.css';
import Modal from './modal';



function App() {
//define visibilidade do modal
  const  [isModalVisible, setIsModalVisible]= useState(false);
  
  function onSubmit(values) {
    console.log(values);
  }
  
 
  
  //função de evento para capturar value
  function onBlurCep(event, setFieldValue) {
    const { value } = event.target;
  
    
    
    const cep = value?.replace('-', '');
    //verificar se o cep possui o número correto de caracteres para funcionar
    if (cep?.length !== 8) {
      alert('CEP inválido');
    
    } 
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      setFieldValue('rua', data.logradouro);
      setFieldValue('bairro', data.bairro);
      setFieldValue('cidade', data.localidade);
      setFieldValue('uf', data.uf);
    })
    .then((data) => {
      var info

          })
    
    
      
      
      document.getElementById('formRua').disabled = true;
      document.getElementById('formCity').disabled = true;
      document.getElementById('formUf').disabled = true;
      document.getElementById('formBairro').disabled = true;

      

      
  }
  
  return (
    <div className="App">
      
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: '',
          rua: '',
          numero: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}
        render={({ isValid, setFieldValue }) => (
         
          <Form id='Formulario' >
            <div className="titulo1">
              <h1>ViaCEP</h1>
            </div>
            <div className="form-cep">
              <label>CEP</label>
              <Field name="cep" type="text" onBlur={(event) =>onBlurCep(event, setFieldValue)}  id='form'
/>
            </div>
            <div className="form-cep" 
>
              <label>Rua</label>
              <Field name="rua" type="text"id='formRua'
 />
            </div>
            <div className="form-cep">
              <label>Número</label>
              <Field name="numero" type="text" id='formNumero'
 />
            </div>
            
            <div className="form-cep">
              <label>Bairro</label>
              <Field name="bairro" type="text" id='formBairro'
/>
            </div>
            <div className="form-cep">
              <label>Cidade</label>
              <Field name="cidade" type="text" id='formCity'
/>
            </div>
            <div className="form-cep">
             <label>Estado</label>
            <Field component='select' name='uf' id='formUf'
>
              <option value={null}>Selecione o Estado</option>
              <option value='AC'>AC</option>
              <option value='AL'>AL</option>
              <option value='AP'>AP</option>
              <option value='AM'>AM</option>
              <option value='BA'>BA</option>
              <option value='CE'>CE</option>
              <option value='DF'>DF</option>
              <option value='ES'>ES</option>
              <option value='GO'>GO</option>
              <option value='MA'>MA</option>
              <option value='MG'>MG</option>
              <option value='MT'>MT</option>
              <option value='MS'>MS</option>
              <option value='PA'>PA</option>
              <option value='PB'>PB</option>
              <option value='PR'>PR</option>
              <option value='PE'>PE</option>
              <option value='PI'>PI</option>
              <option value='RJ'>RJ</option>
              <option value='RN'>RN</option>
              <option value='RS'>RS</option>
              <option value='RO'>RO</option>
              <option value='RR'>RR</option>
              <option value='SC'>SC</option>
              <option value='SP'>SP</option>
              <option value='SE'>SE</option>
              <option value='TO'>TO</option>
              
            </Field>
         
          </div>
          
          <button onClick={()=>setIsModalVisible(true)} type="submit" disabled={!isValid}>Enviar</button>
          {isModalVisible ?(
          <Modal onClose={()=>setIsModalVisible(false)}>
          
          <h1 className='titulo'>Endereço</h1>
          
          
        </Modal>
          ): null}
          

          </Form>
          )}
      />
    </div>
  );
}

  
  
  
  

export default App;