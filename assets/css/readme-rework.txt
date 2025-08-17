Reactivated desktop Projects UI:
- A aba Projetos exibe novamente o carrossel de projetos no topo e um bloco de detalhes logo abaixo quando em telas grandes.
- Em dispositivos móveis a aba continua vazia graças a uma regra de CSS dedicada.
- A visão geral mantém o carrossel e o código comenta que a renderização ocorre onde o bloco estiver visível.
- Carrossel e bloco de detalhes agora têm caixas distintas com bordas e fundo.
- O painel de detalhes possui altura máxima e rolagem interna para evitar vazamento de conteúdo.
- Na aba Projetos, o carrossel e os detalhes agora são seções independentes, garantindo espaçamento igual aos demais blocos.
- Removido o antigo estilo de sobreposição que fazia o painel de detalhes cobrir o carrossel.
