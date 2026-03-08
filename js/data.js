// FootyStrength Program Data
// Translated from Swift ProgramData.swift + BeginnerProgramData.swift

// Helper to create an exercise item
function ex(name, prescription, video = null, notes = null) {
  return { name, prescription, notes, videoFile: video };
}
function single(exercise) {
  return { primary: exercise, superset: null };
}
function superset(primary, secondary) {
  return { primary, superset: secondary };
}

// ─── Shared Cardio Blocks ────────────────────────────────────────────────────
const cardioBase = single(ex(
  "Cardio – Aerobic Base",
  "20 min easy",
  null,
  "Row or bike at conversational pace (65–70% max HR). Rower preferred — full body, lower leg fatigue post-lifting."
));
const cardioSprintsEarly = single(ex(
  "Cardio – Repeat Sprints",
  "10 × 10 sec on / 50 sec easy",
  null,
  "Assault bike. Warm up 3 min easy, each effort all-out, cool down 2 min (~17 min total)."
));
const cardioSprintsLate = single(ex(
  "Cardio – Repeat Sprints",
  "12 × 10 sec on / 40 sec easy",
  null,
  "Assault bike. Warm up 3 min, cool down 2 min (~18 min total). Shortened rest — stay all-out each rep."
));
const cardioSprintsInSeason = single(ex(
  "Cardio – Repeat Sprints",
  "10 × 10 sec on / 50 sec easy",
  null,
  "Assault bike. Warm up 3 min, cool down 2 min. Maintain speed quality alongside game load."
));
const cardioThresholdEarly = single(ex(
  "Cardio – Threshold Intervals",
  "5 × 2 min hard / 1 min active recovery",
  null,
  "SkiErg or rower. The 1 min easy rowing/skiing between efforts is your rest — keep moving, don't stop. Warm up 3 min, cool down 2 min (~20 min total). Hard = 85–90% HR, uncomfortable but sustainable."
));
const cardioThresholdLate = single(ex(
  "Cardio – Threshold Intervals",
  "4 × 4 min hard / 90 sec active recovery",
  null,
  "SkiErg or rower. The 90 sec easy rowing/skiing between efforts is your rest — keep moving, don't stop. Warm up 3 min, cool down 2 min (~25 min total). Hard = 85–90% HR — hold pace for the full interval."
));

// ─── INTERMEDIATE PROGRAM ────────────────────────────────────────────────────

// Phase 1: Base Conditioning 1 / Anatomical Adaption
const intBC1 = {
  id: "int-bc1",
  name: "Base Conditioning 1",
  subtitle: "Anatomical Adaption",
  duration: "6 Weeks · Oct–Nov",
  description: "Foundation of functional movement including stability, balance and broad base of full-body functional strength. Slow, steady tempo. Rest 60–90 sec between sets.",
  color: "#0d9488",
  icon: "🏋️",
  season: "pre",
  weekBlocks: [
    {
      title: "Weekly Template",
      subtitle: "Repeat each week",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Overhead Walking Lunges", "2 × 8 each leg", "Overhead Walking Lunge_1")),
            single(ex("Band Squats", "2 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "2 × 8–10 – slow tempo", "Medicine Ball Squat_1")),
            single(ex("Stationary Jump and Land", "2 × 6–8")),
            single(ex("Small Box Depth Drop", "2 × 4–6", "Box Drop and Hold_1")),
            single(ex("4 Point Horse Stance", "3 × 90 seconds", "4 Point Horse - Arms and Legs_1")),
            single(ex("Hip Extension – Back on Ball – Single Leg", "3 × 8 each side", "Swiss Ball Hip Extension - Single Leg_1")),
            single(ex("Walking Lunges", "3 × 8 each leg", "Walking Lunges_1")),
            single(ex("Front Squat", "3 × 8", "Front Squat_1")),
            single(ex("Bent Row – Dumbbells", "3 × 12", "Dumbbell Row_1")),
            single(ex("Incline Push Up", "3 × 10")),
            cardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("4 Point Horse Stance", "3 × 90 seconds", "4 Point Horse - Arms and Legs_1")),
            single(ex("Swiss Ball Plank / Push Ups – Hands on Ball", "3 × 30–45 seconds", "Swiss Ball Push Up (Hands on Ball)_1")),
            single(ex("Assisted Pull-Ups", "2 sets", "Pull Ups (Band Assisted)_1")),
            single(ex("Overhead Press", "3 × 8–10", "Overhead Press (Dumbbells)_1")),
            single(ex("Inverted Row", "3 × 8–10", "Inverted Row_1")),
            single(ex("Standing Cable Push", "3 × 10–12", "Standing Cable Press_1")),
            single(ex("Woodchop", "3 × 8 each side", "Woodchop_1")),
            single(ex("Reverse Woodchop", "3 × 8 each side", "Reverse Woodchop_1")),
            single(ex("Forward Ball Rolls", "3 × 10–12", "Forward Ball Rolls_1")),
            single(ex("Prone Ball Hip Extension", "3 × 10–12", "Swiss Ball Prone Hip Extension_1")),
            cardioSprintsEarly,
          ]
        },
        {
          day: "Session 3",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Walking Quad Stretch", "10–12 each side", "Walking Quad Stretch_1")),
            single(ex("Band Squats", "2 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "2 × 8–10 – slow tempo", "Medicine Ball Squat_1")),
            single(ex("Stationary Jump and Rotate", "3 × 6–8")),
            single(ex("Single Leg Cable Deadlift + Row", "2 × 8–10 each side", "Cable Deadlift and Row_1_2")),
            single(ex("Step Ups", "3 × 8 each side", "Step Ups_1")),
            single(ex("Deadlift", "3 × 8", "Deadlift_1_1")),
            single(ex("Lateral Step Ups", "3 × 8 each side", "Lateral Step Up_1")),
            single(ex("Swiss Ball Hip Extension & Hamstring Curl", "3 × 8", "Supine Ball Hamstring_1")),
            single(ex("Swiss Ball Plank / Jackknife – Feet on Ball", "3 × 30 seconds", "Swiss Ball Jacknife_1")),
            cardioThresholdEarly,
          ]
        },
      ]
    }
  ]
};

