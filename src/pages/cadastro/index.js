import react, {useState} from 'react'
import Input from '../../components/input'
import Button from '../../components/button'
import { Card, Container } from './style'

const Cadastro = ({...props}) => {

  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [fone, setFone] = useState('');
  const [emailPessoal, setEmailPessoal] = useState('');
  const [emailIFSP, setEmailIFSP] = useState('')

  const [pergunta1, setPergunta1] = useState('')
  const [pergunta2, setPergunta2] = useState('')
  const [pergunta3, setPergunta3] = useState('')

  const cadastrar = async () => {
    const payload = {
      dados_pessoais: {
        cpf,
        nome,
        fone,
        emailPessoal,
        emailIFSP,
      },
      dados_seguranca: {
        pergunta1,
        pergunta2,
        pergunta3
      }
    }

    setLoading(true);
    console.log(payload)

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }

  return (
    <Container>
      <Card
        width='308px'
        margin='auto'
      >

        {step === 1 ? (
          <>
            <h1>Dados Pessoais</h1>
    
            <Input
              width='100%' 
              type='numeric'
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <Input
              width='100%' 
              type='text'
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Input
              width='100%' 
              type='text'
              placeholder="Fone"
              value={fone}
              onChange={(e) => setFone(e.target.value)}
            />
            <Input
              width='100%' 
              type='email'
              placeholder="Email pessoal"
              value={emailPessoal}
              onChange={(e) => setEmailPessoal(e.target.value)}
            />
            <Input
              width='100%' 
              type='email'
              placeholder="email IFSP"
              value={emailIFSP}
              onChange={(e) => setEmailIFSP(e.target.value)}
            />
    
            <Button 
              width='100%'
              text="Próximo"
              onClick={() => setStep(step+1)}
            />
          </>
        ) : (
          <>
            <h1>Dados de Segurança</h1>

            <Input
              width='100%' 
              type='text'
              placeholder="Qual o nome do primeiro animal de estimação?"
              value={pergunta1}
              onChange={(e) => setPergunta1(e.target.value)}
            />
            <Input
              width='100%' 
              type='text'
              placeholder="Qual o nome da sua primeira professora"
              value={pergunta2}
              onChange={(e) => setPergunta2(e.target.value)}
            />
            <Input
              width='100%' 
              type='text'
              placeholder="Em qual cidade seus pais se conheceram"
              value={pergunta3}
              onChange={(e) => setPergunta3(e.target.value)}
            />

            <Button 
              width='100%'
              text="Cadastrar"
              onClick={() => cadastrar()}
              loading={loading}
            />
          </>
        )}
      </Card>
    </Container>
  )
}

export default Cadastro