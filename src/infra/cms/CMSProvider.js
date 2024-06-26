import get from "lodash/get";
import React from "react";

const CMSContext = React.createContext({
  cmsContent: {},
});

export const getCMSContent = (path = '') => {
  const cmsContent = React.useContext(CMSContext).cmsContent;

  if(path === '') {
    return cmsContent;
  }

  const output = get(cmsContent, path);

  if (!output) {
    throw new Error(`Não foi possível encontrar o conteúdo para o caminho ${path}. reveja a query e tente novamente.`);
  }
  
  return output;
}

export default function CMSProvider({cmsContent, children}) {
  return (
    <CMSContext.Provider value={{cmsContent}}>
      {children}
    </CMSContext.Provider>
  )
}