// Phase 2: Base Conditioning 2 / Functional Hypertrophy
const intBC2 = {
  id: "int-bc2",
  name: "Base Conditioning 2",
  subtitle: "Functional Hypertrophy",
  duration: "6–8 Weeks · Dec–Jan",
  description: "Progressing to more advanced movements and introducing supersets. Rest ~60 sec for strength, 90–120 sec for plyometrics. Reduce sets if time poor — don't skip exercises.",
  color: "#3b82f6",
  icon: "🏋️",
  season: "pre",
  weekBlocks: [
    {
      title: "Weekly Template",
      subtitle: "Repeat each week",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Overhead Walking Lunges", "2 × 8 each leg", "Overhead Walking Lunge_1")),
            single(ex("Band Squats", "2 × 8–10", "Band Squat_1")),
            single(ex("Medicine Ball Squat", "2 × 8–10", "Medicine Ball Squat_1")),
            single(ex("Stationary Jump and Land on 1 Leg", "3 × 6–8")),
            single(ex("Small Box Depth Drop", "2 × 6", "Box Drop and Hold_1")),
            single(ex("Hip Extension – Back on Ball – Single Leg", "3 × 8 each side", "Swiss Ball Hip Extension - Single Leg_1")),
            superset(
              ex("Walking Lunges", "3 × 8 each leg", "Walking Lunges_1"),
              ex("Bent Row – Barbell", "3 × 8–10", "Bent Over Row_1")
            ),
            superset(
              ex("Alternating Lunges", "3 × 8 each side", "Alternating Lunge_1"),
              ex("Incline Push Up", "3 × 10")
            ),
            single(ex("Front Squat", "4 × 8", "Front Squat_1")),
            cardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Alternating Supermans", "3 × 90 seconds", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Swiss Ball Plank / Push Ups – Hands on Ball", "3 × 30–45 seconds", "Swiss Ball Push Up (Hands on Ball)_1")),
            single(ex("Assisted Pull-Ups", "3 sets", "Pull Ups (Band Assisted)_1")),
            superset(
              ex("Woodchop", "3 × 10 each side", "Woodchop_1"),
              ex("Overhead Press", "3 × 8–10", "Overhead Press (Dumbbells)_1")
            ),
            superset(
              ex("Reverse Woodchop", "3 × 10 each side", "Reverse Woodchop_1"),
              ex("Swiss Ball Dumbbell Press", "3 × 10", "Swiss Ball Dumbbell Press_1")
            ),
            superset(
              ex("Standing Cable Push", "3 × 10–12", "Standing Cable Press_1"),
              ex("Inverted Row / TRX Row", "3 × 8–10", "Inverted Row_1")
            ),
            single(ex("Forward Ball Rolls", "2 × 10–12", "Forward Ball Rolls_1")),
            single(ex("Prone Ball Hip Extension", "2 × 10–12", "Swiss Ball Prone Hip Extension_1")),
            cardioSprintsEarly,
          ]
        },
        {
          day: "Session 3",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Walking Quad Stretch", "10–12 each side", "Walking Quad Stretch_1")),
            single(ex("Band Squats", "2 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "2 × 8–10 – slow tempo", "Medicine Ball Squat_1")),
            single(ex("Stationary Jump and Rotate – Single Leg", "3 × 6–8")),
            single(ex("Box Jump – Single Leg", "3 × 6", "Single Leg Box Jump_1")),
            single(ex("Single Leg Cable Deadlift + Row", "2 × 8–10 each side", "Cable Deadlift and Row_1_2")),
            single(ex("Step Ups", "3 × 8–10 each side", "Step Ups_1")),
            single(ex("Lateral Step Ups", "3 × 8–10 each side", "Lateral Step Up_1")),
            single(ex("Deadlift", "4 × 8", "Deadlift_1_1")),
            single(ex("Swiss Ball Hip Extension & Hamstring Curl – Single Leg", "3 × 8 each side", "Supine Ball Hamstring_1")),
            single(ex("Swiss Ball Jackknife", "3 × 45 seconds", "Swiss Ball Jacknife_1")),
            cardioThresholdEarly,
          ]
        },
      ]
    }
  ]
};

