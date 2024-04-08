const TOKEN = process.env.DATO_TOKEN;

export async function cmsService({
  query
}){

  try {

    const pageContentResponse = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query
      }),
    })
    .then(async (response) => {
      const body = await response.json();
      if(!body.errors) return body;

      throw new Error(JSON.stringify(body));
      
    })
    // console.log('pageContentResponse:', pageContentResponse);
    return {
      data: pageContentResponse.data,
    }
    
  } catch (error) {
    throw new Error('Erro ao buscar os dados do CMS: ' + error.message );
    
  }

  
}