// Templates de interface
const tpl = {
  login: () => `
      <main class="card">
        <div class="top-bar" id="topBar">
          <button type="button" class="back-btn" id="btnBack">← Voltar</button>
        </div>
        <header class="brand">
          <div class="logo" aria-hidden="true"></div>
          <div class="brand-text">
            <div class="title">Telemix</div>
            <p class="subtitle">Acesse sua conta para continuar</p>
          </div>
        </header>
        <section class="actions" id="actions">
          <button class="btn btn-primary" id="btnLogin">Login</button>
          <button class="btn" id="btnCreate">Criar conta</button>
        </section>
        <div class="divider"></div>
        <form id="loginForm" novalidate>
          <div class="field">
            <label class="label" for="user">Usuário</label>
            <input class="input" id="user" name="user" placeholder="ex.: admin" autocomplete="username" />
          </div>
          <div class="field">
            <label class="label" for="pass">Senha</label>
            <input class="input" id="pass" name="pass" type="password" placeholder="••••" autocomplete="current-password" />
            <small class="label">Dica de teste: admin / 1234 ou filipe / 1234</small>
          </div>
          <button id="btnContinue" class="continue" type="submit" disabled>Continuar</button>
        </form>
      </main>` ,

  dashboard: () => `
      <div class="app">
        <aside class="sidebar panel" id="sidebar">
          <div class="logo-row"><div class="logo"></div><strong>Telemix</strong></div>
          <nav class="nav">
            <button class="navbtn" id="tabOverview">Visão geral</button>
            <button class="navbtn" id="tabTickets">Chamados</button>
            <button class="navbtn" id="tabReports">Relatórios</button>
            <button class="navbtn" id="tabProjects">Projetos</button>
            <button class="navbtn" id="tabAdmin">Admin</button>
            <div class="admin-subnav" id="adminMenu">
              <button class="navbtn" id="btnAdminCreateTicket">Criar chamado</button>
              <button class="navbtn" id="btnAdminArchivedTickets">Chamados arquivados</button>
              <button class="navbtn" id="btnAdminFinishedTickets">Chamados finalizados</button>
              <button class="navbtn" id="btnAdminHistory">Histórico</button>
              <button class="navbtn" id="btnAdminCreateProject">Criar projeto</button>
              <button class="navbtn" id="btnAdminArchivedProjects">Projetos arquivados</button>
              <button class="navbtn" id="btnAdminFinishedProjects">Projetos finalizados</button>
              <button class="navbtn" id="btnAdminChanges">Alterações</button>
            </div>
            <!-- menu admin-only -->
            <button class="navbtn" id="tabConfig">Configurações</button>
          </nav>
        </aside>

        <header class="top panel">
          <div class="brand-inline">
            <button id="btnHamb" class="hamburger">☰</button>
            <span class="pill" id="sectionPill">Dashboard</span>
            <span class="greet" id="greet" ></span>
            <span class="clock" id="clock" ></span>
          </div>
          <div class="top-actions">
            <button class="tv-mode-btn" id="btnTV" title="Modo TV">📺</button>
            <button class="logout" id="btnLogout">Sair</button>
          </div>
        </header>

        <main class="content panel" id="dashboardContent">
          <!-- CHAMADOS -->
          <section class="section tickets" id="sectionTickets">
            <h2>Chamados</h2>
            <div class="table-wrap" id="ticketsWrap">
              <table class="table" id="ticketsTable">
                <thead>
                  <tr>
                    <th>ID do chamado</th>
                    <th>Data de criação</th>
                    <th>Ponto de encontro</th>
                    <th>Dupla</th>
                    <th>% de conclusão</th>
                    <th>% de prazo</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>

            <!-- Detalhe do chamado + subtabs -->
            <div class="ticket-detail panel hidden" id="ticketDetail">
              <header class="td-header">
                <strong id="tdTitle">Chamado</strong>
                <div class="td-header__meta">
                  <span class="badge" id="tdPct">0%</span>
                </div>
              </header>
              <div id="tdMeta" class="meta-row"></div>

              <div class="subtabs">
                <button class="subtab active" data-tab="tdDesc" >Descrição</button>
                <button class="subtab" data-tab="tdNotes" >Anotações</button>
                <button class="subtab" data-tab="tdRDO"   >RDO's</button>
                <button class="subtab" data-tab="tdObs"   >Observações</button>
                <button class="subtab" data-tab="tdEditForm" >Editar</button>
              </div>
              <div class="subtab-panel active" id="tdDesc" ></div>
              <div class="subtab-panel" id="tdNotes" class="hidden">
                <textarea class="editor-textarea" placeholder="Escreva anotações do chamado..."></textarea>
              </div>
              <div class="subtab-panel" id="tdRDO" class="hidden">
                <ul id="tdRDOList" class="list-grid ml-3"></ul>
              </div>
              <div class="subtab-panel" id="tdObs" class="hidden">
                <textarea class="editor-textarea" placeholder="Observações gerais..."></textarea>
              </div>
              <div class="subtab-panel" id="tdEditForm" class="hidden"></div>
            </div>
          </section>

          <!-- GRÁFICOS (overview) -->
          <section class="section charts" id="sectionCharts">
            <h2>Andamento do chamado selecionado</h2>
            <div class="chart">
              <h3>Progresso ao longo do tempo (%)</h3>
              <div class="svg-wrap"><svg id="chartProgress" viewBox="0 0 100 40" preserveAspectRatio="none"></svg></div>
            </div>
            <div class="chart">
              <h3>Prazo consumido vs Conclusão (%)</h3>
              <div class="svg-wrap"><svg id="chartSLA" viewBox="0 0 100 40" preserveAspectRatio="none"></svg></div>
            </div>
          </section>

          <!-- PROJETOS (visão geral e aba Projetos no desktop) -->
          <section class="section projects" id="sectionProjects">
            <h2>
              <span>Projetos</span>
              <span class="proj-actions">
                <button class="caro-btn" id="caroPrev" title="Anterior">◀</button>
                <button class="caro-btn" id="caroNext" title="Próximo">▶</button>
              </span>
            </h2>
            <div class="carousel" id="projectsCarousel"></div>
            <div class="project-details-inline" id="projectDetailsInline"></div>
          </section>

          <!-- ADMIN: criar chamado -->
          <section class="section" id="sectionCreateTicket" class="hidden">
            <h2>Novo chamado</h2>
            <form class="edit-form" id="createTicketForm"></form>
          </section>
        </main>
      </div>`
};

window.tpl = tpl;