// Phase 3: Transition to Power / Maximal Strength
const intTP = {
  id: "int-tp",
  name: "Transition to Power",
  subtitle: "Maximal Strength",
  duration: "4–6 Weeks · Feb",
  description: "Reduce reps, increase weight — especially for lunging and squatting exercises. Choose a weight you can only lift 5–6 times. Increase rest to 90+ sec for heavy sets.",
  color: "#f97316",
  icon: "⚡",
  season: "pre",
  weekBlocks: [
    {
      title: "Weekly Template",
      subtitle: "Repeat each week",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Overhead Walking Lunges", "2 × 8 each leg", "Overhead Walking Lunge_1")),
            single(ex("Band Squats", "1 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "1 × 8–10", "Medicine Ball Squat_1")),
            single(ex("Single Leg Forward Hops", "3 × 8 each leg", "Single Leg Forward Hops_1")),
            single(ex("Small Box Depth Drop and Jump", "2 × 6", "Box Drop and Jump_1")),
            single(ex("Hip Extension – Back on Ball – Single Leg", "3 × 8 each side", "Swiss Ball Hip Extension - Single Leg_1")),
            superset(
              ex("Walking Lunges", "3 × 6–8 each leg", "Walking Lunges_1"),
              ex("Bent Row – Barbell", "3 × 8", "Bent Over Row_1")
            ),
            superset(
              ex("Multi-Direction Lunge", "3 × 2 rounds", "Multi-Direction Lunge_1"),
              ex("Incline Push Up", "3 × 8–10", null, "Should be close to full push ups by now")
            ),
            single(ex("Front Squat", "4 × 5–6", "Front Squat_1")),
            cardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Alternating Supermans", "3 × 90 seconds", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Swiss Ball Push Ups", "3 × 30–45 seconds", "Swiss Ball Push Up (Hands on Ball)_1")),
            single(ex("Assisted Pull-Ups", "3 sets", "Pull Ups (Band Assisted)_1", "Continue to decrease assistance")),
            superset(
              ex("Woodchop", "3 × 10 each side", "Woodchop_1"),
              ex("Overhead Press", "3 × 8", "Overhead Press (Barbell)_1")
            ),
            superset(
              ex("Reverse Woodchop", "3 × 10 each side", "Reverse Woodchop_1"),
              ex("Swiss Ball Dumbbell Press", "3 × 10", "Swiss Ball Dumbbell Press_1")
            ),
            single(ex("Bench Press", "3 × 8", "Bench Press_1")),
            superset(
              ex("Standing Cable Push", "3 × 10–12", "Standing Cable Press_1"),
              ex("Inverted Row / TRX Row", "3 × 8–10", "Inverted Row_1")
            ),
            single(ex("Forward Ball Rolls", "2 × 10–12", "Forward Ball Rolls_1")),
            single(ex("Prone Ball Hip Extension", "2 × 10–12", "Swiss Ball Prone Hip Extension_1")),
            cardioSprintsLate,
          ]
        },
        {
          day: "Session 3",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Walking Quad Stretch", "10–12 each side", "Walking Quad Stretch_1")),
            single(ex("Band Squats", "1 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "1 × 8–10", "Medicine Ball Squat_1")),
            single(ex("Lateral Hops – Single Leg", "3 × 8 each side", "Lateral Hops 1_1")),
            single(ex("Box Jump – Single Leg", "3 × 6", "Single Leg Box Jump_1")),
            single(ex("Single Leg Deadlift", "3 × 8–10", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            single(ex("Step Ups", "3 × 8 each side", "Step Ups_1")),
            single(ex("Deadlift", "4 × 6–8", "Deadlift_1_1")),
            single(ex("Lateral Step Ups", "3 × 8 each side", "Lateral Step Up_1")),
            single(ex("Swiss Ball Hip Extension & Hamstring Curl – Single Leg", "3 × 8 each side", "Supine Ball Hamstring_1")),
            single(ex("Swiss Ball Jackknife", "3 × 45 seconds", "Swiss Ball Jacknife_1")),
            cardioThresholdLate,
          ]
        },
      ]
    }
  ]
};

// Phase 4: Specificity / Power
const intSP = {
  id: "int-sp",
  name: "Specificity / Power",
  subtitle: "Pre-Season Final Phase",
  duration: "4 Weeks · Mar",
  description: "Power exercises added on top of strength base. Stop sets as soon as speed drops — quality over exhaustion. Perform explosively on all plyometric exercises.",
  color: "#ef4444",
  icon: "🔥",
  season: "pre",
  weekBlocks: [
    {
      title: "Weekly Template",
      subtitle: "Repeat each week",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Overhead Walking Lunges", "2 × 8 each leg", "Overhead Walking Lunge_1")),
            single(ex("Band Squats", "1 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "1 × 8–10 – slow tempo", "Medicine Ball Squat_1")),
            single(ex("Single Leg Forward Hops", "1 × 8 each leg", "Single Leg Forward Hops_1")),
            single(ex("Small Box Depth Drop and Jump", "2 × 6", "Box Drop and Jump_1")),
            superset(
              ex("Alternating Jump Lunges", "2 × 4–8 each leg", "Split Squat Jump_1"),
              ex("Bent Row – Barbell", "2 × 8", "Bent Over Row_1")
            ),
            superset(
              ex("Walking Lunges", "2 × 8 each leg", "Walking Lunges_1"),
              ex("Bent Row – Barbell", "2 × 8", "Bent Over Row_1")
            ),
            superset(
              ex("Multi-Direction Lunge", "3 × 2 rounds", "Multi-Direction Lunge_1"),
              ex("Plyometric Incline Push Up", "3 × 6–8", "Incline Plyo Push Up_1", "Bring the height back up")
            ),
            superset(
              ex("Front Squat", "4 × 6", "Front Squat_1"),
              ex("Squat Jumps", "4 × 3–5", "Squat Jump (Singles)_1")
            ),
            cardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Alternating Supermans", "3 × 90 seconds", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Swiss Ball Push Ups", "3 × 30–45 seconds", "Swiss Ball Push Up (Hands on Ball)_1")),
            single(ex("Assisted Pull-Ups", "3 sets", "Pull Ups (Band Assisted)_1")),
            superset(
              ex("Woodchop – Explosive", "3 × 10 each side", "Woodchop_1"),
              ex("Overhead Press / Push Press", "3 × 6–8", "Overhead Press (Barbell)_1")
            ),
            superset(
              ex("Reverse Woodchop", "3 × 10 each side", "Reverse Woodchop_1"),
              ex("Swiss Ball Dumbbell Press", "3 × 8", "Swiss Ball Dumbbell Press_1")
            ),
            single(ex("Medicine Ball Power Drop", "3 × 4–6")),
            single(ex("Bench Press", "3 × 6–8", "Bench Press_1")),
            superset(
              ex("Medicine Ball Chest Pass (against wall)", "3 × 6", "Medicine Ball Chest Pass_1"),
              ex("Inverted Row / TRX Row", "3 × 8–10", "Inverted Row_1")
            ),
            cardioSprintsLate,
          ]
        },
        {
          day: "Session 3",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Walking Quad Stretch", "10–12 each side", "Walking Quad Stretch_1")),
            single(ex("Band Squats", "1 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "1 × 8–10", "Medicine Ball Squat_1")),
            single(ex("Lateral Hops – Single Leg", "2 × 8 each side", "Lateral Hops 1_1")),
            single(ex("Box Jump – Single Leg", "2 × 6", "Single Leg Box Jump_1")),
            single(ex("Single Leg Deadlift", "3 × 8", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            superset(
              ex("Step Up Jumps", "2 × 4–6 each leg", "Step Up + Jump_1"),
              ex("Step Ups", "2 × 8 each side", "Step Ups_1")
            ),
            single(ex("Deadlift", "3 × 6–8", "Deadlift_1_1")),
            superset(
              ex("Lateral Step Up Jumps", "2 × 4–6 each side", "Lateral Step Up + Jump_1"),
              ex("Lateral Step Ups", "2 × 8 each side", "Lateral Step Up_1")
            ),
            single(ex("Swiss Ball Hip Extension & Hamstring Curl – Single Leg", "3 × 8 each side", "Supine Ball Hamstring_1")),
            single(ex("Swiss Ball Jackknife", "3 × 45 seconds", "Swiss Ball Jacknife_1")),
            cardioThresholdLate,
          ]
        },
      ]
    }
  ]
};

