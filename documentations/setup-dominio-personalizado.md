# Guia: Configurar Domínio Personalizado com Cloudflare + Netlify

**Domínio adquirido:** `calendarioeleitoral.app.br`
**Hospedagem atual:** `calendario-eleitoral-2026.netlify.app`
**Objetivo:** fazer o site abrir em `https://calendarioeleitoral.app.br`

---

## Visão Geral do Processo

O fluxo é simples:

```
Visitante → Cloudflare (DNS + proteção) → Netlify (hospedagem) → seu site
```

Você vai:
1. Adicionar o domínio na Cloudflare para gerenciar o DNS
2. Trocar os nameservers no registrador do domínio (onde você comprou o `.app.br`)
3. Criar os registros DNS na Cloudflare apontando para o Netlify
4. Adicionar o domínio personalizado no painel do Netlify

---

## Parte 1 — Cloudflare

### 1.1 Criar uma conta (se ainda não tiver)

1. Acesse **[dash.cloudflare.com](https://dash.cloudflare.com)**
2. Clique em **Sign Up** e crie sua conta gratuita
3. Verifique o e-mail

---

### 1.2 Adicionar o domínio na Cloudflare

1. No painel inicial, clique no botão **"Add a domain"** (ou "+ Add site")
2. No campo, digite exatamente: `calendarioeleitoral.app.br`
3. Clique em **Continue**
4. Na tela de planos, selecione **Free** (plano gratuito) e clique em **Continue**
5. A Cloudflare vai escanear os registros DNS existentes — clique em **Continue** para passar
6. Na próxima tela você verá **dois nameservers** da Cloudflare, algo como:
   ```
   alba.ns.cloudflare.com
   bart.ns.cloudflare.com
   ```
   > ⚠️ **Guarde esses dois endereços** — você vai precisar deles no passo 1.3

---

### 1.3 Trocar os Nameservers no registrador do domínio

> O "registrador" é o site onde você comprou o domínio `.app.br`. Pode ser Registro.br, Locaweb, HostGator, Umbler, etc.

1. Acesse o painel do registrador onde comprou o `calendarioeleitoral.app.br`
2. Encontre a opção **Nameservers** ou **DNS** para o domínio
3. Substitua os nameservers existentes pelos dois da Cloudflare anotados no passo anterior
4. Salve as alterações

> ⏱️ A propagação pode levar de **5 minutos a 24 horas**. Em geral é rápida (< 1 hora).

---

### 1.4 Criar os registros DNS na Cloudflare

Após adicionar o domínio, vá em **DNS → Records** e crie os seguintes registros:

#### Registro 1 — Domínio principal (apex)

| Campo | Valor |
|---|---|
| **Type** | CNAME |
| **Name** | `@` |
| **Target** | `calendario-eleitoral-2026.netlify.app` |
| **Proxy status** | ☁️ **Proxied** (nuvem laranja — ativado) |
| **TTL** | Auto |

Clique em **Save**.

#### Registro 2 — Subdomínio www

| Campo | Valor |
|---|---|
| **Type** | CNAME |
| **Name** | `www` |
| **Target** | `calendarioeleitoral.app.br` |
| **Proxy status** | ☁️ **Proxied** (nuvem laranja — ativado) |
| **TTL** | Auto |

Clique em **Save**.

> **Por que "Proxied"?** Com a nuvem laranja ativada, o tráfego passa pela Cloudflare, que oferece proteção contra ataques (DDoS), cache e HTTPS automático. Se a nuvem estiver cinza ("DNS only"), o tráfego vai direto para o Netlify sem os benefícios da Cloudflare.

---

### 1.5 Configurar SSL/TLS na Cloudflare

1. No menu lateral, clique em **SSL/TLS**
2. Em **Overview**, selecione o modo **Full**
   - *Full* = a Cloudflare usa HTTPS para se comunicar com o Netlify (mais seguro que "Flexible")
3. Clique em **SSL/TLS → Edge Certificates**
4. Ative **Always Use HTTPS** (o toggle deve ficar azul/verde)
5. Deixe **HSTS desativado** aqui — ele já está configurado no `netlify.toml` do projeto

---

## Parte 2 — Netlify

### 2.1 Adicionar o domínio personalizado

1. Acesse **[app.netlify.com](https://app.netlify.com)** e entre na sua conta
2. Clique no seu site `calendario-eleitoral-2026`
3. No menu superior, clique em **Site configuration** (ou "Site settings")
4. No menu lateral, clique em **Domain management**
5. Em **Custom domains**, clique em **Add a domain**
6. Digite `calendarioeleitoral.app.br` e clique em **Verify** → **Add domain**
7. Repita o processo para adicionar `www.calendarioeleitoral.app.br`

---

### 2.2 Definir o domínio primário

1. Na lista de domínios, localize `calendarioeleitoral.app.br`
2. Clique nos três pontinhos (⋯) ao lado dele
3. Selecione **Set as primary domain**

> O Netlify agora vai redirecionar automaticamente o domínio `.netlify.app` para o seu domínio personalizado.

---

### 2.3 Provisionar o certificado HTTPS

1. Ainda em **Domain management**, role a página até a seção **HTTPS**
2. Clique em **Verify DNS configuration**
3. Se o DNS já propagou, o Netlify vai provisionar o certificado Let's Encrypt automaticamente
4. Aguarde até aparecer: **"Your site has HTTPS enabled"** ✅

> Se aparecer erro, aguarde mais 30 minutos e clique em **Renew certificate** novamente.

---

## Parte 3 — Verificar se está funcionando

Após completar os passos acima, teste:

| URL | O que deve acontecer |
|---|---|
| `https://calendarioeleitoral.app.br` | Site abre normalmente ✅ |
| `https://www.calendarioeleitoral.app.br` | Redireciona para o apex (sem www) ✅ |
| `https://calendario-eleitoral-2026.netlify.app` | Redireciona para o novo domínio ✅ |
| `http://calendarioeleitoral.app.br` | Redireciona para HTTPS ✅ |

Para testar rapidamente, você pode usar o terminal:

```bash
curl -I https://calendarioeleitoral.app.br
# Deve retornar: HTTP/2 200

curl -I https://www.calendarioeleitoral.app.br
# Deve retornar: HTTP/2 301 com Location: https://calendarioeleitoral.app.br/
```

---

## Possíveis problemas

| Problema | Solução |
|---|---|
| Site mostra aviso de certificado inválido | Aguarde até 1h e clique em "Renew certificate" no Netlify |
| DNS não propaga | Verifique se os nameservers foram salvos corretamente no registrador |
| Erro 522 (Connection timed out) | Certifique-se de que o modo SSL é "Full" (não "Flexible") na Cloudflare |
| Site abre mas sem HTTPS | Verifique se "Always Use HTTPS" está ativado na Cloudflare |

---

*Guia criado em 2026-03-15*
