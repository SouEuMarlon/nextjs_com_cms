const SENHA_PREVIEW = process.env.DATO_PREVIEW;
export default async function handler(req, res){
  const previousPage = req.headers.referer;

  // SE TIVER LIGADO O PREVIEW: DESLIGA
  if(req.preview){
    res.clearPreviewData();
    res.writeHead(307, { Location: previousPage });
    return res.end();
  }

  const password = SENHA_PREVIEW;

  if(req.query.password !== password){
    return res.status(401).json({ message: 'Invalid password' });
  }

  // SE TIVER DESLIGADO O PREVIEW: LIGA
  res.setPreviewData({});
  res.writeHead(307, { Location: previousPage });
  return res.end();
}