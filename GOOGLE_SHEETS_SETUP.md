# 📊 Configuração do Google Sheets para Leads

Siga este passo a passo para conectar o formulário do site à sua Planilha Google.

### 1. Criar a Planilha e o Script
1. Crie uma nova [Planilha Google](https://sheets.new).
2. Dê um nome a ela (ex: `Leads GHWD`).
3. No menu superior, vá em **Extensões** > **Apps Script**.

### 2. Adicionar o Código do Servidor
Apague tudo o que estiver no editor do Apps Script e cole o código abaixo:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Adiciona uma linha com: Data, Nome, Email, WhatsApp, Empresa, Projeto, Budget, Pontuação
    sheet.appendRow([
      new Date(), 
      data.nome, 
      data.email, 
      data.tel, 
      data.negocio, 
      data.projeto, 
      data.budget, 
      data.score
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (f) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": f }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Implantar como App da Web
1. No canto superior direito, clique em **Implantar** > **Nova implantação**.
2. Clique no ícone de engrenagem (Configurações) e selecione **App da Web**.
3. Configure assim:
   - **Descrição:** `API de Leads GHWD`
   - **Executar como:** `Eu` (seu e-mail)
   - **Quem pode acessar:** `Qualquer pessoa` (Isso é essencial!)
4. Clique em **Implantar**.
5. O Google pedirá para "Autorizar acesso". Siga os passos e clique em "Permitir".
6. Ao final, ele exibirá uma **URL do App da Web**. Copie essa URL.

### 4. Conectar ao Site
1. Abra o arquivo `components/QualificationForm.tsx` no seu editor.
2. Localize a linha (por volta da 137) que diz: `const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/...";`
3. Substitua a URL entre aspas pela URL que você copiou no passo anterior.
4. Salve o arquivo e faça o `git push`.

---
**Pronto!** Seus leads agora serão salvos automaticamente na planilha.
