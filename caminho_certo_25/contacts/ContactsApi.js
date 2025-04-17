export async function findAll(){
  const URL = 'https://api-contato-dot-api-samples-423102.uc.r.appspot.com/api/contatos'
  const requestInit = {
    method: 'GET',
    header: {
      Authorization: 'Bearer 12113194'
    }
  }
  const httpResponse = await fetch(URl, requestInit) 

  if(httpResponse.ok){
    console.log('Sucesso ao consultar aos contatos')
    return await httpResponse.json()
  }
  else {
    const error = await httpResponse.text()
    console.log('Falha ao consultar os contatos:', httpResponse.status, error)

    throw new Error('SE FUDEU! b(^-^)b')
  }
}