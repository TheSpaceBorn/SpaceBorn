/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║           SPACE BORN — KINGDOM DATA CONFIG              ║
 * ║                                                          ║
 * ║  Edit this file to update the website content.          ║
 * ║  No HTML knowledge needed — just fill in the values.    ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * HOW TO EDIT:
 *  - Replace "TBD" with the real value
 *  - For names/tags: just type the text between the quotes
 *  - To mark something as empty: leave it as "TBD"
 *  - For prices: write the full string e.g. "500k gems / 100M"
 *  - Save the file and refresh the browser
 */

const SPACEBORN = {

  /* ─────────────────────────────────────────────
     KINGDOM INFO
  ───────────────────────────────────────────── */
  kingdom: {
    serverNumber: "TBD",          // e.g. "3456"
    launchDate:   "TBD",          // e.g. "July 15, 2025"
    serverType:   "Restart",
    discordLink:  "https://discord.gg/y5XYSS6pvF",
  },

  /* ─────────────────────────────────────────────
     LEADERSHIP
     Fill in names as positions are confirmed.
     Leave as "TBD" if not yet assigned.
  ───────────────────────────────────────────── */
  highCouncil: [
    { role: "King / Queen",       name: "TBD", status: "open" },
    { role: "Co-Leader",          name: "TBD", status: "open" },
    { role: "Project Head",       name: "TBD", status: "open" },
    { role: "Council Member",     name: "TBD", status: "open" },
  ],

  lowCouncil: [
    { role: "War Marshal",        name: "TBD", dept: "War",        status: "open" },
    { role: "Head Diplomat",      name: "TBD", dept: "Diplomacy",  status: "open" },
    { role: "Recruitment Lead",   name: "TBD", dept: "Recruitment",status: "open" },
    { role: "Intel Officer",      name: "TBD", dept: "Intel",      status: "open" },
    { role: "Rally Commander",    name: "TBD", dept: "War",        status: "open" },
    { role: "Field Commander",    name: "TBD", dept: "War",        status: "open" },
    { role: "Defense Commander",  name: "TBD", dept: "Defense",    status: "open" },
    { role: "Resource Officer",   name: "TBD", dept: "Resources",  status: "open" },
    { role: "Community Lead",     name: "TBD", dept: "Community",  status: "open" },
  ],

  /* ─────────────────────────────────────────────
     ALLIANCES
     type: "main" or "support"
     tags: array of feature labels shown as pills
  ───────────────────────────────────────────── */
  alliances: [
    {
      type:        "main",
      tag:         "TBD",           // Alliance tag e.g. "SBORN"
      name:        "Main Alliance 1 — Flagship",
      desc:        "The premier war guild. Highest-power players, elite rally commanders, and direct coordination with the War Council. This is the kingdom's spearhead.",
      r5:          "TBD",
      minPower:    "TBD",
      kvk:         "Mandatory",
      features:    ["War", "Rally", "High Power"],
    },
    {
      type:        "main",
      tag:         "TBD",
      name:        "Main Alliance 2 — Core Force",
      desc:        "The second core war alliance. Acts as coordinated support during KvK — rallies, reinforcements, and field operations.",
      r5:          "TBD",
      minPower:    "TBD",
      kvk:         "Mandatory",
      features:    ["War", "Field Ops", "Reinforcement"],
    },
    {
      type:        "main",
      tag:         "TBD",
      name:        "Main Alliance 3 — Elite Force",
      desc:        "The third elite main alliance. Handles specialized KvK roles — objectives, flanking operations, and target elimination.",
      r5:          "TBD",
      minPower:    "TBD",
      kvk:         "Mandatory",
      features:    ["War", "Objectives", "Flanking"],
    },
    {
      type:        "support",
      tag:         "TBD",
      name:        "Support Alliance 1 — Academy",
      desc:        "For players in their growth phase. Mentorship, build guidance, and a structured path to moving up to a main alliance when ready.",
      r5:          "TBD",
      minPower:    "TBD",
      kvk:         "Optional",
      features:    ["Growth", "Mentorship", "Development"],
    },
    {
      type:        "support",
      tag:         "TBD",
      name:        "Support Alliance 2 — Resource",
      desc:        "The kingdom's resource engine. Focused on rune support, resource generation, and keeping the main alliances supplied.",
      r5:          "TBD",
      minPower:    "TBD",
      kvk:         "Support Role",
      features:    ["Resources", "Rune Support", "Economy"],
    },
    {
      type:        "support",
      tag:         "TBD",
      name:        "Support Alliance 3 — Auxiliary",
      desc:        "Auxiliary operations — rally pass support, kingdom event participation, and overflow for active players building toward main requirements.",
      r5:          "TBD",
      minPower:    "TBD",
      kvk:         "Support Role",
      features:    ["Auxiliary", "Rally Pass", "Events"],
    },
  ],

  /* ─────────────────────────────────────────────
     RSS SELLERS
     zone: the map zone coordinates or name
     rssTypes: array — options: "food","wood","stone","ore","gold"
     pricePerM: price per million resources
     minOrder:  minimum order size
  ───────────────────────────────────────────── */
  rssSellers: [
    // ── ADD / EDIT SELLERS BELOW ──────────────────────────
    // Example of a filled entry:
    // {
    //   ign:       "PlayerName",
    //   alliance:  "SBORN",
    //   zone:      "Zone 3 / L:450 R:200",
    //   rssTypes:  ["food", "wood"],
    //   pricePerM: "800k gems",
    //   minOrder:  "50M",
    //   contact:   "Discord DM",
    //   verified:  true,
    // },
    {
      ign:       "TBD",
      alliance:  "TBD",
      zone:      "TBD",
      rssTypes:  ["food", "wood"],
      pricePerM: "TBD",
      minOrder:  "TBD",
      contact:   "Discord DM",
      verified:  true,
    },
    {
      ign:       "TBD",
      alliance:  "TBD",
      zone:      "TBD",
      rssTypes:  ["ore", "stone"],
      pricePerM: "TBD",
      minOrder:  "TBD",
      contact:   "Discord DM",
      verified:  true,
    },
    {
      ign:       "TBD",
      alliance:  "TBD",
      zone:      "TBD",
      rssTypes:  ["gold", "food", "ore"],
      pricePerM: "TBD",
      minOrder:  "TBD",
      contact:   "Discord DM",
      verified:  true,
    },
    // ── ADD MORE SELLERS HERE ────────────────────────────
  ],

  /* ─────────────────────────────────────────────
     PILOTS
     services: array of { name, price } objects
     specialties: array — options: "rally","farm","war","scout","support","kvk","events"
  ───────────────────────────────────────────── */
  pilots: [
    // ── ADD / EDIT PILOTS BELOW ───────────────────────────
    // Example of a filled entry:
    // {
    //   ign:          "PilotName",
    //   alliance:     "SBORN",
    //   experience:   "3+ years, ex-top 5 kingdom",
    //   availability: "8 PM – 2 AM (PKT)",
    //   contact:      "Discord DM",
    //   verified:     true,
    //   services: [
    //     { name: "KvK March Management", price: "500k gems/day" },
    //     { name: "Farm Account (per day)", price: "200k gems" },
    //     { name: "Event Completion",      price: "300k gems" },
    //     { name: "Full Account (per day)","price": "800k gems" },
    //   ],
    //   specialties: ["kvk", "rally", "war"],
    // },
    {
      ign:          "TBD",
      alliance:     "TBD",
      experience:   "TBD",
      availability: "TBD",
      contact:      "Discord DM",
      verified:     true,
      services: [
        { name: "KvK March Management",   price: "TBD" },
        { name: "Farm Account (per day)", price: "TBD" },
        { name: "Event Completion",        price: "TBD" },
        { name: "Full Account (per day)", price: "TBD" },
      ],
      specialties: ["kvk", "farm"],
    },
    {
      ign:          "TBD",
      alliance:     "TBD",
      experience:   "TBD",
      availability: "TBD",
      contact:      "Discord DM",
      verified:     true,
      services: [
        { name: "KvK March Management",   price: "TBD" },
        { name: "Farm Account (per day)", price: "TBD" },
        { name: "Event Completion",        price: "TBD" },
        { name: "Full Account (per day)", price: "TBD" },
      ],
      specialties: ["rally", "war", "scout"],
    },
    {
      ign:          "TBD",
      alliance:     "TBD",
      experience:   "TBD",
      availability: "TBD",
      contact:      "Discord DM",
      verified:     true,
      services: [
        { name: "KvK March Management",   price: "TBD" },
        { name: "Farm Account (per day)", price: "TBD" },
        { name: "Event Completion",        price: "TBD" },
        { name: "Full Account (per day)", price: "TBD" },
      ],
      specialties: ["support", "farm", "kvk"],
    },
    // ── ADD MORE PILOTS HERE ─────────────────────────────
  ],

};