// Phase 5: In-Season Volume
const intISV = {
  id: "int-isv",
  name: "In-Season: Volume",
  subtitle: "High Rep, Lower Weight",
  duration: "4 Weeks · Repeating",
  description: "Maintain strength gains during season. Higher reps, less weight. Alternate with the Strength block throughout the season.",
  color: "#22c55e",
  icon: "🔄",
  season: "in",
  weekBlocks: [
    {
      title: "Week 1 (& 3)",
      subtitle: "Volume focus",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Pull Ups – Assisted", "3 × 8–10", "Pull Ups (Band Assisted)_1")),
            superset(
              ex("Walking Lunges", "3 × 8–10", "Walking Lunges_1"),
              ex("Swiss Ball Dumbbell Press", "3 × 10", "Swiss Ball Dumbbell Press_1")
            ),
            single(ex("Single Leg Deadlift", "3 × 8–10", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            single(ex("Inverted Row / TRX Row", "3 × 10–12", "Inverted Row_1")),
            superset(
              ex("Front Squat", "3 × 8–10", "Front Squat_1"),
              ex("Woodchop", "3 × 10 each side", "Woodchop_1")
            ),
            cardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Band Squat", "2 × 10", "Band Squat_1")),
            single(ex("Ball Squat", "2 × 10", "Back Squat_1")),
            single(ex("Deadlift", "4 × 8", "Deadlift_1_1")),
            single(ex("Step Ups", "3 × 8–10 each leg", "Step Ups_1")),
            superset(
              ex("Reverse Woodchop", "3 × 10 each side", "Reverse Woodchop_1"),
              ex("Overhead Press", "3 × 10", "Overhead Press (Dumbbells)_1")
            ),
            single(ex("Standing Cable Press", "3 × 10–12", "Standing Cable Press_1")),
            single(ex("Swiss Ball Jackknife", "3 × 45 second rounds", "Swiss Ball Jacknife_1")),
            cardioSprintsInSeason,
          ]
        },
      ]
    },
    {
      title: "Week 2 (& 4)",
      subtitle: "Volume focus",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Pull Ups – Eccentric", "3 × 12–15", "Pull Ups (eccentric)_1")),
            superset(
              ex("Multi-Directional Lunges", "3 × 2 rounds", "Multi-Direction Lunge_1"),
              ex("Bench Press", "3 × 8–10", "Bench Press_1")
            ),
            single(ex("Single Leg Deadlift", "3 × 8–10", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            superset(
              ex("Front Squat", "3 × 8–10", "Front Squat_1"),
              ex("Inverted Row", "3 × 10", "Inverted Row_1")
            ),
            single(ex("Woodchop", "3 × 10 each side", "Woodchop_1")),
            cardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Deadlift", "4 × 8", "Deadlift_1_1")),
            superset(
              ex("Lateral Step Ups", "3 × 10 each leg", "Lateral Step Up_1"),
              ex("Overhead Press", "3 × 8–10", "Overhead Press (Dumbbells)_1")
            ),
            superset(
              ex("Push Ups / Incline Push Up", "3 × 10–12"),
              ex("Standing Cable Press", "3 × 10–12", "Standing Cable Press_1")
            ),
            single(ex("Reverse Woodchop", "3 × 10", "Reverse Woodchop_1")),
            superset(
              ex("Forward Ball Rolls", "2 × 10–12", "Forward Ball Rolls_1"),
              ex("Prone Ball Hip Extensions", "2 × 10–12", "Swiss Ball Prone Hip Extension_1")
            ),
            cardioSprintsInSeason,
          ]
        },
      ]
    },
  ]
};

