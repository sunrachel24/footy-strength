// FootyStrength PWA — Main App
// Hash-based routing, UI rendering

// ─── State ────────────────────────────────────────────────────
const state = {
  level: 'intermediate', // 'intermediate' | 'beginner'
  calMonth: new Date().getMonth(),
  calYear: new Date().getFullYear(),
  selectedDate: null,
};

// ─── Helpers ──────────────────────────────────────────────────
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function colorClass(hex) {
  const map = {
    '#0d9488': 'teal', '#3b82f6': 'blue', '#f97316': 'orange',
    '#ef4444': 'red',  '#22c55e': 'green','#a855f7': 'purple',
  };
  return map[hex] || 'blue';
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function formatDate(isoStr) {
  const d = new Date(isoStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function formatMonthYear(year, month) {
  return new Date(year, month, 1).toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
}

function escHtml(s) {
  if (!s) return '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function getPhasesByLevel(level) {
  return PROGRAM_DATA[level] || [];
}

function countSessions(phase) {
  return phase.weekBlocks.reduce((acc, wb) => acc + wb.sessions.length, 0);
}

// ─── SVG Icons ────────────────────────────────────────────────
const ICON = {
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`,
  chevronLeft:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  clipboard:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
  calendar:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
};

// ─── Tab Bar ──────────────────────────────────────────────────
function renderTabBar(active) {
  return `
    <div id="tab-bar">
      <button class="tab-btn ${active==='program'?'active':''}" onclick="navigate('#/')">
        ${ICON.clipboard}
        <span>Program</span>
      </button>
      <button class="tab-btn ${active==='calendar'?'active':''}" onclick="navigate('#/calendar')">
        ${ICON.calendar}
        <span>Calendar</span>
      </button>
    </div>
  `;
}

// ─── Phase List View ──────────────────────────────────────────
function renderPhaseList() {
  const phases = getPhasesByLevel(state.level);

  const cards = phases.map((phase, idx) => {
    const cc = colorClass(phase.color);
    const seasonLabel = phase.season === 'pre' ? '🌤 Pre-Season' : '🏟 In-Season';
    const seasonBadgeClass = phase.season === 'pre' ? 'badge-season-pre' : 'badge-season-in';
    const blockCount = phase.weekBlocks.length;
    return `
      <div class="phase-card" onclick="navigate('#/phase/${state.level}/${idx}')" style="border-color: ${hexToRgba(phase.color, 0.25)}">
        <div class="phase-card-header">
          <div class="phase-icon bg-${cc}" style="background:${hexToRgba(phase.color,0.15)}">
            ${phase.icon}
          </div>
          <div class="phase-card-info">
            <div class="phase-card-title">${escHtml(phase.name)}</div>
            <div class="phase-card-sub">${escHtml(phase.subtitle)}</div>
            <div class="phase-card-meta">
              <span class="badge ${seasonBadgeClass}">${seasonLabel}</span>
              <span class="badge badge-neutral">${blockCount} ${blockCount===1?'block':'blocks'}</span>
            </div>
          </div>
          <div class="phase-chevron">${ICON.chevronRight}</div>
        </div>
        <div class="phase-card-footer">
          <span class="phase-card-duration">${escHtml(phase.duration)}</span>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('view-container').innerHTML = `
    <div class="view-enter">
      <div class="nav-bar">
        <h1>FootyStrength</h1>
      </div>
      <div class="segment-wrap">
        <div class="segmented">
          <button class="seg-btn ${state.level==='intermediate'?'active':''}"
            onclick="setLevel('intermediate')">Intermediate</button>
          <button class="seg-btn ${state.level==='beginner'?'active':''}"
            onclick="setLevel('beginner')">Beginner</button>
        </div>
      </div>
      <div class="phase-list">${cards}</div>
    </div>
  `;
  updateTabBar('program');
}

// ─── Phase Detail View ────────────────────────────────────────
function renderPhaseDetail(level, phaseIndex) {
  const phases = getPhasesByLevel(level);
  const phase = phases[phaseIndex];
  if (!phase) { navigate('#/'); return; }

  const cc = colorClass(phase.color);
  const seasonLabel = phase.season === 'pre' ? '🌤 Pre-Season' : '🏟 In-Season';
  const seasonBadgeClass = phase.season === 'pre' ? 'badge-season-pre' : 'badge-season-in';

  const blocksHtml = phase.weekBlocks.map((wb, blockIdx) => {
    const sessionsHtml = wb.sessions.map((session, sessIdx) => {
      const groupCount = session.groups.length;
      return `
        <div class="session-row" onclick="navigate('#/phase/${level}/${phaseIndex}/block/${blockIdx}/session/${sessIdx}')">
          <div class="session-row-day">${escHtml(session.day)}</div>
          <div class="session-row-count">${groupCount} exercise${groupCount===1?'':'s'}</div>
          <div class="session-row-chevron">${ICON.chevronRight}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="week-block-section">
        <div class="week-block-title">${escHtml(wb.title)}</div>
        <div class="week-block-sub">${escHtml(wb.subtitle)}</div>
        ${sessionsHtml}
      </div>
    `;
  }).join('');

  document.getElementById('view-container').innerHTML = `
    <div class="view-enter">
      <div class="nav-bar">
        <button class="nav-back" onclick="history.back()">
          ${ICON.chevronLeft} Back
        </button>
        <h1>${escHtml(phase.name)}</h1>
        <div style="min-width:52px"></div>
      </div>
      <div class="phase-detail-header">
        <div class="phase-detail-icon">${phase.icon}</div>
        <div class="phase-detail-title" style="color:${phase.color}">${escHtml(phase.name)}</div>
        <div class="phase-detail-subtitle">${escHtml(phase.subtitle)}</div>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <span class="badge ${seasonBadgeClass}">${seasonLabel}</span>
          <span class="badge badge-neutral">${escHtml(phase.duration)}</span>
        </div>
        <div class="phase-detail-desc">${escHtml(phase.description)}</div>
      </div>
      ${blocksHtml}
    </div>
  `;
  updateTabBar('program');
}

// ─── Session View ─────────────────────────────────────────────
function renderSessionView(level, phaseIndex, blockIndex, sessionIndex) {
  const phases = getPhasesByLevel(level);
  const phase = phases[phaseIndex];
  if (!phase) { navigate('#/'); return; }
  const wb = phase.weekBlocks[blockIndex];
  if (!wb) { navigate(`#/phase/${level}/${phaseIndex}`); return; }
  const session = wb.sessions[sessionIndex];
  if (!session) { navigate(`#/phase/${level}/${phaseIndex}`); return; }

  // Load last logged weights for this session
  const lastEntry = getLastEntry(phase.name, session.day);
  const weightMap = {};
  if (lastEntry) {
    lastEntry.exerciseLogs.forEach(l => { weightMap[l.exerciseName] = l.weight; });
  }

  function exItemHtml(item, isSuperset = false) {
    const wt = weightMap[item.name];
    const wtBadge = wt ? `<span class="weight-badge">${escHtml(wt)} lbs</span>` : '';
    const videoIcon = item.videoFile ? `<span class="video-icon">▶</span>` : '';
    const notesHtml = item.notes ? `<div class="exercise-notes">${escHtml(item.notes)}</div>` : '';
    const wrapClass = isSuperset ? 'superset-item' : 'exercise-single';
    const safeName = item.name.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
    return `
      <div class="${wrapClass}" onclick="openExerciseDetail('${level}','${phaseIndex}','${blockIndex}','${sessionIndex}','${safeName}')">
        <div class="exercise-name-row">
          <div class="exercise-name">${escHtml(item.name)}</div>
          <div class="exercise-name-row-right">${videoIcon}${wtBadge}</div>
        </div>
        <div class="exercise-prescription">${escHtml(item.prescription)}</div>
        ${notesHtml}
      </div>
    `;
  }

  const groupsHtml = session.groups.map(group => {
    if (group.superset) {
      return `
        <div class="exercise-group">
          <div class="superset-wrap">
            <div class="superset-line-col"><div class="superset-line"></div></div>
            <div class="superset-exercises">
              <div class="superset-label-row"><span class="superset-label">Superset</span></div>
              ${exItemHtml(group.primary, true)}
              ${exItemHtml(group.superset, true)}
            </div>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="exercise-group">
          ${exItemHtml(group.primary, false)}
        </div>
      `;
    }
  }).join('');

  document.getElementById('view-container').innerHTML = `
    <div class="view-enter">
      <div class="nav-bar">
        <button class="nav-back" onclick="history.back()">
          ${ICON.chevronLeft} Back
        </button>
        <h1>${escHtml(session.day)}</h1>
        <button class="nav-action" onclick="openLogSheet('${level}','${phaseIndex}','${blockIndex}','${sessionIndex}',null)">Log</button>
      </div>
      <div class="session-view">
        ${groupsHtml}
      </div>
    </div>
  `;
  updateTabBar('program');

  // Store current session context for log sheet
  window._sessionCtx = { level, phaseIndex, blockIndex, sessionIndex };
}

// ─── Log Sheet ────────────────────────────────────────────────
function openLogSheet(level, phaseIndex, blockIndex, sessionIndex, focusExercise) {
  const phases = getPhasesByLevel(level);
  const phase = phases[parseInt(phaseIndex)];
  const wb = phase.weekBlocks[parseInt(blockIndex)];
  const session = wb.sessions[parseInt(sessionIndex)];

  // Collect all exercise items
  const allExercises = [];
  session.groups.forEach(group => {
    allExercises.push(group.primary);
    if (group.superset) allExercises.push(group.superset);
  });

  // Load last entry to pre-fill
  const lastEntry = getLastEntry(phase.name, session.day);
  const weightMap = {};
  const notesMap = {};
  if (lastEntry) {
    lastEntry.exerciseLogs.forEach(l => {
      weightMap[l.exerciseName] = l.weight;
      notesMap[l.exerciseName] = l.notes;
    });
  }

  // Build exercise log rows
  const exRowsHtml = allExercises.map((item, i) => {
    const savedWeight = weightMap[item.name] || '';
    const savedNotes = notesMap[item.name] || '';
    const highlight = (focusExercise && item.name === focusExercise) ? 'style="border: 1px solid #3b82f6;"' : '';
    return `
      <div class="log-exercise-block" ${highlight} id="log-ex-${i}">
        <div class="log-exercise-name">${escHtml(item.name)}</div>
        <div class="log-exercise-prescription">${escHtml(item.prescription)}</div>
        <div class="log-fields">
          <div class="log-field">
            <label>Weight (lbs)</label>
            <input type="text" inputmode="decimal" placeholder="e.g. 135"
              data-exercise="${escHtml(item.name)}"
              data-field="weight"
              value="${escHtml(savedWeight)}"
              autocomplete="off">
          </div>
          <div class="log-field">
            <label>Notes</label>
            <input type="text" placeholder="optional"
              data-exercise="${escHtml(item.name)}"
              data-field="notes"
              value="${escHtml(savedNotes)}"
              autocomplete="off">
          </div>
        </div>
      </div>
    `;
  }).join('');

  const lastDate = lastEntry ? lastEntry.date : todayISO();
  const lastGenNotes = lastEntry ? lastEntry.generalNotes : '';

  const sheetHtml = `
    <div class="modal-overlay" id="log-modal" onclick="closeLogSheetOnOverlay(event)">
      <div class="modal-sheet">
        <div class="modal-header">
          <button class="modal-cancel" onclick="closeLogSheet()">Cancel</button>
          <div class="modal-title">${escHtml(session.day)}</div>
          <button class="modal-save" onclick="saveLogSheet('${level}','${phaseIndex}','${blockIndex}','${sessionIndex}')">Save</button>
        </div>
        <div class="modal-body" id="log-modal-body">
          <div class="log-date-field">
            <label>Date</label>
            <input type="date" id="log-date" value="${todayISO()}">
          </div>
          <div class="log-section-label">Exercises</div>
          ${exRowsHtml}
          <div class="log-general-notes">
            <label>Session Notes</label>
            <textarea id="log-general-notes" placeholder="How did the session go?">${escHtml(lastGenNotes)}</textarea>
          </div>
        </div>
      </div>
    </div>
  `;

  // Remove any existing modal
  const existing = document.getElementById('log-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', sheetHtml);

  // Scroll focused exercise into view after short delay
  if (focusExercise) {
    setTimeout(() => {
      const idx = allExercises.findIndex(e => e.name === focusExercise);
      if (idx >= 0) {
        const el = document.getElementById(`log-ex-${idx}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const weightInput = el.querySelector('[data-field="weight"]');
          if (weightInput) weightInput.focus();
        }
      }
    }, 300);
  }
}

function closeLogSheet() {
  const modal = document.getElementById('log-modal');
  if (modal) modal.remove();
}

function closeLogSheetOnOverlay(event) {
  if (event.target.id === 'log-modal') closeLogSheet();
}

function saveLogSheet(level, phaseIndex, blockIndex, sessionIndex) {
  const phases = getPhasesByLevel(level);
  const phase = phases[parseInt(phaseIndex)];
  const wb = phase.weekBlocks[parseInt(blockIndex)];
  const session = wb.sessions[parseInt(sessionIndex)];

  const date = document.getElementById('log-date').value || todayISO();
  const generalNotes = document.getElementById('log-general-notes').value.trim();

  // Collect exercise logs
  const exerciseLogs = [];
  const weightInputs = document.querySelectorAll('#log-modal [data-field="weight"]');
  weightInputs.forEach(input => {
    const exerciseName = input.dataset.exercise;
    const weight = input.value.trim();
    const notesInput = document.querySelector(`#log-modal [data-exercise="${CSS.escape(exerciseName)}"][data-field="notes"]`);
    const notes = notesInput ? notesInput.value.trim() : '';
    if (weight || notes) {
      exerciseLogs.push({ exerciseName, weight, notes });
    }
  });

  const entry = {
    id: crypto.randomUUID(),
    date,
    phaseName: phase.name,
    weekBlockTitle: wb.title,
    sessionNumber: session.day,
    exerciseLogs,
    generalNotes,
  };

  saveEntry(entry);
  closeLogSheet();

  // Refresh session view to show updated weight badges
  renderSessionView(level, phaseIndex, blockIndex, sessionIndex);
}

// ─── Calendar View ────────────────────────────────────────────
function renderCalendar() {
  const year = state.calYear;
  const month = state.calMonth;

  const monthEntries = getEntriesForMonth(year, month);
  const entryDates = new Set(monthEntries.map(e => e.date.slice(0, 10)));

  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayStr = todayISO();

  const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const wdHtml = weekdays.map(d => `<div class="cal-weekday">${d}</div>`).join('');

  // Build calendar cells
  let cellsHtml = '';
  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    cellsHtml += `<div class="cal-day empty"></div>`;
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const isToday = dateStr === todayStr;
    const hasLog = entryDates.has(dateStr);
    const isSelected = state.selectedDate === dateStr;
    const dotHtml = hasLog ? `<div class="cal-dot-row"><div class="cal-dot"></div></div>` : '';

    let classes = 'cal-day';
    if (isToday) classes += ' today';
    if (hasLog) classes += ' has-log';
    if (isSelected) classes += ' selected';

    cellsHtml += `
      <div class="${classes}" onclick="selectCalDay('${dateStr}')">
        <div class="cal-day-num">${day}</div>
        ${dotHtml}
      </div>
    `;
  }

  // Day detail panel
  const dayDetailHtml = state.selectedDate ? renderDayDetail(state.selectedDate) : '';

  document.getElementById('view-container').innerHTML = `
    <div class="view-enter">
      <div class="nav-bar">
        <h1>Calendar</h1>
      </div>
      <div class="calendar-view">
        <div class="cal-header">
          <button class="cal-nav-btn" onclick="calPrevMonth()">${ICON.chevronLeft}</button>
          <div class="cal-month-label">${formatMonthYear(year, month)}</div>
          <button class="cal-nav-btn" onclick="calNextMonth()">${ICON.chevronRight}</button>
        </div>
        <div class="cal-weekdays">${wdHtml}</div>
        <div class="cal-grid">${cellsHtml}</div>
        ${dayDetailHtml}
      </div>
    </div>
  `;
  updateTabBar('calendar');
}

function renderDayDetail(dateStr) {
  const entries = getEntriesForDate(dateStr);
  const label = formatDate(dateStr);

  if (!entries.length) {
    return `
      <div class="day-detail-panel">
        <div class="day-detail-header">
          <div class="day-detail-title">${escHtml(label)}</div>
          <button class="day-detail-close" onclick="clearCalDay()">✕</button>
        </div>
        <div class="day-no-entries">No workouts logged</div>
      </div>
    `;
  }

  const entryItems = entries.map(entry => {
    const logRows = entry.exerciseLogs.filter(l => l.weight).map(l => `
      <div class="day-entry-log-row">
        <div class="day-entry-log-name">${escHtml(l.exerciseName)}</div>
        <div class="day-entry-log-weight">${escHtml(l.weight)} lbs</div>
      </div>
    `).join('');

    const notesHtml = entry.generalNotes
      ? `<div class="day-entry-notes">${escHtml(entry.generalNotes)}</div>` : '';

    return `
      <div class="day-entry-item">
        <div class="day-entry-header">
          <div class="day-entry-title">${escHtml(entry.phaseName)} · ${escHtml(entry.sessionNumber)}</div>
          <button class="day-entry-delete" onclick="deleteEntryAndRefresh('${entry.id}')">Delete</button>
        </div>
        <div style="font-size:12px;color:var(--text4);margin-bottom:4px;">${escHtml(entry.weekBlockTitle)}</div>
        <div class="day-entry-logs">${logRows}</div>
        ${notesHtml}
      </div>
    `;
  }).join('');

  return `
    <div class="day-detail-panel">
      <div class="day-detail-header">
        <div class="day-detail-title">${escHtml(label)}</div>
        <button class="day-detail-close" onclick="clearCalDay()">✕</button>
      </div>
      ${entryItems}
    </div>
  `;
}

function selectCalDay(dateStr) {
  state.selectedDate = state.selectedDate === dateStr ? null : dateStr;
  renderCalendar();
}

function clearCalDay() {
  state.selectedDate = null;
  renderCalendar();
}

function calPrevMonth() {
  state.calMonth--;
  if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; }
  state.selectedDate = null;
  renderCalendar();
}

function calNextMonth() {
  state.calMonth++;
  if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; }
  state.selectedDate = null;
  renderCalendar();
}

function deleteEntryAndRefresh(id) {
  deleteEntry(id);
  renderCalendar();
}

// ─── Tab Bar Helper ───────────────────────────────────────────
function updateTabBar(active) {
  const existing = document.getElementById('tab-bar');
  if (existing) existing.remove();
  document.getElementById('app').insertAdjacentHTML('beforeend', renderTabBar(active));
}

// ─── Exercise Detail Sheet ────────────────────────────────────
function openExerciseDetail(level, phaseIndex, blockIndex, sessionIndex, exerciseName) {
  const phases = getPhasesByLevel(level);
  const phase = phases[parseInt(phaseIndex)];
  const wb = phase.weekBlocks[parseInt(blockIndex)];
  const session = wb.sessions[parseInt(sessionIndex)];

  // Find the exercise item
  let item = null;
  for (const group of session.groups) {
    if (group.primary.name === exerciseName) { item = group.primary; break; }
    if (group.superset && group.superset.name === exerciseName) { item = group.superset; break; }
  }
  if (!item) return;

  // Load today's log first, fall back to last entry for weight pre-fill
  const todayStr = todayISO();
  const todayEntry = getEntriesForDate(todayStr)
    .find(e => e.phaseName === phase.name && e.sessionNumber === session.day);
  const lastEntry = getLastEntry(phase.name, session.day);

  let savedWeight = '';
  let savedNotes = '';
  if (todayEntry) {
    const log = todayEntry.exerciseLogs.find(l => l.exerciseName === exerciseName);
    if (log) { savedWeight = log.weight; savedNotes = log.notes; }
  } else if (lastEntry) {
    const log = lastEntry.exerciseLogs.find(l => l.exerciseName === exerciseName);
    if (log) { savedWeight = log.weight; }
  }

  const videoHtml = item.videoFile ? `
    <video controls autoplay playsinline class="ex-detail-video">
      <source src="videos/${encodeURIComponent(item.videoFile)}.mp4" type="video/mp4">
    </video>` : '';

  const programNotesHtml = item.notes
    ? `<div class="ex-detail-program-notes">${escHtml(item.notes)}</div>` : '';

  const existing = document.getElementById('ex-detail-modal');
  if (existing) { existing.querySelector('video')?.pause(); existing.remove(); }

  const safeName = exerciseName.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-overlay" id="ex-detail-modal" onclick="closeExDetailOnOverlay(event)">
      <div class="modal-sheet ex-detail-sheet">
        <div class="modal-header">
          <button class="modal-cancel" onclick="closeExDetail()">Cancel</button>
          <div class="modal-title">${escHtml(item.name)}</div>
          <button class="modal-save" onclick="saveExDetail('${level}','${phaseIndex}','${blockIndex}','${sessionIndex}','${safeName}')">Save</button>
        </div>
        ${videoHtml}
        <div class="ex-detail-body">
          <div class="ex-detail-prescription">${escHtml(item.prescription)}</div>
          ${programNotesHtml}
          <div class="ex-detail-field">
            <label class="ex-detail-label">Weight Used</label>
            <div class="ex-detail-input-row">
              <input id="ex-detail-weight" type="text" inputmode="decimal"
                placeholder="0" value="${escHtml(savedWeight)}" autocomplete="off">
              <span class="ex-detail-unit">lbs</span>
            </div>
          </div>
          <div class="ex-detail-field">
            <label class="ex-detail-label">Notes</label>
            <textarea id="ex-detail-notes" placeholder="Form cues, how it felt, next time goal...">${escHtml(savedNotes)}</textarea>
          </div>
        </div>
      </div>
    </div>
  `);
}

function closeExDetail() {
  const modal = document.getElementById('ex-detail-modal');
  if (modal) { modal.querySelector('video')?.pause(); modal.remove(); }
}

function closeExDetailOnOverlay(event) {
  if (event.target.id === 'ex-detail-modal') closeExDetail();
}

function saveExDetail(level, phaseIndex, blockIndex, sessionIndex, exerciseName) {
  const phases = getPhasesByLevel(level);
  const phase = phases[parseInt(phaseIndex)];
  const wb = phase.weekBlocks[parseInt(blockIndex)];
  const session = wb.sessions[parseInt(sessionIndex)];
  const weight = (document.getElementById('ex-detail-weight').value || '').replace(/[^0-9.]/g, '');
  const notes = document.getElementById('ex-detail-notes').value.trim();
  saveExerciseLog(phase.name, wb.title, session.day, exerciseName, weight, notes, todayISO());
  closeExDetail();
  renderSessionView(level, phaseIndex, blockIndex, sessionIndex);
}

// ─── Video Player ─────────────────────────────────────────────
function openVideo(videoFile, title) {
  const existing = document.getElementById('video-modal');
  if (existing) existing.remove();

  const url = `videos/${encodeURIComponent(videoFile)}.mp4`;
  const html = `
    <div class="modal-overlay" id="video-modal" onclick="closeVideoOnOverlay(event)">
      <div class="video-sheet">
        <div class="modal-header">
          <div style="min-width:52px"></div>
          <div class="modal-title">${escHtml(title)}</div>
          <button class="modal-cancel" onclick="closeVideo()">Done</button>
        </div>
        <video controls autoplay playsinline
          style="width:100%;background:#000;max-height:60vh;">
          <source src="${url}" type="video/mp4">
        </video>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
}

function closeVideo() {
  const modal = document.getElementById('video-modal');
  if (modal) {
    modal.querySelector('video')?.pause();
    modal.remove();
  }
}

function closeVideoOnOverlay(event) {
  if (event.target.id === 'video-modal') closeVideo();
}

// ─── Level Toggle ─────────────────────────────────────────────
function setLevel(level) {
  state.level = level;
  renderPhaseList();
}

// ─── Router ───────────────────────────────────────────────────
function navigate(hash) {
  window.location.hash = hash;
}

function router() {
  const hash = window.location.hash || '#/';
  const path = hash.slice(1); // strip '#'

  // #/calendar
  if (path === '/calendar') {
    renderCalendar();
    return;
  }

  // #/phase/:level/:phaseIndex/block/:blockIndex/session/:sessionIndex
  const sessionMatch = path.match(/^\/phase\/(intermediate|beginner)\/(\d+)\/block\/(\d+)\/session\/(\d+)$/);
  if (sessionMatch) {
    renderSessionView(sessionMatch[1], parseInt(sessionMatch[2]), parseInt(sessionMatch[3]), parseInt(sessionMatch[4]));
    return;
  }

  // #/phase/:level/:phaseIndex
  const phaseMatch = path.match(/^\/phase\/(intermediate|beginner)\/(\d+)$/);
  if (phaseMatch) {
    renderPhaseDetail(phaseMatch[1], parseInt(phaseMatch[2]));
    return;
  }

  // #/ — phase list
  renderPhaseList();
}

// ─── Boot ─────────────────────────────────────────────────────
window.addEventListener('hashchange', () => {
  // Close any open modal
  const modal = document.getElementById('log-modal');
  if (modal) modal.remove();
  router();
});

window.addEventListener('DOMContentLoaded', () => {
  router();
});
