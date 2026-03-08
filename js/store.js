// FootyStrength Store — localStorage workout logging

const STORAGE_KEY = 'footystrength_entries';

function getEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveAllEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

/**
 * Upsert an entry by date (YYYY-MM-DD) + phaseName + sessionNumber.
 * If a matching entry exists, it is replaced; otherwise appended.
 * entry: { id, date, phaseName, weekBlockTitle, sessionNumber, exerciseLogs, generalNotes }
 */
function saveEntry(entry) {
  const entries = getEntries();
  // Normalise date to YYYY-MM-DD string so comparisons are reliable
  const dateStr = entry.date.slice(0, 10);
  const idx = entries.findIndex(
    e => e.date.slice(0, 10) === dateStr &&
         e.phaseName === entry.phaseName &&
         e.sessionNumber === entry.sessionNumber
  );
  if (idx >= 0) {
    entries[idx] = { ...entry, date: dateStr };
  } else {
    entries.push({ ...entry, id: entry.id || crypto.randomUUID(), date: dateStr });
  }
  saveAllEntries(entries);
}

/**
 * Delete an entry by id.
 */
function deleteEntry(id) {
  const entries = getEntries().filter(e => e.id !== id);
  saveAllEntries(entries);
}

/**
 * Get the most recent entry for a given phase + session — used to pre-fill weights.
 */
function getLastEntry(phaseName, sessionNumber) {
  const entries = getEntries()
    .filter(e => e.phaseName === phaseName && e.sessionNumber === sessionNumber)
    .sort((a, b) => b.date.localeCompare(a.date));
  return entries[0] || null;
}

/**
 * Get all entries for a calendar month. month is 0-indexed (JS Date).
 */
function getEntriesForMonth(year, month) {
  return getEntries().filter(e => {
    const d = new Date(e.date + 'T00:00:00');
    return d.getFullYear() === year && d.getMonth() === month;
  });
}

/**
 * Get all entries for a specific date (YYYY-MM-DD).
 */
function getEntriesForDate(dateStr) {
  return getEntries().filter(e => e.date.slice(0, 10) === dateStr);
}

/**
 * Save a single exercise log within today's entry for a given phase+session.
 * Creates the entry if it doesn't exist yet.
 */
function saveExerciseLog(phaseName, weekBlockTitle, sessionNumber, exerciseName, weight, notes, dateStr) {
  const entries = getEntries();
  let entry = entries.find(e =>
    e.date.slice(0, 10) === dateStr &&
    e.phaseName === phaseName &&
    e.sessionNumber === sessionNumber
  );
  if (!entry) {
    entry = {
      id: crypto.randomUUID(),
      date: dateStr,
      phaseName,
      weekBlockTitle,
      sessionNumber,
      exerciseLogs: [],
      generalNotes: '',
    };
    entries.push(entry);
  }
  const logIdx = entry.exerciseLogs.findIndex(l => l.exerciseName === exerciseName);
  if (logIdx >= 0) {
    entry.exerciseLogs[logIdx] = { exerciseName, weight, notes };
  } else {
    entry.exerciseLogs.push({ exerciseName, weight, notes });
  }
  saveAllEntries(entries);
}
