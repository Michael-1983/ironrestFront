import React, { useState, useEffect } from "react";
import api from "../apis/api";


function CharacterEdit(props) {
  const [post, setPost] = useState({ nicName: "", 
  idade: "", estado: "", cidade: "", descricao: "" });
  const { id } = props.match.params;

  // Esse useEffect é praticamente igual o do CharacterDetail, pois estamos fazendo a mesma coisa
  useEffect(() => {
    async function editPost() {
      try {
        const response = await api.get("/lista-post"
          /`${id}`)
        

        post({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    editPost();
  }, []);

  function handleChange(event) {
    setPost({
      ...post,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    // Disparar a requisição com os dados para a API
    event.preventDefault();

   const response = await api.patch("/atualizarPost", { ...post });

    console.log(response);

    // O history é injetado automaticamente pelo component Route
    props.history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Character</h1>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="newCharacterName">NIckMame</label>
        <input
          name="nickName"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={post.nickName}
        />
      </div>

      {/* Occupation */}
      <div className="form-group">
        <label htmlFor="newCharacterOccupation">Idade</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterOccupation"
          name="idade"
          onChange={handleChange}
          value={post.idade}
        />
      </div>

      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Estado</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="estado"
          onChange={handleChange}
          value={post.estado}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Cidade</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="cidade"
          onChange={handleChange}
          value={post.cidade}
        />
      </div>

      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Descricao</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="descricao"
          onChange={handleChange}
          value={post.descricao}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CharacterEdit;
