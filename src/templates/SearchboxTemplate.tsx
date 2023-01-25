import { useState } from "preact/hooks";
import "./SearchboxTemplate.css";
import { dataTypes } from "../@types/types";

import { Button, TextField } from "@mui/material/";
import GoogleIcon from "@mui/icons-material/Google";
import { useFetch } from "../hooks/useFetch";

export default function SearchboxTemplate () {
  const [ cep, setCep ]=useState<string>( "" );
  const { data, isFetch }=useFetch<dataTypes>( cep );

  const handleSubmit=( env: any ) => {
    setCep( env.currentTarget.value );
  };

  return (
    <>
      <div class="searchbox--container">
        <TextField
          id="outlined"
          label="Cep"
          onChange={ handleSubmit }
          size="small"
          error={ data?.erro }
          helperText={ data?.erro? "Cep inválido":null }
        />
        <div class="high--results">
          <TextField
            id="outlined-read-only-input"
            label="Logradouro"
            defaultValue={ " " }
            value={ undefined||data?.logradouro }
            size="small"
            InputProps={ {
              readOnly: true,
            } }
            sx={ { marginBottom: "25px" } }
            disabled
          />
          <TextField
            id="outlined-read-only-input"
            label="Bairro"
            defaultValue={ " " }
            value={ undefined||data?.bairro }
            size="small"
            InputProps={ {
              readOnly: true,
            } }
            sx={ { marginBottom: "25px" } }
            disabled
          />
          <TextField
            id="outlined-read-only-input"
            label="Localidade"
            defaultValue={ " " }
            value={ undefined||data?.localidade }
            size="small"
            InputProps={ {
              readOnly: true,
            } }
            sx={ { marginBottom: "25px" } }
            disabled
          />
        </div>
        <div class="small--results">
          <TextField
            id="outlined-read-only-input"
            label="UF"
            defaultValue={ " " }
            value={ undefined||data?.uf }
            size="small"
            InputProps={ {
              readOnly: true,
            } }
            sx={ { width: "30%" } }
            disabled
          />
          <TextField
            id="outlined-read-only-input"
            label="DDD"
            defaultValue={ " " }
            value={ undefined||data?.ddd }
            size="small"
            InputProps={ {
              readOnly: true,
            } }
            sx={ { width: "30%" } }
            disabled
          />
          <TextField
            id="outlined-read-only-input"
            label="Siafi"
            defaultValue={ " " }
            value={ undefined||data?.siafi }
            size="small"
            InputProps={ {
              readOnly: true,
            } }
            sx={ { width: "30%" } }
            disabled
          />
        </div>
        <div class="ui">
          { isFetch&&!data?.erro? (
            <Button
              style={ { backgroundColor: "#ff8a30" } }
              fullWidth
              variant="contained"
              href={ `https://www.google.com.br/maps/dir//${ cep }` }
              target="_blank"
              startIcon={ <GoogleIcon /> }
            >
              abrir no google maps
            </Button>
          ):null }
        </div>
      </div>
    </>
  );
}
