import FormField from "./FormField"

function FormPost(props){


    return (
      <div>
        <FormField
          label="Nickname"
          id="exampleInputPassword1"
          type="text"
          name={props.nickName}
          onChange={props.handleChange}
          value={props.nickName}
        />
        <FormField
          label="Idade"
          id={props.id}
          type="text"
          name={props.idade}
          onChange={props.handleChange}
          value={props.idade}
        />
        <FormField
          label="Estado"
          id={props.id}
          type="text"
          name={props.estado}
          onChange={props.handleChange}
          value={props.estado}
        />

        <FormField
          label="Cidade"
          id={props.id}
          type="text"
          name={props.cidade}
          onChange={props.handleChange}
          value={props.cidade}
        />
        <FormField
          label="Descrição"
          id={props.id}
          type="text"
          name={props.descricao}
          onChange={props.handleChange}
          value={props.descricao}
        />
      </div>
    );
}
export default FormPost