function protegerRota(request, response, next) {

  console.log('Usuário autenticado com sucesso!', request.session.usuario);
  if(request.session.usuario) {
    next();
  } else {
    response.redirect("/");
  }
}

module.exports = {
  protegerRota,
}