// Phase 6: In-Season Strength
const intISS = {
  id: "int-iss",
  name: "In-Season: Strength",
  subtitle: "Lower Rep, Higher Weight",
  duration: "4 Weeks · Repeating",
  description: "Maintain strength with heavier loads and power movements. Contains plyometric work. Not as heavy as pre-season — fatigue from the season is a factor.",
  color: "#a855f7",
  icon: "⚡",
  season: "in",
  weekBlocks: [
    {
      title: "Week 1 (& 3)",
      subtitle: "Strength focus",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Pull Ups – Assisted", "3 × 8", "Pull Ups (Band Assisted)_1")),
            superset(
              ex("Alternating Jump Lunges", "3 × 4–5 each side", "Split Squat Jump_1"),
              ex("Walking Lunges", "3 × 5–6 each leg", "Walking Lunges_1")
            ),
            single(ex("Single Leg Deadlift", "3 × 8 each leg", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            superset(
              ex("Medicine Ball Power Drop or Wall Pass", "3 × 4–8", "Medicine Ball Chest Pass_1"),
              ex("Bench Press", "3 × 5–6", "Bench Press_1")
            ),
            single(ex("Squat Jump", "3 × 4–6", "Squat Jump (Singles)_1")),
            single(ex("Front Squat", "3 × 5–6", "Front Squat_1")),
            cardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Band Squat", "1 × 10", "Band Squat_1")),
            single(ex("Ball Squat", "1 × 10", "Back Squat_1")),
            single(ex("Deadlift", "4 × 5", "Deadlift_1_1")),
            single(ex("Step Up Jumps", "3 × 4–5 each leg", "Step Up + Jump_1")),
            superset(
              ex("Woodchops – Explosive", "3 × 8–10 each side", "Woodchop_1"),
              ex("Inverted Row / TRX Row", "3 × 10", "Inverted Row_1")
            ),
            superset(
              ex("Step Ups", "3 × 5–6 each leg", "Step Ups_1"),
              ex("Reverse Woodchop", "3 × 8–10 each side", "Reverse Woodchop_1")
            ),
            single(ex("Overhead Press / Push Press", "3 × 6–8", "Overhead Press (Barbell)_1")),
            cardioSprintsInSeason,
          ]
        },
      ]
    },
    {
      title: "Week 2 (& 4)",
      subtitle: "Strength focus",
      sessions: [
        {
          day: "Session 1",
          groups: [
            superset(
              ex("Alternating Jump Lunges", "3 × 4–5 each side", "Split Squat Jump_1"),
              ex("Multi-Directional Lunges", "3 × 2 rounds", "Multi-Direction Lunge_1")
            ),
            single(ex("Single Leg Deadlift", "3 × 8 each leg", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            superset(
              ex("Medicine Ball Power Drop or Wall Pass", "3 × 4–8", "Medicine Ball Chest Pass_1"),
              ex("Bench Press", "3 × 5–6", "Bench Press_1")
            ),
            single(ex("Squat Jump", "3 × 4–6", "Squat Jump (Singles)_1")),
            single(ex("Front Squat", "3 × 5–6", "Front Squat_1")),
            superset(
              ex("Woodchops – Explosive", "3 × 8–10 each side", "Woodchop_1"),
              ex("Inverted Row / TRX Row", "3 × 10", "Inverted Row_1")
            ),
            cardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Band Squat", "1 × 10", "Band Squat_1")),
            single(ex("Ball Squat", "1 × 10", "Back Squat_1")),
            single(ex("Lateral Step Up Jumps", "3 × 4–5 each side", "Lateral Step Up + Jump_1")),
            single(ex("Deadlift", "4 × 5", "Deadlift_1_1")),
            superset(
              ex("Lateral Step Ups", "3 × 5–6 each leg", "Lateral Step Up_1"),
              ex("Overhead Press", "3 × 6–8", "Overhead Press (Barbell)_1")
            ),
            superset(
              ex("Plyometric Push Ups / Incline Push Up", "3 × 5–6", "Incline Plyo Push Up_1"),
              ex("Reverse Woodchop", "3 × 10", "Reverse Woodchop_1")
            ),
            superset(
              ex("Forward Ball Rolls", "2 × 10–12", "Forward Ball Rolls_1"),
              ex("Prone Ball Hip Extensions", "2 × 10–12", "Swiss Ball Prone Hip Extension_1")
            ),
            cardioSprintsInSeason,
          ]
        },
      ]
    },
  ]
};

// ─── BEGINNER PROGRAM ─────────────────────────────────────────────────────────

// Beginner Cardio Blocks
const bgnCardioBase = single(ex(
  "Cardio – Aerobic Base",
  "20 min easy",
  null,
  "Row or bike at conversational pace (65–70% max HR). Rower preferred — full body, lower leg fatigue post-lifting."
));
const bgnCardioSprintsEarly = single(ex(
  "Cardio – Repeat Sprints",
  "10 × 10 sec on / 50 sec easy",
  null,
  "Assault bike. Warm up 3 min easy, each effort all-out, cool down 2 min (~17 min total)."
));
const bgnCardioSprintsLate = single(ex(
  "Cardio – Repeat Sprints",
  "12 × 10 sec on / 40 sec easy",
  null,
  "Assault bike. Warm up 3 min, cool down 2 min (~18 min total). Shortened rest — stay all-out each rep."
));
const bgnCardioSprintsInSeason = single(ex(
  "Cardio – Repeat Sprints",
  "10 × 10 sec on / 50 sec easy",
  null,
  "Assault bike. Warm up 3 min, cool down 2 min. Maintain speed quality alongside game load."
));
const bgnCardioThresholdEarly = single(ex(
  "Cardio – Threshold Intervals",
  "5 × 2 min hard / 1 min active recovery",
  null,
  "SkiErg or rower. The 1 min easy rowing/skiing between efforts is your rest — keep moving, don't stop. Warm up 3 min, cool down 2 min (~20 min total). Hard = 85–90% HR, uncomfortable but sustainable."
));
const bgnCardioThresholdLate = single(ex(
  "Cardio – Threshold Intervals",
  "4 × 4 min hard / 90 sec active recovery",
  null,
  "SkiErg or rower. The 90 sec easy rowing/skiing between efforts is your rest — keep moving, don't stop. Warm up 3 min, cool down 2 min (~25 min total). Hard = 85–90% HR — hold pace for the full interval."
));

// Beginner Phase 1: Base Conditioning 1
const bgnBC1 = {
  id: "bgn-bc1",
  name: "Base Conditioning 1",
  subtitle: "Anatomical Adaption",
  duration: "6 Weeks · Oct–Nov",
  description: "Building a base of stability and well-rounded full-body functional strength. Use weights where you feel you could do ~1.5x the reps. Slow, steady tempo. Rest 60–90 sec between sets.",
  color: "#0d9488",
  icon: "🏋️",
  season: "pre",
  weekBlocks: [
    {
      title: "Weekly Template",
      subtitle: "Repeat each week",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Band Squats", "3 × 8–10", "Band Squat_1")),
            single(ex("Medicine Ball Squat", "3 × 8–10 – slow tempo", "Medicine Ball Squat_1")),
            single(ex("Low Box Jump – Landing Mechanics Focus", "2 × 6–8", "Box Drop and Hold_1", "Focus on landing mechanics, not the jump")),
            single(ex("4 Point Horse Stance", "3 × 90 seconds", "4 Point Horse - Arms and Legs_1")),
            single(ex("Hip Extension – Back on Ball", "3 × 10", "Supine Ball Hamstring_1")),
            single(ex("Split Squat", "3 × 8 each leg", "Split Squat_1")),
            single(ex("Bent Row – Dumbbells", "3 × 12", "Dumbbell Row_1")),
            single(ex("Incline Push Up", "3 × 10")),
            single(ex("Forward Ball Rolls", "3 × 10–12", "Forward Ball Rolls_1")),
            single(ex("Prone Ball Hip Extension", "3 × 10–12", "Swiss Ball Prone Hip Extension_1")),
            bgnCardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("4 Point Horse Stance", "3 × 90 seconds", "4 Point Horse - Arms and Legs_1")),
            single(ex("Mountain Climber", "2 × 10–12 each leg", "Mountain Climber_1")),
            single(ex("Assisted Pull-Ups", "2 sets", "Pull Ups (Band Assisted)_1")),
            single(ex("Seated Overhead Press on Swiss Ball", "3 × 8–10", "Overhead Press (Dumbbells)_1")),
            single(ex("Inverted Row", "3 × 8–10", "Inverted Row_1")),
            single(ex("Standing Cable Push", "3 × 10–12", "Standing Cable Press_1")),
            single(ex("Woodchop", "3 × 8 each side", "Woodchop_1")),
            single(ex("Reverse Woodchop", "3 × 8 each side", "Reverse Woodchop_1")),
            single(ex("Swiss Ball Plank Hold – Hands on Ball", "3 × 30–45 seconds", "Swiss Ball Push Up (Hands on Ball)_1")),
            single(ex("Alternating Supermans on Swiss Ball", "3 × 8–10 each side", "Alternating Supermans (Swiss Ball)_1")),
            bgnCardioSprintsEarly,
          ]
        },
        {
          day: "Session 3",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Walking Quad Stretch", "10–12 each side", "Walking Quad Stretch_1")),
            single(ex("Band Squats", "3 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "3 × 8–10 – slow tempo", "Medicine Ball Squat_1")),
            single(ex("Stationary Jump and Land", "2 × 6–8")),
            single(ex("Step Ups", "3 × 8 each side", "Step Ups_1")),
            single(ex("Lateral Step Ups", "3 × 8 each side", "Lateral Step Up_1")),
            single(ex("Single Leg Cable Deadlift + Row", "3 × 8–10 each side", "Cable Deadlift and Row_1_2")),
            single(ex("Swiss Ball Hip Extension – Feet on Ball", "3 × 8", "Supine Ball Hamstring_1")),
            single(ex("Swiss Ball Plank – Feet on Ball", "3 × 30 seconds", "Swiss Ball Jacknife_1")),
            bgnCardioThresholdEarly,
          ]
        },
      ]
    }
  ]
};

