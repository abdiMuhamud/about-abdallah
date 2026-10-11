(() => {
  'use strict';

  const USER = 'abdullahi';
  const HOST = 'mombasa';
  const MAIL = 'a.abdi.muhamud@gmail.com';
  const GITHUB = 'https://github.com/abdiMuhamud';

  const flow = (...steps) =>
    `<div class="flow">${steps.map((s) => `<span>${s}</span>`).join('<i>→</i>')}</div>`;
  const kv = (rows) =>
    `<dl class="kv">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
  const ls = (items) => `<ul class="ls">${items.map((i) => `<li><span>${i}</span></li>`).join('')}</ul>`;
  const tags = (items) => `<div class="tags">${items.map((i) => `<span>${i}</span>`).join('')}</div>`;

  // Every section of the site. `blocks` render as command + output pairs in the terminal.
  const ENTRIES = [
    {
      id: 'whoami',
      label: 'whoami',
      cwd: '~',
      stats: [['years', '9+', 1], ['apps', '30+', 1], ['markets', '5', 1], ['servers', '100+', 1], ['status', 'open to relocation']],
      figure: true,
      blocks: [
        {
          cmd: 'whoami',
          out: `<p class="lede">Product integration &amp; delivery specialist. I keep complex, multi-stakeholder
            delivery organised, documented and on schedule — from requirements and interface specs through
            UAT, cutover and transition to support.</p>
            <p class="muted">Telecom, eGovernment and security programmes across five African markets.
            PSPO · PSM · CSPO.</p>`,
        },
        {
          cmd: `fetch ${USER}`,
          out: kv([
            ['experience', '<b>9+</b> years'],
            ['delivered', '<b>30+</b> enterprise applications'],
            ['markets', '<b>5</b> African markets'],
            ['deployed', '<b>100+</b> secure servers'],
            ['based', 'Mombasa, Kenya <span class="muted">· open to relocation</span>'],
            ['since', '2015 <span class="muted">→ present</span>'],
          ]),
        },
        {
          cmd: 'ls links/',
          out: `<div class="links"><a href="mailto:${MAIL}">mail</a><a href="${GITHUB}" target="_blank" rel="noopener">github</a><a href="#ssrs">programmes</a><a href="#experience">experience</a></div>`,
        },
      ],
    },
    {
      id: 'ssrs',
      label: 'ssrs',
      cwd: '~/programmes/ssrs',
      stats: [['domain', 'eGovernment'], ['kind', 'biometric identity'], ['role', 'delivery + integration']],
      blocks: [
        {
          cmd: 'fetch ssrs',
          out: `<h2>Security Forces Registration System</h2>
            <p class="gold">A biometric-driven national ID and secure payroll platform</p>
            ${kv([
              ['domain', 'eGovernment · biometric identity'],
              ['role', 'end-to-end delivery and integration coordination'],
              ['spans', 'biometric capture hardware, identity services, payroll interfaces'],
              ['parties', 'government and vendor teams'],
            ])}`,
        },
        { cmd: 'cat flow', out: flow('biometric capture', 'identity services', 'payroll interfaces') },
      ],
    },
    {
      id: 'bnpl',
      label: 'bnpl',
      cwd: '~/programmes/bnpl',
      stats: [['domain', 'fintech'], ['kind', 'third-party integration'], ['role', 'integration lead']],
      blocks: [
        {
          cmd: 'fetch bnpl',
          out: `<h2>Buy Now Pay Later</h2>
            <p class="gold">Technical integration of a high-growth BNPL platform</p>
            ${kv([
              ['domain', 'fintech · third-party integration'],
              ['role', 'led technical integration'],
              ['workstreams', 'cross-functional engineering and external providers'],
              ['scope', 'credit control configuration, interface validation, release'],
            ])}`,
        },
        { cmd: 'cat flow', out: flow('credit control config', 'interface validation', 'release') },
      ],
    },
    {
      id: 'telecom-vas',
      label: 'telecom-vas',
      cwd: '~/programmes/telecom-vas',
      stats: [['domain', 'telecom'], ['channels', '4', 1], ['role', 'deployment coordination']],
      blocks: [
        {
          cmd: 'fetch telecom-vas',
          out: `<h2>Telecom VAS &amp; connected channel delivery</h2>
            <p class="gold">Multi-channel deployments for operator-facing Value-Added Services</p>
            ${kv([
              ['domain', 'telecommunications · VAS'],
              ['role', 'coordinated multi-channel deployments'],
              ['aligned', 'carrier interfaces, platform dependencies, go-live windows'],
              ['against', 'telecom operator change calendars'],
            ])}`,
        },
        { cmd: 'ls channels/', out: tags(['USSD', 'SMS', 'mobile', 'web']) },
      ],
    },
    {
      id: 'telemedicine',
      label: 'telemedicine',
      cwd: '~/programmes/telemedicine',
      stats: [['domain', 'eHealth'], ['kind', 'multi-platform'], ['role', 'architecture + prioritisation']],
      blocks: [
        {
          cmd: 'fetch telemedicine',
          out: `<h2>Telemedicine &amp; eHealth platforms</h2>
            <p class="gold">Multi-platform telemedicine solutions</p>
            ${kv([
              ['domain', 'eHealth'],
              ['role', 'coordinated system architecture, UI/UX optimisation, feature prioritisation'],
              ['integrated', 'consumer-facing applications with backend clinical and messaging services'],
            ])}`,
        },
        { cmd: 'cat flow', out: flow('consumer apps', 'clinical services', 'messaging services') },
      ],
    },
    {
      id: 'experience',
      label: 'experience/',
      cwd: '~/experience',
      stats: [['roles', '2', 1], ['since', '2015', 1], ['current', 'Innovii Digital Services']],
      blocks: [
        {
          cmd: 'cat innovii.md',
          out: `<div class="role"><h2>Product Owner &amp; Delivery Manager</h2><span>Dec 2016 → present</span></div>
            <p class="gold">Innovii Digital Services Ltd</p>
            ${ls([
              '<b>Integration coordination</b> — end-to-end integration for enterprise platform initiatives, tracked against the agreed integration plan.',
              '<b>Requirements to delivery</b> — business and functional requirements into work packages, acceptance criteria and interface activities.',
              '<b>Artefact ownership</b> — version-controlled traceability, interface and dependency records, RAID logs, deployment checklists, readiness docs.',
              '<b>Testing &amp; release</b> — SIT and UAT cycles, defect triage to closure, cutover, go-live and hypercare.',
              '<b>Risk &amp; escalation</b> — early blocker flags, factual escalation summaries and governance reports for executives and clients.',
              '<b>Vendors &amp; stakeholders</b> — primary technical contact for telecom operators, government ministries and third-party suppliers.',
              '<b>Scale</b> — <span class="hot">30+</span> enterprise applications across <span class="hot">5</span> African markets, <span class="hot">100+</span> secure server deployments.',
            ])}`,
        },
        {
          cmd: 'cat cell-net.md',
          out: `<div class="role"><h2>IT Technical Support Specialist</h2><span>Jan 2015 → Feb 2016</span></div>
            <p class="gold">Cell-Net · Mombasa, Kenya</p>
            ${ls([
              '<b>Deployment QA</b> — pre-deployment testing of software patches and hardware configurations.',
              '<b>Infrastructure readiness</b> — configured, tested and deployed hardware, network devices and software.',
              '<b>Service continuity</b> — proactive maintenance that reduced ticket volume and downtime.',
            ])}`,
        },
        {
          cmd: 'cat education.md',
          out: `<div class="role"><h2>Bachelor of Information Technology</h2><span>2016 → 2023</span></div>
            <p class="gold">Mount Kenya University · Second Class, Upper Division</p>
            <p class="muted">Completed part-time alongside full-time employment.</p>`,
        },
      ],
    },
    {
      id: 'stack',
      label: 'stack/',
      cwd: '~/stack',
      stats: [['methods', 'agile · waterfall · hybrid'], ['tools', '6', 1]],
      blocks: [
        {
          cmd: 'ls stack/integration',
          out: tags(['API integrations', 'middleware', 'service integration', 'data flows', 'systems architecture', 'biometric &amp; identity systems', 'eGovernment portals', 'telecom VAS', 'USSD', 'SMS', 'mobile', 'web']),
        },
        {
          cmd: 'ls stack/artefacts',
          out: tags(['RTM', 'interface registers', 'dependency logs', 'RAID &amp; issue logs', 'deployment checklists', 'operational readiness', 'status reporting']),
        },
        {
          cmd: 'ls stack/release',
          out: tags(['SIT', 'UAT', 'defect triage', 'release readiness', 'change control', 'cutover', 'go-live', 'transition to support']),
        },
        { cmd: 'ls stack/tooling', out: tags(['Jira', 'Confluence', 'Trello', 'Git', 'Postman', 'Grafana']) },
        {
          cmd: 'ls stack/methods',
          out: tags(['Agile / Scrum', 'Waterfall', 'hybrid', 'backlog refinement', 'acceptance criteria', 'sprint &amp; PI planning', 'KPIs &amp; OKRs']),
        },
      ],
    },
    {
      id: 'certs',
      label: 'certs/',
      cwd: '~/certs',
      stats: [['certs', '5', 1], ['scrum.org', '2', 1], ['scrum alliance', '2', 1]],
      blocks: [
        {
          cmd: 'ls -l certs/',
          out: kv([
            ['PSPO', 'Professional Scrum Product Owner <span class="muted">· Scrum.org</span>'],
            ['PSM', 'Professional Scrum Master <span class="muted">· Scrum.org</span>'],
            ['CSPO', 'Certified Scrum Product Owner <span class="muted">· Scrum Alliance</span>'],
            ['DPM', 'Digital Product Management Specialization <span class="muted">· University of Virginia</span>'],
            ['MTM', 'Metrics that Matter: Improving Product Outcomes <span class="muted">· Scrum Alliance</span>'],
          ]),
        },
      ],
    },
    {
      id: 'contact',
      label: 'contact',
      cwd: '~/contact',
      stats: [['based', 'Mombasa, Kenya'], ['status', 'open to relocation']],
      blocks: [
        {
          cmd: 'cat contact',
          out: kv([
            ['mail', `<a href="mailto:${MAIL}">${MAIL}</a>`],
            ['github', `<a href="${GITHUB}" target="_blank" rel="noopener">github.com/abdiMuhamud</a>`],
            ['based', 'Mombasa, Kenya'],
            ['status', '<span class="gold">open to relocation</span>'],
          ]),
        },
        {
          cmd: 'echo $LOOKING_FOR',
          out: '<p>Product integration, delivery and product ownership roles where the hard part is keeping engineering, vendors and stakeholders moving together.</p>',
        },
      ],
    },
  ];

  const $ = (id) => document.getElementById(id);
  const list = $('wheel-list');
  const body = $('term-body');
  const input = $('cmd');
  const wide = matchMedia('(min-width: 821px)');
  const still = matchMedia('(prefers-reduced-motion: reduce)');

  let sel = 0;
  let stopFigure = null;

  const ps1 = (cwd) =>
    `<span class="ps1">${USER}<span class="at">@${HOST}</span> <span class="cwd">${cwd}</span></span>`;

  // ---- wheel -------------------------------------------------------------

  const R = 550; // matches the .arc radius in style.css
  const STEP = 56;

  ENTRIES.forEach((e, i) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.innerHTML = `<button type="button" tabindex="-1"><span class="n">${String(i + 1).padStart(2, '0')}</span><span class="l">${e.label}</span></button>`;
    li.firstChild.addEventListener('click', () => select(i));
    list.appendChild(li);
  });

  function layoutWheel() {
    [...list.children].forEach((li, i) => {
      // wrap so the wheel is a closed loop with the selection in the middle
      const n = ENTRIES.length;
      const d = ((i - sel + n + Math.floor(n / 2)) % n) - Math.floor(n / 2);
      const y = d * STEP;
      const x = 14 + R - Math.sqrt(Math.max(0, R * R - y * y));
      li.style.transform = `translate(${x.toFixed(1)}px, ${y}px) rotate(${(-Math.asin(Math.max(-1, Math.min(1, y / R)))).toFixed(4)}rad)`;
      li.style.opacity = Math.max(0.12, 1 - Math.abs(d) * 0.2);
      li.setAttribute('aria-selected', d === 0);
    });
    if (!wide.matches) list.children[sel].scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  let wheelLock = 0;
  $('wheel').addEventListener('wheel', (ev) => {
    if (!wide.matches) return;
    ev.preventDefault();
    const now = Date.now();
    if (now < wheelLock || Math.abs(ev.deltaY) < 4) return;
    wheelLock = now + 160;
    step(ev.deltaY > 0 ? 1 : -1);
  }, { passive: false });

  // ---- terminal ----------------------------------------------------------

  function render() {
    const e = ENTRIES[sel];
    if (stopFigure) { stopFigure(); stopFigure = null; }

    $('term-title').textContent = `zsh — ${e.cwd}`;
    $('ps1').innerHTML = ps1(e.cwd);
    body.innerHTML =
      (e.figure ? figureMarkup() : '') +
      e.blocks.map((b, i) =>
        `<div class="blk" style="--i:${i + (e.figure ? 1 : 0)}">${ps1(e.cwd)}
          <div class="cmdline"><span class="chev">›</span>${b.cmd}</div>
          <div class="out">${b.out}</div></div>`).join('');
    body.scrollTop = 0;
    if (e.figure) stopFigure = startFigure(body.querySelector('canvas'), $('phase'));

    $('status-stats').innerHTML = e.stats
      .map(([k, v, num]) => `<div><dt>${k}</dt><dd${num ? ' class="num"' : ''}>${v}</dd></div>`).join('');
    document.title = sel === 0
      ? 'Abdullahi Hassan — Product Integration & Delivery'
      : `${e.label} — Abdullahi Hassan`;
  }

  function select(i, fromHash) {
    sel = (i + ENTRIES.length) % ENTRIES.length;
    layoutWheel();
    render();
    if (!fromHash) history.replaceState(null, '', `#${ENTRIES[sel].id}`);
  }

  const step = (d) => select(sel + d);
  const indexOf = (name) => ENTRIES.findIndex((e) => e.id === name || e.label === name || e.label === `${name}/`);

  function say(cmd, html) {
    const div = document.createElement('div');
    div.className = 'blk';
    div.innerHTML = `${ps1(ENTRIES[sel].cwd)}<div class="cmdline"><span class="chev">›</span><span></span></div><div class="out">${html}</div>`;
    div.querySelector('.cmdline span:last-child').textContent = cmd;
    body.appendChild(div);
    div.scrollIntoView({ block: 'nearest' });
  }

  function run(raw) {
    const cmd = raw.trim().replace(/^:/, '');
    if (!cmd) return;
    const [head, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(' ').replace(/\/$/, '');
    const target = ['cd', 'open', 'cat', 'fetch'].includes(head) ? arg.replace(/^~\//, '') : cmd.replace(/\/$/, '');

    if (head === 'help') {
      return say(cmd, kv([
        ['ls', 'list sections'],
        ['cd &lt;section&gt;', 'open a section — or just type its name'],
        ['next · prev', 'move the wheel'],
        ['mail · github', 'open a link'],
        ['clear', 'back to whoami'],
      ]));
    }
    if (head === 'ls' && !arg) {
      return say(cmd, `<div class="links">${ENTRIES.map((e) => `<a href="#${e.id}">${e.label}</a>`).join('')}</div>`);
    }
    if (head === 'next') return step(1);
    if (head === 'prev') return step(-1);
    if (head === 'clear' || cmd === 'cd' || cmd === 'cd ~') return select(0);
    if (head === 'mail') { location.href = `mailto:${MAIL}`; return; }
    if (head === 'github') { window.open(GITHUB, '_blank', 'noopener'); return; }

    const i = indexOf(target === USER ? 'whoami' : target);
    if (i >= 0) return select(i);
    say(cmd, `<span class="err">command not found: ${head.replace(/[<>&]/g, '')}</span> <span class="muted">— try <kbd>help</kbd></span>`);
  }

  $('prompt-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const v = input.value;
    input.value = '';
    run(v);
  });

  document.addEventListener('keydown', (ev) => {
    if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
    if (ev.key === 'ArrowDown') { ev.preventDefault(); step(1); }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); step(-1); }
    else if (ev.key === 'Escape') { input.value = ''; input.blur(); }
    else if (ev.key.length === 1 && document.activeElement !== input) input.focus();
  });

  addEventListener('hashchange', () => {
    const i = indexOf(decodeURIComponent(location.hash.slice(1)));
    if (i >= 0 && i !== sel) select(i, true);
  });
  wide.addEventListener('change', layoutWheel);

  // ---- clock -------------------------------------------------------------

  const clockFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit' });
  const tick = () => { $('clock').textContent = clockFmt.format(new Date()); };
  tick();
  setInterval(tick, 20000);

  // ---- figure: parties → integration plan → channels, over a delivery timeline

  function figureMarkup() {
    return `<div class="blk fig">
      <canvas role="img" aria-label="Diagram: operators, ministries, vendors and providers flow through an integration plan out to USSD, SMS, mobile and web channels, above a delivery timeline from requirements to hypercare."></canvas>
      <aside>
        <h3>at a glance <span>fig. 1</span></h3>
        <table>
          <tr><td>experience</td><td>9+ yrs</td></tr>
          <tr><td>applications</td><td>30+</td></tr>
          <tr><td>markets</td><td>5</td></tr>
          <tr><td>servers</td><td>100+</td></tr>
          <tr><td>certifications</td><td>5</td></tr>
        </table>
        <div class="phase"><span class="muted">current phase</span><b id="phase">requirements</b></div>
      </aside>
    </div>`;
  }

  function startFigure(canvas, phaseEl) {
    const ctx = canvas.getContext('2d');
    const css = getComputedStyle(document.documentElement);
    const C = Object.fromEntries(['fg', 'dim', 'faint', 'hot', 'gold', 'panel'].map((k) => [k, css.getPropertyValue(`--${k}`).trim()]));
    const IN = ['operators', 'ministries', 'vendors', 'providers'];
    const OUT = ['ussd', 'sms', 'mobile', 'web'];
    const STAGES = ['requirements', 'interfaces', 'SIT', 'UAT', 'cutover', 'hypercare'];
    const SHORT = ['reqs', 'intf', 'SIT', 'UAT', 'cutover', 'hyper'];
    const LOOP = 26000;

    let W = 0, H = 0, raf = 0, edges = [];
    const packets = Array.from({ length: 14 }, (_, i) => ({ e: i % 8, p: (i * 0.37) % 1, v: 0.00016 + (i % 5) * 0.00003 }));

    function resize() {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const top = 26, bottom = H - 70, cx = W / 2, cy = (top + bottom) / 2;
      const lx = 96, rx = W - 70, hw = Math.min(56, W * 0.13);
      edges = [
        ...IN.map((_, i) => {
          const y = top + (i * (bottom - top)) / (IN.length - 1);
          return [lx, y, (lx + cx) / 2, y, (lx + cx) / 2, cy, cx - hw, cy];
        }),
        ...OUT.map((_, i) => {
          const y = top + (i * (bottom - top)) / (OUT.length - 1);
          return [cx + hw, cy, (rx + cx) / 2, cy, (rx + cx) / 2, y, rx, y];
        }),
      ];
      edges.geo = { top, bottom, cx, cy, lx, rx, hw };
    }

    const bez = (e, t) => {
      const u = 1 - t;
      return [
        u * u * u * e[0] + 3 * u * u * t * e[2] + 3 * u * t * t * e[4] + t * t * t * e[6],
        u * u * u * e[1] + 3 * u * u * t * e[3] + 3 * u * t * t * e[5] + t * t * t * e[7],
      ];
    };

    let last = 0;
    function frame(now) {
      const dt = last ? Math.min(now - last, 60) : 16;
      last = now;
      const { cx, cy, lx, rx, hw } = edges.geo;
      const small = W < 440;
      ctx.clearRect(0, 0, W, H);
      ctx.font = `${small ? 10 : 11}px "IBM Plex Mono", monospace`;
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 1;

      ctx.strokeStyle = C.dim;
      ctx.globalAlpha = 0.6;
      edges.forEach((e) => {
        ctx.beginPath();
        ctx.moveTo(e[0], e[1]);
        ctx.bezierCurveTo(e[2], e[3], e[4], e[5], e[6], e[7]);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      ctx.fillStyle = C.fg;
      ctx.textAlign = 'right';
      IN.forEach((s, i) => ctx.fillText(s, lx - 8, edges[i][1]));
      ctx.textAlign = 'left';
      OUT.forEach((s, i) => ctx.fillText(s, rx + 8, edges[4 + i][7]));

      ctx.fillStyle = C.panel;
      ctx.fillRect(cx - hw, cy - 22, hw * 2, 44);
      ctx.strokeStyle = C.fg;
      ctx.strokeRect(cx - hw + 0.5, cy - 21.5, hw * 2 - 1, 43);
      ctx.fillStyle = C.fg;
      ctx.textAlign = 'center';
      ctx.fillText('integration', cx, cy - 7);
      ctx.fillStyle = C.gold;
      ctx.fillText('plan', cx, cy + 8);

      packets.forEach((p) => {
        p.p += p.v * dt;
        if (p.p > 1) { p.p -= 1; p.e = (p.e + 3) % 8; }
        const [x, y] = bez(edges[p.e], p.p);
        ctx.fillStyle = p.e < 4 ? C.fg : C.hot;
        ctx.fillRect(Math.round(x) - 1.5, Math.round(y) - 1.5, 3, 3);
      });

      // delivery timeline
      const ty = H - 34, x0 = small ? 20 : 52, x1 = W - (small ? 22 : 44), span = (x1 - x0) / (STAGES.length - 1);
      const prog = (now % LOOP) / LOOP;
      const stage = Math.min(STAGES.length - 1, Math.round(prog * (STAGES.length - 1)));
      ctx.strokeStyle = C.dim;
      ctx.setLineDash([3, 4]);
      ctx.beginPath(); ctx.moveTo(x0, ty + 0.5); ctx.lineTo(x1, ty + 0.5); ctx.stroke();
      ctx.setLineDash([]);
      (small ? SHORT : STAGES).forEach((s, i) => {
        const x = Math.round(x0 + i * span) + 0.5;
        ctx.strokeStyle = i <= stage ? C.fg : C.dim;
        ctx.beginPath(); ctx.moveTo(x, ty - 4); ctx.lineTo(x, ty + 5); ctx.stroke();
        ctx.fillStyle = i === stage ? C.gold : C.dim;
        ctx.textAlign = 'center';
        ctx.fillText(s, x, ty + 17);
      });
      const mx = x0 + prog * (x1 - x0);
      ctx.fillStyle = C.hot;
      ctx.beginPath(); ctx.moveTo(mx, ty - 2); ctx.lineTo(mx - 4, ty - 9); ctx.lineTo(mx + 4, ty - 9); ctx.fill();
      if (phaseEl && phaseEl.textContent !== STAGES[stage]) phaseEl.textContent = STAGES[stage];

      if (!still.matches) raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => { resize(); if (still.matches) frame(performance.now()); });
    ro.observe(canvas);
    resize();
    raf = requestAnimationFrame(frame);
    // Canvas text is drawn before the webfont arrives on first load; reduced-motion users need a redraw.
    document.fonts.ready.then(() => { if (still.matches) frame(performance.now()); });

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }

  // ---- boot --------------------------------------------------------------

  const start = indexOf(decodeURIComponent(location.hash.slice(1)));
  select(start >= 0 ? start : 0, true);
  if (matchMedia('(pointer: fine)').matches) input.focus({ preventScroll: true });
})();
