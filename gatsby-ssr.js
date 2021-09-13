import React from "react"
export const onRenderBody = (
  { setPostBodyComponents },
  pluginOptions
) => {
  setPostBodyComponents([
    <>
      <script 
        key="fun_javascript"
        dangerouslySetInnerHTML={{
          __html: `
            window.SavvyCal=window.SavvyCal||function(){(SavvyCal.q=SavvyCal.q||[]).push(arguments)};
         `,
        }}
      />
      <script 
        key="SavvyCal"
        src="https://embed.savvycal.com/v1/embed.js"
        type="text/javascript"
        async
      />
      <script
        key="fun_javascript"
        dangerouslySetInnerHTML={{
          __html: `
            SavvyCal('init')
         `,
        }}
      />
      <script 
        key="Fathom"
        src="https://cdn.usefathom.com/script.js"
        type="text/javascript"
        data-site="LGJPUNLM"
        defer
      />
       
    </>
  ])
}