// Beginner Phase 2: Base Conditioning 2
const bgnBC2 = {
  id: "bgn-bc2",
  name: "Base Conditioning 2",
  subtitle: "Functional Hypertrophy",
  duration: "6–8 Weeks · Dec–Jan",
  description: "Continue progressing weight while maintaining form. Rest ~60 sec for strength, 90–120 sec for plyometrics. Reduce sets if time poor — don't skip exercises.",
  color: "#3b82f6",
  icon: "🏋️",
  season: "pre",
  weekBlocks: [
    {
      title: "Weekly Template",
      subtitle: "Repeat each week",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Walking Lunges", "8–10 each leg", "Walking Lunges_1")),
            single(ex("Leg Swings", "10–12 each leg", "Leg Swings_1")),
            single(ex("Hamstring Bend + Walk", "8 each side", "Hamstring Walks_1")),
            single(ex("Band Squats", "2 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "2 × 8–10 – slow tempo", "Medicine Ball Squat_1")),
            single(ex("Box Drop – Double Leg", "2 × 4–6", "Box Drop and Hold_1")),
            single(ex("Alternating Supermans", "2 × 8–10 each side", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Hip Extension – Single Leg", "3 × 8 each side", "Swiss Ball Hip Extension - Single Leg_1")),
            single(ex("Walking Lunge", "3 × 8 each leg", "Walking Lunges_1")),
            single(ex("Front Squat", "3 × 8 light", "Front Squat_1")),
            single(ex("Bent Row – Dumbbells", "3 × 12", "Dumbbell Row_1")),
            single(ex("Incline Push Up (Progressing the Depth)", "3 × 10")),
            single(ex("Forward Ball Rolls", "2 × 10–12", "Forward Ball Rolls_1")),
            single(ex("Prone Ball Hip Extension", "2 × 10–12", "Swiss Ball Prone Hip Extension_1")),
            bgnCardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Alternating Supermans", "3 × 8–10 each side", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Assisted Pull-Ups", "3 × 8", "Pull Ups (Band Assisted)_1")),
            single(ex("Overhead Press Standing", "3 × 8–10", "Overhead Press (Dumbbells)_1")),
            single(ex("Inverted Row", "3 × 8–10", "Inverted Row_1")),
            single(ex("Standing Cable Push", "3 × 10–12", "Standing Cable Press_1")),
            single(ex("Woodchop", "3 × 8 each side", "Woodchop_1")),
            single(ex("Reverse Woodchop", "3 × 8 each side", "Reverse Woodchop_1")),
            single(ex("Swiss Ball Jackknife", "3 × 8–10", "Swiss Ball Jacknife_1")),
            bgnCardioSprintsEarly,
          ]
        },
        {
          day: "Session 3",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Walking Quad Stretch", "10–12 each side", "Walking Quad Stretch_1")),
            single(ex("Band Squats", "2 × 10", "Band Squat_1")),
            single(ex("Ball Squat", "2 × 10 – slow tempo", "Back Squat_1")),
            single(ex("Low Box Jump – Single Leg", "2 × 4–6 each leg", "Single Leg Box Jump_1")),
            single(ex("Stationary Jump and Land – Rotate 90°", "3 × 6–8")),
            single(ex("Step Ups", "3 × 8 each side", "Step Ups_1")),
            single(ex("Lateral Step Ups", "3 × 8 each side", "Lateral Step Up_1")),
            single(ex("Single Leg Cable Deadlift + Row", "3 × 8–10 each side", "Cable Deadlift and Row_1_2")),
            single(ex("Swiss Ball Hip Extension & Hamstring Curl", "3 × 8 each side", "Supine Ball Hamstring_1")),
            single(ex("Swiss Ball Jackknife", "3 × 8–10", "Swiss Ball Jacknife_1")),
            bgnCardioThresholdEarly,
          ]
        },
      ]
    }
  ]
};

