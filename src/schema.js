import * as Yup from 'yup';

export default Yup.object().shape({
    cep: Yup.string().min(8, 'CEP inválido.').required('CEP é obrigatório.'),}
)