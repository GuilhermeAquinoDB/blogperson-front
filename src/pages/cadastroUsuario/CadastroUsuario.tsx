import React from 'react'
import './CadastroUsuario.css'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function CadastroUsuario() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <img
          src="https://media.istockphoto.com/id/1415194604/pt/foto/cad-electronics-engineer-a.jpg?s=2048x2048&w=is&k=20&c=e2l5G9KomdUueKgBiH5ItQi6G4AP9vt0P3SCKxtOM4c="
          className="img2"
        />
      </Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>
            <TextField
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
              type="password"
            />
            <TextField
              id="ConfirmarSenha"
              label="confirmarSenha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              fullWidth
              type="password"
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CadastroUsuario