// Beginner Phase 3: Transition to Power
const bgnTP = {
  id: "bgn-tp",
  name: "Transition to Power",
  subtitle: "Maximal Strength",
  duration: "4–6 Weeks · Feb",
  description: "Introducing supersets to save time and add cardio challenge. Sets and reps remain in the 8–12 range. Focus is on progressing exercise difficulty, not maximum weight.",
  color: "#f97316",
  icon: "⚡",
  season: "pre",
  weekBlocks: [
    {
      title: "Weekly Template",
      subtitle: "Repeat each week",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Walking Lunges", "8–10 each leg", "Walking Lunges_1")),
            single(ex("Leg Swings", "10–12 each leg", "Leg Swings_1")),
            single(ex("Hamstring Bend + Walk", "8 each side", "Hamstring Walks_1")),
            single(ex("Band Squats", "1 × 8–10", "Band Squat_1")),
            single(ex("Medicine Ball Squat", "1 × 8–10", "Medicine Ball Squat_1")),
            single(ex("Supine Lateral Ball Roll", "2 × 4–5 each way", "Supine Lateral Ball Roll_1")),
            single(ex("Alternating Supermans", "2 × 8–10 each side", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Box Drop – Double Leg", "3 × 4–6", "Box Drop and Hold_1")),
            superset(
              ex("Hip Extension – Single Leg", "3 × 8 each side", "Swiss Ball Hip Extension - Single Leg_1"),
              ex("Bent Row – Barbell", "3 × 8 – heavier weight", "Bent Over Row_1")
            ),
            superset(
              ex("Alternating Lunge", "3 × 8 each leg", "Alternating Lunge_1"),
              ex("Incline Push Up", "3 × 10")
            ),
            single(ex("Front Squat", "4 × 6–8", "Front Squat_1")),
            single(ex("Forward Ball Rolls", "2 × 10–12", "Forward Ball Rolls_1")),
            single(ex("Prone Ball Hip Extension", "2 × 10–12", "Swiss Ball Prone Hip Extension_1")),
            bgnCardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Alternating Supermans", "3 × 8–10 each side", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Assisted Pull-Ups", "4 × 8", "Pull Ups (Band Assisted)_1")),
            superset(
              ex("Woodchop", "3 × 8–10 each side", "Woodchop_1"),
              ex("Overhead Press Standing", "3 × 8", "Overhead Press (Dumbbells)_1")
            ),
            superset(
              ex("Reverse Woodchop", "3 × 8–10 each side", "Reverse Woodchop_1"),
              ex("Inverted Row", "3 × 8–10", "Inverted Row_1")
            ),
            single(ex("Standing Cable Push", "3 × 10–12", "Standing Cable Press_1")),
            single(ex("Swiss Ball Jackknife", "3 × 10–12", "Swiss Ball Jacknife_1")),
            bgnCardioSprintsLate,
          ]
        },
        {
          day: "Session 3",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Walking Quad Stretch", "10–12 each side", "Walking Quad Stretch_1")),
            single(ex("Band Squats", "2 × 10", "Band Squat_1")),
            single(ex("Ball Squat", "2 × 10 – slow tempo", "Back Squat_1")),
            single(ex("Low Box Jump – Single Leg", "2 × 6 each leg", "Single Leg Box Jump_1")),
            single(ex("Stationary Jump and Land – Rotate 90°", "3 × 8")),
            single(ex("Step Ups", "3 × 8 each side", "Step Ups_1")),
            single(ex("Single Leg Cable Deadlift + Row", "2 × 8 each side", "Cable Deadlift and Row_1_2")),
            single(ex("Lateral Step Ups", "3 × 8 each side", "Lateral Step Up_1")),
            single(ex("Single Leg Deadlift", "3 × 8 each side", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            single(ex("Swiss Ball Hip Extension & Hamstring Curl", "3 × 8", "Supine Ball Hamstring_1")),
            single(ex("Swiss Ball Jackknife", "3 × 10–12", "Swiss Ball Jacknife_1")),
            bgnCardioThresholdLate,
          ]
        },
      ]
    }
  ]
};

