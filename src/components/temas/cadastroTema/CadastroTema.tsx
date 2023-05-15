import { Button, Container, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema'
import { buscaId, post, put } from '../../../services/Service'
import './CadastroTema.css'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'

function CadastroTema() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  )
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined
      })
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token
      }
    })
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (id !== undefined) {
      try {
        await put(`/temas`, tema, setTema, {
          headers: {
            Authorization: token
          }
        })
        toast.success('Tema atualizado com sucesso', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined
        })
      } catch (error) {
        console.log(`Error: ${error}`)
        alert('Erro, por favor verifique a quantidade mímima de caracteres!')
      }
    } else {
      try {
        await post(`/temas`, tema, setTema, {
          headers: {
            Authorization: token
          }
        })
        toast.success('Tema cadastrado com sucesso', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined
        })
      } catch (error) {
        console.log(`Error: $(error)`)
        alert('Erro, por vafor verifique a quantidade mímima de caracteres!')
      }
    }
    back()
  }

  function back() {
    navigate('/tema')
  }
  return (
    <Container maxWidth="sm" className="container-cadastro">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro tema
        </Typography>
        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastroTema
