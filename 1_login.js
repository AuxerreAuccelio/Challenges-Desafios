// --- Sistema de login ---
// Objetivo deste código é simular um processo de login, onde o usuário tenta acessar o sistema usando um nome de usuário e senha pré-cadastrados. Identifique se há erros na lógica de execução do código e corrija-os, se necessário.

// Os valores de usuário e senha cadastrados não devem ser alterados.
const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

let tentativaUsuario = "admin";
let tentativaSenha = "12347";

//console.log(`here ${usuarioCadastrado}`);
//console.log(`here ${senhaCadastrada}`);
//console.log(`here ${tentativaUsuario}`);
//console.log(`here ${tentativaSenha}`);

// Para solucionar o problema foi colocado os parentêses para cada condição lógica, foi acrescentado o operador lógico de igualdade/comparação e o último console.log de senha incorreta foi incorporado ao bloco de cima
if (
  tentativaUsuario == usuarioCadastrado &&
  tentativaSenha == senhaCadastrada
) {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou Senha incorreta!");
  console.log("Tente novamente mais tarde.");
}