// Beginner Phase 4: Specificity / Power
const bgnSP = {
  id: "bgn-sp",
  name: "Specificity / Power",
  subtitle: "Pre-Season Final Phase",
  duration: "4 Weeks · Mar",
  description: "Reduce weight on squats/step ups/woodchops and focus on speed of movement. Maintain control and form throughout. No high-impact plyometrics yet.",
  color: "#ef4444",
  icon: "🔥",
  season: "pre",
  weekBlocks: [
    {
      title: "Weekly Template",
      subtitle: "Repeat each week",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Walking Lunges", "8–10 each leg", "Walking Lunges_1")),
            single(ex("Leg Swings", "10–12 each side", "Leg Swings_1")),
            single(ex("Hamstring Bend + Walk", "8 each side", "Hamstring Walks_1")),
            single(ex("Band Squats", "1 × 8–10", "Band Squat_1")),
            single(ex("Med Ball Squat", "1 × 8–10", "Medicine Ball Squat_1")),
            single(ex("Supine Lateral Ball Roll", "2 × 5–6 each side", "Supine Lateral Ball Roll_1")),
            single(ex("Alternating Supermans", "2 × 8–10 each side", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Box Drop – Double Leg", "3 × 4–6", "Box Drop and Hold_1")),
            superset(
              ex("Hip Extension – Single Leg", "3 × 8 each side", "Swiss Ball Hip Extension - Single Leg_1"),
              ex("Bent Row – Barbell", "3 × 8 – heavier", "Bent Over Row_1")
            ),
            superset(
              ex("Multi-Direction Lunge", "3 × 2 rounds", "Multi-Direction Lunge_1"),
              ex("Incline Push Up", "3 × 10")
            ),
            single(ex("Front Squat", "4 × 6–8", "Front Squat_1")),
            single(ex("Forward Ball Rolls", "2 × 10–12", "Forward Ball Rolls_1")),
            single(ex("Prone Ball Hip Extension", "2 × 10–12", "Swiss Ball Prone Hip Extension_1")),
            bgnCardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Alternating Supermans", "3 × 8–10 each side", "Alternating Supermans (Swiss Ball)_1")),
            single(ex("Assisted Pull-Ups", "4 × 8", "Pull Ups (Band Assisted)_1")),
            single(ex("Overhead Press Standing", "3 × 8", "Overhead Press (Dumbbells)_1")),
            superset(
              ex("Woodchop", "3 × 8–10 each side", "Woodchop_1"),
              ex("Inverted Row", "3 × 8–10", "Inverted Row_1")
            ),
            superset(
              ex("Reverse Woodchop", "3 × 8–10 each side", "Reverse Woodchop_1"),
              ex("Swiss Ball Dumbbell Press", "3 × 10", "Swiss Ball Dumbbell Press_1")
            ),
            single(ex("Standing Cable Push", "3 × 10–12", "Standing Cable Press_1")),
            single(ex("Swiss Ball Jackknife", "3 × 10–12", "Swiss Ball Jacknife_1")),
            bgnCardioSprintsLate,
          ]
        },
        {
          day: "Session 3",
          groups: [
            single(ex("Hip Flexor Stretch – Stationary", "3 × 30 sec each side")),
            single(ex("Hamstring Bend + Walk", "2 × 8 each side", "Hamstring Walks_1")),
            single(ex("Walking Quad Stretch", "10–12 each side", "Walking Quad Stretch_1")),
            single(ex("Band Squats", "1 × 10", "Band Squat_1")),
            single(ex("Ball Squat", "1 × 10", "Back Squat_1")),
            single(ex("Stationary Jump and Land on Single Leg", "3 × 4–6 each leg")),
            single(ex("Stationary Jump and Land – Rotate 90°", "3 × 8")),
            single(ex("Step Ups", "3 × 8 each side", "Step Ups_1")),
            single(ex("Single Leg Cable Deadlift + Row", "2 × 8 each side", "Cable Deadlift and Row_1_2")),
            single(ex("Lateral Step Ups", "3 × 8 each side", "Lateral Step Up_1")),
            single(ex("Single Leg Deadlift", "3 × 8 each side", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            single(ex("Swiss Ball Hip Extension & Hamstring Curl – Single Leg", "3 × 8 each side", "Supine Ball Hamstring_1")),
            single(ex("Swiss Ball Jackknife", "3 × 10–12", "Swiss Ball Jacknife_1")),
            bgnCardioThresholdLate,
          ]
        },
      ]
    }
  ]
};

// Beginner Phase 5: In-Season Maintenance
const bgnIS = {
  id: "bgn-is",
  name: "In-Season: Maintenance",
  subtitle: "Rotating Blocks",
  duration: "5–6 Months · Apr–Sep",
  description: "Maintain pre-season gains with 2 sessions per week. Rotate Block 1 and Block 2 throughout the season. Take every 4th week completely off strength training.",
  color: "#22c55e",
  icon: "🔄",
  season: "in",
  weekBlocks: [
    {
      title: "Block 1",
      subtitle: "Alternate with Block 2 each month",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Band Squats", "1 × 10", "Band Squat_1")),
            single(ex("Ball Squats", "1 × 10", "Back Squat_1")),
            single(ex("Multi-Direction Lunge", "2 × 2 rounds", "Multi-Direction Lunge_1")),
            single(ex("Front Squat", "2 × 8–10", "Front Squat_1")),
            single(ex("Assisted Pull Ups", "2 × 8", "Pull Ups (Band Assisted)_1")),
            single(ex("Overhead Press", "2 × 10", "Overhead Press (Dumbbells)_1")),
            single(ex("Woodchops", "2 × 10 each side", "Woodchop_1")),
            superset(
              ex("Swiss Ball Rolls", "2 × 10", "Forward Ball Rolls_1"),
              ex("Prone Ball Hip Extensions", "2 × 10", "Swiss Ball Prone Hip Extension_1")
            ),
            bgnCardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Band Squats", "1 × 10", "Band Squat_1")),
            single(ex("Ball Squats", "1 × 10", "Back Squat_1")),
            single(ex("Step Ups", "2 × 8 each side", "Step Ups_1")),
            single(ex("Single Leg Deadlifts", "2 × 8 each side", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            single(ex("Swiss Ball Dumbbell Press", "2 × 10", "Swiss Ball Dumbbell Press_1")),
            single(ex("Inverted Row", "2 × 10", "Inverted Row_1")),
            single(ex("Standing Cable Press", "2 × 10–12", "Standing Cable Press_1")),
            single(ex("Reverse Woodchops", "2 × 10 each side", "Reverse Woodchop_1")),
            single(ex("Jackknives", "2 × 10–12", "Swiss Ball Jacknife_1")),
            bgnCardioSprintsInSeason,
          ]
        },
      ]
    },
    {
      title: "Block 2",
      subtitle: "Alternate with Block 1 each month",
      sessions: [
        {
          day: "Session 1",
          groups: [
            single(ex("Band Squats", "1 × 10", "Band Squat_1")),
            single(ex("Ball Squats", "1 × 10", "Back Squat_1")),
            single(ex("Walking Lunge", "2 × 8 each side", "Walking Lunges_1")),
            single(ex("Front Squat", "2 × 8", "Front Squat_1")),
            single(ex("Eccentric Pull Ups", "2 × 8", "Pull Ups (eccentric)_1")),
            single(ex("Overhead Press", "2 × 10", "Overhead Press (Dumbbells)_1")),
            single(ex("Squat Twist", "2 × 8 each side", "Squat Twist_1")),
            bgnCardioBase,
          ]
        },
        {
          day: "Session 2",
          groups: [
            single(ex("Lateral Step Ups", "2 × 8 each side", "Lateral Step Up_1")),
            single(ex("Single Leg Deadlifts", "2 × 8 each leg", "Single Leg Deadlift - 1 Dumbbell_1_1")),
            single(ex("Swiss Ball Dumbbell Press", "2 × 10", "Swiss Ball Dumbbell Press_1")),
            single(ex("Inverted Row", "2 × 10", "Inverted Row_1")),
            single(ex("Standing Cable Press", "2 × 12", "Standing Cable Press_1")),
            single(ex("Even Woodchops", "2 × 10 each side", "Woodchop_1")),
            single(ex("Jackknives", "2 × 10–12", "Swiss Ball Jacknife_1")),
            bgnCardioSprintsInSeason,
          ]
        },
      ]
    },
  ]
};

// ─── Master Program Data ──────────────────────────────────────────────────────
const PROGRAM_DATA = {
  intermediate: [intBC1, intBC2, intTP, intSP, intISV, intISS],
  beginner:     [bgnBC1, bgnBC2, bgnTP, bgnSP, bgnIS],
};
